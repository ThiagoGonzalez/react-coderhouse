import React from 'react'

export const Item = (item) => {

    return(
        <div>
            <h3>{item.nombre}</h3>
            <p>{item.precio}</p>                            
        </div>
    )
}