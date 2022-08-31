const Item = ({title, thumbnail,order_backend, permalink}) => {
    return (
        <div key={order_backend}>
            <img src={thumbnail}/>
            <div className="container">
                <h4>{title}</h4>
                <p>{permalink}</p>
                <button>Agregar producto</button>
            </div>
        </div>
    )

}
export default Item;