import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './Styles/Styles.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {


  return (
    <>
      <NavBar/>
      <BrowserRouter>
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
            <h1>Proximamente</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
 