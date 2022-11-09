import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <div className="card">
            <img src={item.pictureUrl} alt={item.title} />
            <h4>{ item.title }</h4>
            <p>Precio: ${item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='detalles'>Ver detalles</button>
            </Link>
        </div>
    )
}
