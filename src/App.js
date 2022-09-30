import logo from './logo.svg';
import './App.css';
import  {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/Navbar/NavBar";

function App() {
  return(
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Productos"/>

    </div>
  );
}

export default App;
