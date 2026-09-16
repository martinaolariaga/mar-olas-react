import { useState, useEffect } from 'react';
import { getProducts } from '../mock/asyncMock';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((productos) => {
      setItems(productos);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;