import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
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
                    <li><CartWidget/></li>
                </ul>
            </nav>
        </header>
        

    )

}