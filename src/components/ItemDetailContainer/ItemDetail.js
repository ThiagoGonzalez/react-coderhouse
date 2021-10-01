import { Counter } from '../Counter/Counter'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import React, { useContext, useState } from 'react'

export const ItemDetail = ({category, id, nombre, desc, img, precio, stock}) => {

    const [cantidad, setCantidad] = useState(1)
    const {agregarAlCarrito} = useContext(CartContext)

    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }
    
    return(
        <div className = "card col-4">
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={handleAdd}/>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>

            <Link to="/cart">
                <button className="btn btn-success">Terminar compra</button>
            </Link>
        </div>
    )

}

