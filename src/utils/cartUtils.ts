import type { CartItem } from '../types/CartItem';
import type { Product } from '../types/Product';

export const addItemToCart = (cart: CartItem[], product: Product): CartItem[] => {
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    return cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cart, {
    id: product.id,
    name: product.name,
    price: product.price,
    discountedPrice: calculateDiscountedPrice(product.price),
    image: product.image,
    quantity: 1
  }];
};

export const removeItemFromCart = (cart: CartItem[], productId: number): CartItem[] => {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem?.quantity === 1) {
    return cart.filter(item => item.id !== productId);
  }

  return cart.map(item =>
    item.id === productId
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const calculateDiscountedPrice = (price: number): number => {
  // Calculate 20% of the original price (80% discount)
  return Math.round(price * 0.2);
};

export const calculateTotalItems = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const calculateTotalPrice = (cart: CartItem[]): number => {
  // Calculate total using discounted prices
  return cart.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);
};