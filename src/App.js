import React from "react";
import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactoPage } from "./components/ContactoPage/ContactoPage";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
          </div>
          <footer>derechos reservados</footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
