import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import Anime1 from "../../../assets/productos/anime11.jpg";
import Anime2 from "../../../assets/productos/anime2.jpg";
import Anime3 from "../../../assets/productos/anime3.jpg";
import Anime4 from "../../../assets/productos/anime4.jpg";
import Canguro1 from "../../../assets/productos/poleroncanguro1.jpg";
import Canguro2 from "../../../assets/productos/polerocanguro2.jpg";
import Canguro3 from "../../../assets/productos/polerocanguro3.jpg";
import Canguro4 from "../../../assets/productos/poleroncanguro4.jpg";

const products = [
    {
        id: 1,
        image: Anime1,
        title: "Polera shingueki",
        descripcion: "Polera negra hombre Shingheki",
        precio: 15990,
        category: "poleras manga corta",
    },
    {
        id: 2,
        image: Anime2,
        title: "Polera naruto",
        descripcion: "Polera negra hombre Naruto",
        precio: 15990,
        category: "poleras manga corta",
    },
    {
        id: 3,
        image: Anime3,
        title: "Polera Tororo",
        descripcion: "Polera negra hombre Totoro",
        precio: 15990,
        category: "poleras manga corta",
    },
    {
        id: 4,
        image: Anime4,
        title: "Polera Ranma 1/2",
        descripcion: "Polera blanca mujer Ranma 1/2",
        precio: 14990,
        category: "poleras manga corta",
    },
    {
        id: 5,
        image: Canguro1,
        title: "Poleron alien 1",
        descripcion: "Poleron canguro negro hombre Alien",
        precio: 24990,
        category: "Polerones canguro",
    },
    {
        id: 6,
        image: Canguro2,
        title: "Poleron alien 2",
        descripcion: "Poleron canguro negro hombre Alien",
        precio: 24990,
        category: "Polerones canguro",
    },
    {
        id: 7,
        image: Canguro3,
        title: "Poleron Wolf",
        descripcion: "Poleron canguro negro hombre Wolf",
        precio: 24990,
        category: "Polerones canguro",
    },
    {
        id: 8,
        image: Canguro4,
        title: "Poleron Apocalipsis",
        descripcion: "Poleron canguro negro hombre Apocalipsis Now",
        precio: 24990,
        category: "Polerones canguro",
    },
];



export const ItemDetailContainer = () => {


    const [data, setData] = useState({});


    const { detalleId } = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });

        getData.then(res => setData(res.find(prod => prod.id === parseInt(detalleId))));

    }, [detalleId])

    return (
        <ItemDetail data={data} />
    )
}


export default ItemDetailContainer;
