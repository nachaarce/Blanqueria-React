const ItemDetail = ({items}) => {
return (
    <div className="card-item">
            <div className="container">
            <img src={items.thumbnail} alt="img"/>
                <h4>{items.title}</h4>
                <p>${items.price}</p>
                <button className="button1">Agregar producto</button>
            </div>
        </div>
)
}
export default ItemDetail;