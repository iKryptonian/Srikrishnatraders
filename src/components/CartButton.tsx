import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { calculateTotalItems } from '../utils/cartUtils';
import type { CartItem } from '../types/CartItem';

interface CartButtonProps {
  cart: CartItem[];
}

export const CartButton: React.FC<CartButtonProps> = ({ cart }) => {
  const totalItems = calculateTotalItems(cart);

  return (
    <div className="relative">
      <Link
        to="/cart"
        className="flex items-center space-x-2 text-white hover:text-yellow-200 transition-colors"
      >
        <ShoppingCart className="h-5 w-5" />
        <span>Cart</span>
      </Link>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
};