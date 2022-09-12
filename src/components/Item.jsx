import ItemCount from "../components/ItemCount"

// const onAdd = (contador)  => {
//     (console.log (`${contador} unidades en tu carrito`));
// }
const Item = ({producto}) => {
    return (
        <div className="card-item">
            <div className="container">
            <img src={producto.thumbnail} alt="img"/>
                <h4>{producto.title}</h4>
                <p>${producto.price}</p>
                <span><ItemCount initial={1} stock={6}/></span>
                <button className="button1" >Agregar producto</button>
            </div>
        </div>
    )

}
export default Item;