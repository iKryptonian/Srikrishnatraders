import React from 'react';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onImageClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onImageClick, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => onImageClick(product)}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="text-sm text-orange-600">Click image for special offer!</p>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-orange-500/85 to-blue-500/80 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};