import "./NavBar.css"
import Logo from "../../assets/logo.png"
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <nav className='navegacion'>
            <img className='logo' src={Logo} alt='logo'></img>
            <ul className='list'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Camisetas</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Botines</a></li>
            </ul> 
            <CartWidget/>
        </nav>
    )
}