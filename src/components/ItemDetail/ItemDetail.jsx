import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";

export const ItemDetail = ({ item }) => {
    
    const {addProduct} = useContext(CartContext);

    const agregarProducto = (quantity) => {
        addProduct(item, quantity);
    }

    return (
        <div className="container">
            {/* <p>item detail</p> */}
            <div className="image">
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="product">
                <h3>{item.title}</h3>
                <h3>$ {item.price}</h3>
                <h6>{item.details} { item.platforms }</h6>
                <p>Stock disponible: {item.stock}</p>
            </div>
            <ItemCount stock={item.stock} initial={1} onAdd={agregarProducto}/>
        </div>
    );
};