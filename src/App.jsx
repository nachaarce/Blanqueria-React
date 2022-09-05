  // import logo from './logo.svg';
  import './App.css';
  import NavBar from './components/NavBar';
  import ItemListContainer from './container/ItemListContainer';
  import ItemDetailContainer from './container/ItemDetailContainer';


  function App() {
    return (
      <div>
        <header>
          <NavBar />
          {/* <ItemListContainer /> */}
          <div>
          <ItemDetailContainer greeting='Bienvenidos a blanqueria MyM'/>
          </div>
        </header>
        </div>
    );
  }

  export default App;
