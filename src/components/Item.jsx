import './Item.css';

function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.img} alt={product.name} className="item-img" />
      <h3 className="item-name">{product.name}</h3>
      <p className="item-description">{product.description}</p>
      <p className="item-price">${product.price}</p>
      <p className="item-stock">Stock: {product.stock}</p>
    </div>
  );
}

export default Item;