import { Link } from "react-router-dom";
import './EmptyCart.css'

export function EmptyCart() {
    return (
        <div>
            <h1>No has agregado productos al carrito!</h1>
            <p>
            <Link to='/'>Ir al inicio</Link>
            </p>
        </div>
    )
}