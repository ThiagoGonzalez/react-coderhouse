import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../funciones/pedirDatos';
import { ItemList } from './itemList';

export const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    


    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then(res => {setData(res)})
            .finally(() => {
                setLoading(false)
                console.log("FINALLY")
            })

    
    },[])

    return(
        <div>
            <h2>PROMISES - MAP</h2>
            {loading ? <h3>Cargando..</h3>
            : <ItemList productos={data}/>
            }
        </div>
    )

    
};