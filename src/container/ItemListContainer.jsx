const ItemListContainer = (greeting) =>  {
    console.log (greeting.list)
    return (
    <ul className="navbar-items">
        <li style={{fontStyle: greeting.estilo}}> {greeting.list}</li>
    </ul>
    )
}


export default ItemListContainer;