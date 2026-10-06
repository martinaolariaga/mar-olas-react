import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail({ producto }) {
    return (
        <div className="item-detail">
            <img src={producto.img} alt={producto.name} className="item-detail-img" />
            <div className="item-detail-info">
                <h2>{producto.name}</h2>
                <p className="item-detail-category">Categoría: {producto.category}</p>
                <p className="item-detail-price">${producto.price}</p>
                <p className="item-detail-description">{producto.description}</p>
                <p className="item-detail-stock">Stock: {producto.stock}</p>
                

                <ItemCount stock={producto.stock} product={producto} />
            </div>
        </div>
    );
}


export default ItemDetail;

