import Item from './Item'
const ItemList = ({productos}) => {
    return (
    productos.map ((producto) => {
        return (
            <div className="card-container">
            <Item producto={producto}/>
            </div>
        );
    })
    )
}


export default ItemList;