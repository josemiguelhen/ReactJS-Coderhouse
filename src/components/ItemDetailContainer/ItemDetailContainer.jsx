import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemProduct, setItemProduct] = useState({})

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(() => {
        const getProducto = async () => {
            const productos = await promesa;
            console.log('productos', productos);
            const producto = productos.find(elemento => elemento.id === parseInt(id))
            console.log("productos", producto);                setItemProduct(producto)
        }
        getProducto()
    }, [id]);


    return (
        <div className='aaa'>
            <p>Detalles del producto</p>
            <ItemDetail item={itemProduct} />
        </div>
    )
}