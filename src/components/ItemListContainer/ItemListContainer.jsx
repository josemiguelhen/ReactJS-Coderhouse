import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../utils/firebase";

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const queryRef = categoryId ? query(collection(db, 'items'), where('categoria', '==', categoryId)) : collection(db, 'items');
        getDocs(queryRef).then((response) => {
                const results = response.docs;
                const docs = results.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                });
            setProductos(docs)
            setLoading(false)
            });
    }, [categoryId])

    return (
        <div className="contenedor">
            {
            loading ? <p>Cargando productos...</p> :
            <ItemList items={productos} otraPropiedad={123} />
            }
        </div>
    )
}