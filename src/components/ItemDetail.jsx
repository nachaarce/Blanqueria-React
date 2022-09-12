const ItemDetail = ({items}) => {
    return (
        items.map((item) => {
            return (
                <div className="card-item" key={item.id}>
                        <div className="container">
                            <img src={item.thumbnail} alt="img"/>
                                <h4>{item.title}</h4>
                            <p>${item.price}</p>
                            <p>{item.id}</p>
                                <button className="button1">Agregar producto</button>
                            </div>
                        </div>
            )
        }) 
    )
    }
    export default ItemDetail;

    // return (
//     <div className="card-item">
//             <div className="container">
//             <img src={items.thumbnail} alt="img"/>
//                 <h4>{items.title}</h4>
//                 <p>${items.price}</p>
//                 <p>{items.id}</p>
//                 <button className="button1">Agregar producto</button>
//             </div>
//         </div>
// )
// }