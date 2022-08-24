const ItemListContainer = (props) =>  {
    return (
        <h1 style={{fontStyle: props.estilo , textAlign: 'center', fontSize: props.size, color: props.gris, fontWeight: props.weight}}>{props.greeting} </h1>
    )
}


export default ItemListContainer;