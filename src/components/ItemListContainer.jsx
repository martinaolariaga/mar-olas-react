import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/asyncMock';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((productos) => {
      if (categoryId) {
        setItems(productos.filter((prod) => prod.category === categoryId));
      } else {
        setItems(productos);
      }
    });
  }, [categoryId]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;