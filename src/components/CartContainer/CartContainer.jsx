import './CartContaier.css'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from '../../utils/firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { EmptyCart } from '../EmptyCart/EmptyCart';
import Swal from 'sweetalert2';

export const CartContainer = () => {
    const value = useContext(CartContext);
    const { productosCarrito, getTotalPrice, getTotalProducts, removeItem, removeAll} = value;
    const [compraId, setCompraId] = useState('')

    const sendOrder = (evt) => {
        // evita que se recarga la pagina
        evt.preventDefault();
        // asi obtenemos los valores del formulario
        const compra = {
            buyer: {
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value,
            },
            items: productosCarrito,
            total: getTotalPrice()
        };
        // creamos la referencia de donde voy a guardar la informacion en la base de datos
        const queryRef = collection(db, 'orders');
        //  agregar la informacion
        addDoc(queryRef, compra).then((resultado) => {
            setCompraId(resultado.id);
        })
    }

    const mostrarAlerta = () => {
        Swal.fire({
          icon: 'success',
          title: 'Compra exitosa!',
          text: 'Estás siendo redirigido',
          html: `<p>Tu número de orden es: ${compraId}</p>`,
        }).then(function(){
            window.location = '/';
            removeAll()
        })
      }
    
    const updateProduct = () => {
        // creamos la referencia del documento que vamos a actualizar
        const queryRef = doc(db, 'items', 'Fjz3RPSy1EpN40vQYr59');
        // actualizamos el documento
        updateDoc(queryRef, { price: 63 }).then(() => console.log('actualizado correctamente')).catch((error) => console.log('hubo un error'));
    }

    return (
        <div>
            {
                productosCarrito.length > 0 ?
                    <div>
    
                        {compraId && <p>Su compra fue realizada de forma existosa, muchas gracias! Este es su numero de su orden: {compraId}</p>}
                    
                        {
                            productosCarrito.map((producto) => (
                                <div className="productosOnda">
                                    <h3>{producto.title}</h3>
                                    <img src={producto.pictureUrl} alt={producto.title} />
                                    <p>Cantidad que llevas: {producto.quantity}</p>
                                    <h4>Precio por unidad: {producto.price}</h4>
                                    <h4>Precio por cantidad: {producto.quantityPrice}</h4>
                                    {/* ponemos la funcion de tipo flecha porque le estamos pasando un parametro, sino no es necesaria */}
                                    <button onClick={() => removeItem(producto.id)}>Eliminar</button>
                                </div>
                            ))
                        }

                        <div className='vaciar'>
                            {<button onClick={() => removeAll()}>Vaciar</button>}
                        </div>
                        {/* las funciones son las de CartContext, es el return de las mismas */}
                        <p className='precioTotal'>Precio total: {getTotalPrice()}</p>
                        <p className='productosTotal'>Total de productos: {getTotalProducts()} </p>
                        <form className='formulario' onSubmit={sendOrder}>
                            <label>Nombre</label>
                            <input type="text" className='form-control' placeholder='Nombre' maxLength={40} />
                            <label>Apellidos</label>
                            <input type="text" className='form-control' placeholder='Apellidos' maxLength={40} />
                            <label>Dirección</label>
                            <input type="text" className='form-control' placeholder='Dirección' maxLength={100} />
                            <label>Teléfono</label>
                            <input type="tel" className='form-control' placeholder='Teléfono' maxLength={11} />
                            <label>Correo</label>
                            <input type="mail" className='form-control' placeholder='Correo Electrónico' maxLength={30} />
                            <button type="submit">Enviar Orden</button>
                        
                        </form>
                        
                        <button className='update' onClick={updateProduct}>Actualizar Productos</button>
                    </div>
                    :
                    <EmptyCart />
                        
            }
            {compraId && mostrarAlerta()}
        </div>
    )
}

