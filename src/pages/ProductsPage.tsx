import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { ProductModal } from '../components/ProductModal';
import { products } from '../data/products';
import { useModal } from '../hooks/useModal';
import { FireworksAnimation } from '../components/FireworksAnimation';
import type { Product } from '../types/Product';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart }) => {
  const { selectedProduct, openProductModal, closeProductModal } = useModal();

  return (
    <div className="space-y-6">
      <FireworksAnimation />
      <div>

        <h2 className="text-3xl font-bold text-orange-500">Our Fireworks Collection</h2>
        <p className="text-black-600 mt-2">
          Click on any product image to view special Diwali offers!
        </p>
      </div>

      <ProductGrid
        products={products}
        onImageClick={openProductModal}
        onAddToCart={onAddToCart}
      />

      <ProductModal
        product={selectedProduct}
        onClose={closeProductModal}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};