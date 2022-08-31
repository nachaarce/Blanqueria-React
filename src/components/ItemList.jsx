import Item from './Item'
const ItemList = ({productos}) => {
    {productos.map ((producto) => {
        return (
            <Item  title={productos.title} permalink={productos.permalink} id={id} />
        );
    })}
}

export default ItemList;