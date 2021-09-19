import { Counter } from '../Counter/Counter'
import { Context } from '../../context/Context'

import React, { useContext, useState } from 'react'

export const ItemDetail = ({category, id, nombre, desc, img, precio, stock}) => {

    const [cantidad, setCantidad] = useState(1)
    const {agregarAlCarrito} = useContext(Context)

    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }
    
    return(
        <div className = "card col-4">
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>
            <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={handleAdd}/>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
        </div>
    )

}

