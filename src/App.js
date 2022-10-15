import './App.css';

import  {BrowserRouter, Routes, Route} from "react-router-dom"

import {NavBar} from "./components/Desafios/NavBar/NavBar"
import ItemListContainer from "./components/Desafios/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/Desafios/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Desafios/Cart/Cart"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

