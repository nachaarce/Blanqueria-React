import {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = (props) => {
        const [productos, setProductos] = useState ([]); 

        const buscarProductos = async () => {
            try{
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Ferrari")
            const data = await response.json();
            setProductos(data.results[1]);
            }catch(e){
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
            <div>
                <ItemDetail items={productos} />
            </div>
        );
}

export default ItemDetailContainer;