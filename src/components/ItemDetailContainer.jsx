import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const productRef = doc(db, 'products', itemId);
        const productSnapshot = await getDoc(productRef);

        if (!productSnapshot.exists()) {
          throw new Error('Producto no encontrado');
        }

        setProducto({
          id: productSnapshot.id,
          ...productSnapshot.data(),
        });
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setError('No pudimos encontrar el producto.');
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [itemId]);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Cargando...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center' }}>{error}</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;