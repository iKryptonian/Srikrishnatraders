import { useState } from 'react';
import type { CartItem } from '../types/CartItem';
import type { Product } from '../types/Product';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentCart, {
        id: product.id,
        name: product.name,
        price: product.price,
        discountedPrice: product.discountedPrice,
        image: product.image,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === productId);
      
      if (existingItem?.quantity === 1) {
        return currentCart.filter(item => item.id !== productId);
      }
      
      return currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return {
    cart,
    addToCart,
    removeFromCart
  };
};