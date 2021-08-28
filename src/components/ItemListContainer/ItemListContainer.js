import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../funciones/pedirDatos';
import { ItemList } from './itemList';
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const { catId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      pedirDatos()
        .then((res) => {
          if (catId) {
            const arrayFiltrado = res.filter((prod) => prod.category === catId);
            setData(arrayFiltrado);
          } else {
            setData(res);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }, [catId]);
  
    return <>{loading ? <h2>Cargando...</h2> : <ItemList productos={data} />};</>;
  };