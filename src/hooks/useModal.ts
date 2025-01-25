import { useState } from 'react';
import type { Product } from '../types/Product';

export const useModal = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const toggleUserDetailsModal = () => {
    setIsUserDetailsModalOpen(!isUserDetailsModalOpen);
  };

  return {
    selectedProduct,
    isUserDetailsModalOpen,
    openProductModal,
    closeProductModal,
    toggleUserDetailsModal,
    setIsUserDetailsModalOpen
  };
};