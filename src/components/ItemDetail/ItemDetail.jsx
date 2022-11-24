import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import { Link, NavLink } from 'react-router-dom';

export const ItemDetail = ({ item }) => {
    
    const {addProduct} = useContext(CartContext);

    const agregarProducto = (quantity) => {
        addProduct(item, quantity);
    }

    return (
        <div className="container">
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
            {
                <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInActiva'} to='/cart'>
                    <button className='btn btn-dark'>Terminar Compra</button></NavLink>
            }
        </div>
    );
};