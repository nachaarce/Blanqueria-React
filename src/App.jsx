// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer list="Hogar" estilo="italic"/>
        <ItemListContainer list="Baño" estilo="italic"/>
        <ItemListContainer list="Fragancias" estilo="italic"/>
      </header>
      <main>
        <h1 className='titulo'>Bienvenido a Blanqueria MyM</h1>
      </main>
      </div>
  );
}

export default App;
