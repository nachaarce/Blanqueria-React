import ItemCount from "../components/ItemCount"
import {useState, useEffect} from 'react';
import ItemList from '../components/ItemList'

const onAdd = (contador)  => {
    (console.log (`${contador} unidades en tu carrito`));
}
    const ItemListContainer = (props) =>  {
        const [productos, setProductos] = useState ([]); 

        const buscarProductos = async () => {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Ferrari")
            const data = await response.json();
            setProductos(data.results);
            
        }

        useEffect (() => {
            buscarProductos();
        }, 
          // eslint-disable-next-line react-hooks/exhaustive-deps
        [])
        return (
            <>
            <div>
            <h1 style={{textAlign: 'center'}}>{props.greeting} </h1>
            <ItemCount initial={1} stock={5} onAdd= {onAdd} />
            </div>
            <ItemList items={productos}/>
            </>
        )
    }


export default ItemListContainer;
