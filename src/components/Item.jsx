const Item = ({title, thumbnail,order_backend, permalink}) => {
    return (
        <div key={id}>
            <img src=""/>
            <div className="container">
                <h4>{title}</h4>
                <p>{permalink}</p>
                <button>Agregar producto</button>
            </div>
        </div>
    )

}
export default Item;