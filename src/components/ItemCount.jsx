import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock }) {
  const [count, setCount] = useState(0);

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

  return (
    <div className="item-count">
      <button onClick={decrement} disabled={count === 0}>-</button>
      <span className="item-count-value">{count}</span>
      <button onClick={increment} disabled={count === stock}>+</button>
    </div>
  );
}

export default ItemCount;