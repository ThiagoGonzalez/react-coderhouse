import React, { useContext } from "react";
import { Context } from "../../context/Context";

export const CartScreen = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(Context);

  return (
    <div>
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
      <button className="btn btn-success" onClick={vaciarCarrito}>
        Finalizar compra
      </button>
    </div>
  );
};