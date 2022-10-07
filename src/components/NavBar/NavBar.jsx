import "./NavBar.css";
import ImagenLogo from "../../assets/Logo1.jpg";
import { CartWidget } from '../CartWidget/CartWidget';
export const NavBar = () => {
    return (
        <nav className="navegation">
            <img className= 'logo' src={ImagenLogo} alt='logo'/>
            <ul className = 'list'>
                <li><a href="/" >Inicio</a></li>
                <li><a href="/" >Poleras manga corta</a></li>
                <li><a href="/" >Poleras manga larga</a></li>
                <li><a href="/" >Polerones Canguro</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}