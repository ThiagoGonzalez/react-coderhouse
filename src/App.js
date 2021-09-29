import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './Styles/Styles.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Context } from "./context/Context";
import { useState } from "react";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { Checkout } from "./components/Checkout/Checkout";



function App() {

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
    <>

    <Context.Provider value={{carrito, totalCarrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito}}>
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:catId">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:itemId">
              <ItemListContainer/>
            </Route>
            <Route exact path="/detail/:itemId">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <CartScreen/>
            </Route>
            <Route exact path="/checkout">
              <Checkout/>
            </Route>
          </Switch>
      </BrowserRouter>
    </Context.Provider>

    </>
  );
}

export default App;
 