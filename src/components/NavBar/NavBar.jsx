// import Button from 'react-bootstrap/Button';
import "./NavBar.css"
// import Chango from "../../assets/chango.png"
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <nav className='navegacion'>
            {/* <img src={xxxx}></img> */}
            <img className='logo' src='https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg' alt='logo'></img>
            <ul className='list'>
                <li><a href="#">inicio</a></li>
                <li><a href="#">camisas</a></li>
                <li><a href="#">zapatos</a></li>
                <li><a href="#">chomba</a></li>
            </ul> 
            {/* <Button className='chango'><img className='chango' src={Chango} alt="" /></Button> */}
            <CartWidget/>
        </nav>
    )
}