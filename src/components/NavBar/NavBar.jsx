import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/logo.jpg"
import { CartWidget } from '../CartWidget/CartWidget';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = ()=>{
    const categories=[{url:"mangaCorta", name:"Poleras manga corta"}, {url:"mangaLarga", name:"Poleras manga larga"},
    {url:"mangaTrescuartos", name:"Poleras manga 3/4"}, {url:"canguro", name:"Polerones canguro"},{url:"mas-productos", name:"..."}
] 
    return( 
        <nav className='navigation '>
            <Link to="/"><img src={Logo} className='logoImg' alt="Mejor Horchata"></img></Link>
            <ul className='list mt-4 pt-1'>
                
                {
                 categories.map(category=>{
                    return(
                    <li><NavLink to={`/category/${category.url}`}>{category.name}</NavLink></li>
                    )
                })

                 }
                  

            </ul>
            <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} to='/cart'>
            <CartWidget/>
            </NavLink>
        </nav>
    )
}