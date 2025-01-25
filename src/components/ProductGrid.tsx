import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types/Product';

interface ProductGridProps {
  products: Product[];
  onImageClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onImageClick, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 transform scale-100 sm:scale-50">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onImageClick={onImageClick}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
