import "./NavBar.css"
import Logo from "../../assets/logo.jpg"
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
                    <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/mangaCorta'>Poleras manga corta</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/mangaLarga'>Poleras manga larga</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/mangaTrescuartos'>Poleras manga 3/4</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to='/category/canguro'>Polerones canguro</NavLink>
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