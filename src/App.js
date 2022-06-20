import './App.css';
import React, { createContext, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar.js';
import Footer from './components/Footer/Footer';  
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/ItemDetailContainer/ItemDetailContainer.css';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/cart/Cart.js';

 export const Context = createContext();

function App() {

  return (
    <CartProvider >
      <BrowserRouter>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>        
          <Route path="/" element={<ItemListContainer title="Tienda Adicta" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer title="Tienda Adicta" />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer title="Tienda Adicta" />} />
        </Routes>
      </Suspense>
        <Footer />
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;

