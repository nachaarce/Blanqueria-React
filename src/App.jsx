// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer greeting="Bienvenido a la Blanqueria" estilo="italic"/>
      </header>
      </div>
  );
}

export default App;
