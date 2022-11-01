import "./NavBar.css"
import Logo from "../../assets/logo.png"
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <nav className='navegacion'>
                <div>
                    <Link to='/'>
                    <img className='logo' src={Logo} alt='logo'></img>
                    </Link>
                </div>
                <div className="list">
                    <Link to='/'>Inicio</Link>
                    <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/juegos'>Juegos</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/consolas'>Consolas</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/accesorios'>Accesorios</NavLink>
                    <Link to='/contacto'>Contacto</Link>
                </div> 
                <div>
                    <Link to='/cart'>
                        <CartWidget/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}