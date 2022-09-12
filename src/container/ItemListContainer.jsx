import ItemCount from "../components/ItemCount"
import {useState, useEffect} from 'react';
import ItemList from '../components/ItemList'
import ItemDetail from "../components/ItemDetail";

const onAdd = (contador)  => {
    (console.log (`${contador} unidades en tu carrito`));
}
    const ItemListContainer = (props) =>  {
        const [productos, setProductos] = useState ([]); 

        const buscarProductos = async () => {
            try{
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Ferrari");
            const data = await response.json();
            setProductos(data.results);
            }
            catch(e){
                console.log(e)
            }
        } 
        console.log(productos)

        useEffect (() => {
            const time = setTimeout(() =>{
                buscarProductos();
            }, 2000);
        }, [])

        return (
            <>
            <div>
            <h1 style={{textAlign: 'center'}}>{props.greeting} </h1>
            {/* <ItemCount initial={1} stock={5} onAdd= {onAdd} /> */}
            </div>
            <ItemList productos={productos}/>
            </>
        )
    }


export default ItemListContainer;
