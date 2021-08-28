import React from 'react'
import './NavBar.css'

export const NavBar = () => {

    return(
        <header>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/category/consola">Consolas</a></li>
                    <li><a href="/category/componente">Componentes</a></li>
                    <li><a href="/category/periferico">Perifericos</a></li>
                </ul>
            </nav>
        </header>

    )

}