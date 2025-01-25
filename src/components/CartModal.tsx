import React from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';
import { calculateTotalPrice } from '../utils/cartUtils';
import type { CartItem } from '../types/CartItem';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveFromCart,
}) => {
  const total = calculateTotalPrice(cart);
  const originalTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = originalTotal - total;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 bg-white overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      contentLabel="Shopping Cart"
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-8 w-8" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-2xl text-gray-500">Your cart is empty</p>
            <button
              onClick={onClose}
              className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-8">
                  <div className="flex items-center space-x-8">
                    <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                    <div>
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      <p className="text-gray-400 line-through text-xl">₹{item.price.toLocaleString('en-IN')}</p>
                      <p className="text-green-600 font-bold text-xl">
                        ₹{item.discountedPrice.toLocaleString('en-IN')} x {item.quantity}
                      </p>
                      <p className="text-purple-600 text-lg">
                        Total: ₹{(item.discountedPrice * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-lg font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-lg ml-auto">
              <div className="space-y-4 text-xl">
                <div className="flex justify-between items-center">
                  <span>Original Total:</span>
                  <span>₹{originalTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-green-600">
                  <span>Discount (80%):</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-3xl font-bold border-t pt-4">
                  <span>Final Amount:</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors text-xl mt-8"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};