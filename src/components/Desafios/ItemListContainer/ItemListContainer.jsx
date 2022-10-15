import React, { useState, useEffect } from "react";

import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import Anime1 from "../../../assets/productos/anime11.jpg";
import Anime2 from "../../../assets/productos/anime2.jpg";
import Anime3 from "../../../assets/productos/anime3.jpg";
import Anime4 from "../../../assets/productos/anime4.jpg";
import Canguro1 from "../../../assets/productos/poleroncanguro1.jpg";
import Canguro2 from "../../../assets/productos/polerocanguro2.jpg";
import Canguro3 from "../../../assets/productos/polerocanguro3.jpg";
import Canguro4 from "../../../assets/productos/poleroncanguro4.jpg";

const productos = [
    {
        id: 1,
        image: Anime1,
        title: "Polera Shingueki",
        category: "Poleras manga corta",
    },
    {
        id: 2,
        image: Anime2,
        title: "Polera Naruto",
        category: "Poleras manga corta",
    },
    {
        id: 3,
        image: Anime3,
        title: "Polera Totoro",
        category: "Poleras manga corta",
    },
    {
        id: 4,
        image: Anime4,
        title: "Polera Ranma 1/2",
        category: "Poleras manga corta",
    },
    {
        id: 5,
        image: Canguro1,
        title: "Poleron alien 1",
        category: "Polerones canguro",
    },
    {
        id: 6,
        image: Canguro2,
        title: "Poleron alien 2",
        category: "Polerones canguro",
    },
    {
        id: 7,
        image: Canguro3,
        title: "Poleron Wolf",
        category: "Polerones canguro",
    },
    {
        id: 8,
        image: Canguro4,
        title: "Poleron Apocalipsis",
        category: "Polerones canguro",
    },
];


export const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([]);


    const { categoriaId } = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(prod => prod.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }

    }, [categoriaId])


    return (
        <div className="cont">
            {greeting}
            <div className="itemList">
                <ItemList data={data} />
            </div>
        </div>

    )
}

export default ItemListContainer;