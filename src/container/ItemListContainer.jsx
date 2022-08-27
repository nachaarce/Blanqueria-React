import ItemCount from "../components/ItemCount"
const ItemListContainer = (props) =>  {
    const onAdd = (val)  => {
        (console.log (`${val} unidades en tu carrito`));
    }
    return (
        <div>
        <h1 style={{textAlign: 'center'}}>{props.greeting} </h1>
        <ItemCount initial={1} stock={5} onAdd= {onAdd} />
        </div>
    )
}


export default ItemListContainer;
