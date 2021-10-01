import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {

    return(
        <header className = "encabezado">
            <Link to = {"/"}>
                <h1>CoderStore</h1>
            </Link>
            <nav class>
                <Link className = "mx-4 link" to={"/"}>Inicio</Link>
                <Link className = "mx-4 link" to={"/category/consola"}>Consolas</Link>
                <Link className = "mx-4 link" to={"/category/componente"}>Componentes</Link>
                <Link className = "mx-4 link" to={"/category/periferico"}>Perifericos</Link>    
            </nav>
            <CartWidget/>


        </header>
        

    )

}
