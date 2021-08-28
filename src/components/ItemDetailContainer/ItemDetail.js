import React from 'react'

export const ItemDetail = ({category, id, nombre, desc, img, precio}) => {

    return(
        <div className = "card col-4">
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
        </div>
    )

}