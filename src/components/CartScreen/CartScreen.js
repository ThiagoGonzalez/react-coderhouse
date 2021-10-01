import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartScreen = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext);

  return (
    <div class = "container">
      <h1>Resumen de compra</h1>
      {carrito.map((prod) => (
        <div>
          <h3>{prod.nombre}</h3>
          <h3>Cantidad:{prod.cantidad}</h3>
          <h3>Precio: ${prod.precio * prod.cantidad}</h3>
        </div>
      ))}

      <hr></hr>
      <button className="btn btn-danger" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
      <Link to="/checkout">
          <button className="btn btn-success">
            Finalizar compra
          </button>
      </Link>
    </div>
  );
};