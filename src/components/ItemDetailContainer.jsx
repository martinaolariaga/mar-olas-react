import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/getProductById';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(Number(itemId)) 
      .then((p) => setProducto(p))
      .catch((e) => console.error(e));
  }, [itemId]);

  if (!producto) return <p style={{ textAlign: 'center' }}>Cargando...</p>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;