import Item from './Item'
const ItemList = ({productos}) => {
    {productos.map ((producto) => {
        return (
            <Item  title={producto.title} thumbnail={producto.thumbnail} order_backend={producto.order_backend} permalink={producto.permalink} />
        );
    })}
}

export default ItemList;