import { useState, useEffect } from 'react';
import { getProductById } from '../services/getProductById';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(1) 
      .then((p) => setProducto(p))
      .catch((e) => console.error(e));
  }, []);

  if (!producto) return <p style={{ textAlign: 'center' }}>Cargando...</p>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;