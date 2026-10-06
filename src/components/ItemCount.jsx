import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ItemCount.css';

function ItemCount({ stock, product }) {
  const [count, setCount] = useState(0);
  const { addItem } = useCart();

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addItem(product, count);
      setCount(0);
    }
  };

  return (
    <div className="item-count">
      <div className="quantity-controls">
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>

        <span className="item-count-value">{count}</span>

        <button onClick={increment} disabled={count === stock}>
          +
        </button>
      </div>

      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        disabled={count === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;