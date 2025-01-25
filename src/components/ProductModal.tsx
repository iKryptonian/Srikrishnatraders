import React from 'react';
import Modal from 'react-modal';
import type { Product } from '../types/Product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={!!product}
      onRequestClose={onClose}
      className="max-w-2xl mx-auto mt-20 bg-white rounded-lg p-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <span className="text-xl text-gray-800">Original Price:</span>
            <span className="text-xl text-gray-400 line-through ml-2">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-xl text-gray-800">Special Diwali Offer:</span>
            <span className="text-2xl font-bold text-green-600 ml-2">
              ₹{product.discountedPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-purple-600 font-semibold">
            Save ₹{(product.price - product.discountedPrice).toLocaleString('en-IN')}!
          </p>
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};