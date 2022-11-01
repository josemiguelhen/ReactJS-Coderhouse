import './CartContaier.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {
    const value = useContext(CartContext);
    const { productosCarrito, getTotalPrice, getTotalProducts, removeItem } = value;
    console.log(productosCarrito);

    return (
        <div>
            <p>Pagina del carrito</p>
            <div>
                {
                    productosCarrito.map((producto) => (
                        <div className="productosChango">
                            <h3>{producto.title}</h3>
                            <img src={producto.image} alt={producto.title}/>
                            <p>Cantidad que llevas: { producto.quantity }</p>
                            <h4>Precio por unidad: {producto.price}</h4>
                            <h4>Precio por cantidad: {producto.quantityPrice}</h4>
                            {/* ponemos la funcion de tipo flecha xq le estamos pasando un parametro, sino no es necesaria */}
                            <button onClick={()=>removeItem(producto.id)}>Eliminar</button>
                        </div>
                    ))
                }
                
                {/* las funciones son las de CartContext, es el return de las mismas */}
                <p className='precioTotal'>Precio total: {getTotalPrice()}</p>
                <p className='productosTotal'>Total de productos: {getTotalProducts()} </p>  
            </div>
        </div>
    )
}