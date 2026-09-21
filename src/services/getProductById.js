import { getProducts } from '../mock/asyncMock';

export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getProducts().then((productos) => {
        const producto = productos.find((p) => p.id === productId);
        producto ? resolve(producto) : reject(new Error('Producto no encontrado'));
      });
    }, 500);
  });
}