import './ItemList.css'
import { Item } from '../../components/Item/Item';

export const ItemList = ({items, otraPropiedad}) => {
    return (
        <div className='products'>
        <div className='listado'></div>
            {
                items.map(producto => (
                    <Item key={producto.id} item={producto} />
                ))
            }
        </div>
    );
}