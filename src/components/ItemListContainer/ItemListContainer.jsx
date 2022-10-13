import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    console.log(useParams());
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(arregloProductos);
        }, 2000);
    });

    useEffect(() => {
        promesa.then((response) => {
            if (categoryId) {
                // se filtran por categoria
                const productsFiltered = response.filter(elm => elm.categoria === categoryId);
                setProductos(productsFiltered);
            } else {
                // muestra todos los productos
                setProductos(response)
            }
        })
    }, [categoryId])

    return (
        <div className="contenedor">
            {/* <p>item list container</p> */}
            <ItemList items={productos} otraPropiedad={123} />
        </div>
    )
}