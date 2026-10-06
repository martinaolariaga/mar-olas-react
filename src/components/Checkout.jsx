import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Checkout() {
  const { cart, total, clear } = useCart();
  const { user, loadingAuth } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    extraInfo: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  if (loadingAuth) {
    return <p style={{ textAlign: 'center' }}>Cargando...</p>;
  }

  if (!user) {
  return <Navigate to="/login" replace />;
}

if (cart.length === 0 && !orderId) {
  return <Navigate to="/cart" replace />;
}

  if (orderId) {
    return (
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h1>¡Compra realizada! 🎉</h1>

        <p>Gracias por tu compra.</p>

        <p>Tu número de orden es:</p>

        <strong>{orderId}</strong>

        <br />
        <br />

        <button onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city
    ) {
      setError('Completá todos los campos obligatorios.');
      return;
    }

    setLoading(true);

    try {
      const order = {
        userId: user.uid,
        userEmail: user.email,

        buyer: {
          name: formData.name,
          phone: formData.phone,
        },

        delivery: {
          address: formData.address,
          city: formData.city,
          extraInfo: formData.extraInfo,
        },

        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),

        total: total,

        createdAt: serverTimestamp(),
      };

      const orderCollection = collection(db, 'orders');

      const orderReference = await addDoc(orderCollection, order);

      setOrderId(orderReference.id);

      clear();
    } catch (error) {
      console.error('Error al crear la orden:', error);
      setError(
        'No pudimos procesar tu compra. Intentá nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h1>Finalizar compra</h1>

      <p>Comprando como: {user.email}</p>

      <h2>Datos de entrega</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo *</label>
          <br />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Teléfono *</label>
          <br />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Dirección *</label>
          <br />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Ciudad *</label>
          <br />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Información adicional</label>
          <br />

          <textarea
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleChange}
          />
        </div>

        {error && <p>{error}</p>}

        <h2>Total: ${total}</h2>

        <button type="submit" disabled={loading}>
          {loading ? 'Procesando compra...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  );
}

export default Checkout;