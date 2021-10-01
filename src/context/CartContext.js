import { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (prod) => {
    setCarrito([...carrito,prod])
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(prod => prod.id !==id))
  }

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
    
  }

  const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  }

    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito,totalCarrito}}>
            {children}
        </CartContext.Provider>
    )
}