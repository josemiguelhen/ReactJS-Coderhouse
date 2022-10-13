import "./ItemDetail.css";
import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {

    const [contador, setContador] = useState(0);

    const addProduct = (variable1) => {
        setContador(variable1);
    }

    const mostrarTexto = () => {
        
    }


    return (
        <div className="container">
            {/* <p>item detail</p> */}
            <div className="image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="product">
                <h4>{item.title}</h4>
                <h5>$ { item.price }</h5>
            </div>
            <p>productos agregados: {contador}</p>
            <ItemCount stock={10} initial={1} onAdd={addProduct}showText={mostrarTexto}/>
        </div>
    );
};