import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {

    return(
        <header>
            <nav>
                <Link className = "mx-4" to={"/"}>Inicio</Link>
                <Link className = "mx-1" to={"/category/consola"}>Consolas</Link>
                <Link className = "mx-1" to={"/category/componente"}>Componentes</Link>
                <Link className = "mx-1" to={"/category/periferico"}>Perifericos</Link>
                <CartWidget/>
            </nav>

        </header>
        

    )

}