import React, { createContext, useContext, useState } from "react";
import { Context } from "../../context/Context";
import { generarOrden } from "../../firebase/generarOrden";
import Swal from "sweetalert2";
import { Redirect } from "react-router";


export const Checkout = () => {
    
    const {carrito, totalCarrito, vaciarCarrito} = useContext(Context)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        telefono: 0,

    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if(values.nombre.length > 2 && values.email.length > 2 && values.telefono.length > 1){
            generarOrden(values, carrito, totalCarrito)
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Orden de compra generada!',
                        text: 'Su compra se ha registrado correctamente',
                        footer: `ID de compra: ${res}`
                      })
                    vaciarCarrito()
                    
                    
                })
                .catch( err => alert(err))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Campos ingresados invalidos',
                text: 'Revise la informacion ingresada',
              })
        }
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>
            
        {!carrito.length 
            ? <Redirect to="/"/>
            :
        
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={values.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                        required
                    />
                    <input
                        type="telefono"
                        value={values.telefono}
                        onChange={handleInputChange}
                        name="telefono"
                        required
                    />
                    <input
                        type="email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        required
                    />
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        }

        </div>
    )
}