import "./NavBar.css";

import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import Logo from "../../../assets/logo.jpg";
import {CartWidget} from "../CartWidget/CartWidget";


export const NavBar = ()=>{
    return(
        <nav className="nav">
            <Link to="/"> <img src={Logo} alt="Logo" className="logo"/></Link>
            
            <ul className="lista">
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/categoria/Poleras manga corta'>Poleras manga corta</NavLink></li>
                <li><NavLink to='/categoria/Polerones canguro'>Polerones canguro</NavLink></li>
                <li><NavLink to='/Cart'>Cart</NavLink></li>
            </ul>
            <div className="carrito">
            <CartWidget />
            </div>
        </nav>
    )
}