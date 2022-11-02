import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemProduct, setItemProduct] = useState({})

    

    useEffect(() => {
        const getProducto = async () => {
            // creamos la referencia del documento al que vamos a consultar
            const queryRef = doc(db, 'items', id);
            // hacemos la consulta
            const response = await getDoc(queryRef);
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setItemProduct(newDoc);
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