import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const productsCollection = collection(db, 'products');

        const productsQuery = categoryId
          ? query(productsCollection, where('category', '==', categoryId))
          : productsCollection;

        const querySnapshot = await getDocs(productsQuery);

        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(products);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setError('No pudimos cargar los productos. Intentá nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, [categoryId]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>{greeting}</h1>

      {loading && <p>Cargando productos...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;