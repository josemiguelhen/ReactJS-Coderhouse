import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    // verifica si el producto ya existe o no
    const isInCart = (id) => {
        const productExists = productosCarrito.some((elemento) => elemento.id === id);
        return productExists
    }
    
    const addProduct = (item, quantity) => {
        const productosCarritoCopy = [...productosCarrito];
        // si el producto ya existe, modifico la propiedad quantity de ese objeto.
        if(isInCart(item.id)){
            const posProduct = productosCarritoCopy.findIndex((elemento) => elemento.id === item.id);
            productosCarritoCopy[posProduct].quantity += quantity;
            // multiplicamos la cantidad nueva por el precio del producto
            // le asignamos ese valor a quantityPrice
            productosCarritoCopy[posProduct].quantityPrice = productosCarritoCopy[posProduct].quantity* productosCarritoCopy[posProduct].price;
            setProductosCarrito(productosCarritoCopy);
        } else {
            // sino agrego el nuevo producto al arreglo
            const newProduct = {
            ...item,
                quantity: quantity,
                // esto es para cuando agregamos un nuevo producto
                quantityPrice:quantity*item.price,
            };
            productosCarritoCopy.push(newProduct);
            setProductosCarrito(productosCarritoCopy);
        }
    }

    // sumamos todos los precios de los productos agregados para obtener el precio total
    const getTotalPrice = () => {
        // reduce nos permite acumular valores en una variable y esa variable al final es el valor de toda la operacion. Ese valor ya podemos guardarlo en otra variable
        // reduce recibe un callback con 2 parametros, el acumulador que guarda los valores que se van agregando y el item. el valor inicial del acumulador es 0. Una vez que termina, acc va a tener un valor final, que nos lo devuelve el return.
        const precioTotal = productosCarrito.reduce((acc, curr) => acc + curr.quantityPrice, 0);
        return precioTotal;
    }

    const getTotalProducts = () => {
        // mismo concepto, pero con la cantidad de productos
        const totalProducts = productosCarrito.reduce((acc, curr) => acc + curr.quantity, 0);
        return totalProducts;
    }

    const removeItem = (id) => {
        // le decimos que por cada elemento, si el id de ese elemento no es igual al id que le estamos pasando entonces ese elemento se guarda en newProducts. asi prevenimos que ese producto no este en el arreglo original
        const newProducts = productosCarrito.filter((elemento) => elemento.id !== id);
        setProductosCarrito(newProducts)
    }

    return (
        <CartContext.Provider value={{productosCarrito, addProduct, getTotalPrice, getTotalProducts, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}