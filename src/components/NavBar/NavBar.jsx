import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import "./navbar.css"
function NavBar() {
    return (
        <nav className = "navegacion">
            <ul className = "lista_navegacion">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li> <a href="#">
                    <CartWidget />
                </a></li>
            </ul>
        </nav>

        
    )
}

export default NavBar