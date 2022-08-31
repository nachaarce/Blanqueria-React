import Item from './Item'
const ItemList = ({productos}) => {
    {productos.map ((producto,index) => {
        return (
            <Item  item={producto} key={index}/>
        );
    })}
}


export default ItemList;