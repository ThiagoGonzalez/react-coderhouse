import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './Styles/Styles.css'



function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "PROMISES, ASINCRONIA, MAP"/>
    </>
  );
}

export default App;
