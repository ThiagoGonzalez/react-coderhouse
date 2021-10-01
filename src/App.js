import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './Styles/Styles.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ContextProvider } from "./context/Context";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { Checkout } from "./components/Checkout/Checkout";



function App() {

  return (
    <>
                
    <ContextProvider>
    <CartProvider>
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
      </CartProvider>
    </ContextProvider>

    </>
  );
}

export default App;
 