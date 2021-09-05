import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

export const CartWidget = () => {


    const {cantidadCarrito} = useContext(Context)

    return(
        <div>
            <Link to = "/cart">
                <FaShoppingCart/>
                <span>{cantidadCarrito()}</span>
            </Link>
        </div>
    )
}