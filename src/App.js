
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Tienda Adicta" />
    </div>
  );
}

export default App;
