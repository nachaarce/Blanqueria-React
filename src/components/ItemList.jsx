import Item from './Item'
const ItemList = ({productos}) => {
    {productos.map ((producto) => {
        return (
            <Item  item={producto} />
        );
    })}
}

export default ItemList;