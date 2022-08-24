// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer greeting="Hogar" estilo="italic" size="30px"/>
        <ItemListContainer greeting="Productos para armonizar tu lugar." estilo="italic" size="20px" gris="gray" weight="normal" />
      </header>
      </div>
  );
}

export default App;
