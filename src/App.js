
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar.jsx';
import Footer from './components/Footer/Footer';  
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/ItemDetailContainer/ItemDetailContainer.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>        
          <Route path="/" element={<ItemListContainer title="Tienda Adicta" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer title="Tienda Adicta" />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
