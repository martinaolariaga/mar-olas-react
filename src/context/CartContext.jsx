import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  const removeItem = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}