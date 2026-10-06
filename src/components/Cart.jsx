import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const navigate = useNavigate();
  const { cart, removeItem, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h1>Tu carrito</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
            padding: '1rem',
            borderBottom: '1px solid #ddd',
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>
              Subtotal: ${item.price * item.quantity}
            </p>
          </div>

          <button onClick={() => removeItem(item.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <h2>Total: ${total}</h2>

<button onClick={clearCart}>
  Vaciar carrito
</button>

<button onClick={() => navigate('/checkout')}>
  Finalizar compra
</button>
    </div>
  );
}

export default Cart;