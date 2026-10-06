import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      🛒 <b>{totalQuantity}</b>
    </Link>
  );
}

export default CartWidget;