    import React, {useState, useEffect} from 'react';
    

    const ItemCount = ({initial, stock, onAdd}) => {
        const [count, setCount] = useState(parseInt(initial));
        const restProduct = () => {
            setCount(count - 1);
        }
        const sumProduct = () => {
            setCount(count + 1);
        }
        useEffect(() => {
            setCount(parseInt(initial));
        }, [initial])
        
        return (
            <div id='count'>
                <div className='container'>
                    <div className='row'>
                <button disabled={count <= 1} onClick={restProduct} className="btnLess">-</button>
                <span className='countNumber'>{count}</span>
                <button disabled={count >= stock } onClick={sumProduct} className="btnMore">+</button>
                </div>
                {/* <div className='row'>
                    <button  disabled={count >= stock} onClick={() => onAdd(count)} className="btnAdd">Agregar al carrito</button>
                </div> */}
                </div>
            </div>
        )
    }

    export default ItemCount;