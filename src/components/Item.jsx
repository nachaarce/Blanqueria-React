const Item = ({producto}) => {
    return (
        <div className="card-item">
            <div className="container">
            <img src={producto.thumbnail} alt="img"/>
                <h4>{producto.title}</h4>
                <p>{producto.price}</p>
                <button>Agregar producto</button>
            </div>
        </div>
    )

}
export default Item;