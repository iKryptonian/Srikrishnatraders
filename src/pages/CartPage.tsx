import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { FireworksAnimation } from '../components/FireworksAnimation';
import { UserDetailsModal } from '../components/UserDetailsModal';
import { calculateTotalPrice } from '../utils/cartUtils';
import type { CartItem } from '../types/CartItem';
import type { UserDetails } from '../types/UserDetails';

interface CartPageProps {
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ cart, onRemoveFromCart }) => {
  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);
  const total = calculateTotalPrice(cart);
  const originalTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = originalTotal - total;

  const handleOrderSubmit = (details: UserDetails) => {
    // Create the WhatsApp message
    const orderItems = cart.map(item => 
      `${item.name} x ${item.quantity} = ₹${(item.discountedPrice * item.quantity).toLocaleString('en-IN')}`
    ).join('\n');

    const message = `*New Order from Sparkle Fireworks*\n\n` +
      `*Customer Details:*\n` +
      `Name: ${details.name}\n` +
      `Phone: ${details.phone}\n` +
      `Address: ${details.address}\n` +
      `City: ${details.city}\n` +
      `Pincode: ${details.pincode}\n` +
      `State: ${details.state}\n\n` +
      `*Order Details:*\n${orderItems}\n\n` +
      `*Order Summary:*\n` +
      `Original Total: ₹${originalTotal.toLocaleString('en-IN')}\n` +
      `Discount (80%): -₹${discount.toLocaleString('en-IN')}\n` +
      `Final Amount: ₹${total.toLocaleString('en-IN')}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919597273656?text=${encodedMessage}`;

    // Close the modal and open WhatsApp
    setIsUserDetailsModalOpen(false);
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <FireworksAnimation />
        <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/70 to-blue-500/70 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <FireworksAnimation />
      
      <div className="flex justify-between items-center mb-8 mt-12">
        <h2 className="text-4xl font-bold text-orange-400">Shopping Cart</h2>
        <Link
          to="/products"
          className="text-orange-600 hover:text-purple-700 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <div className="space-y-8">
        {cart.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-400 line-through">₹{item.price.toLocaleString('en-IN')}</p>
                  <p className="text-green-600 font-bold">
                    ₹{item.discountedPrice.toLocaleString('en-IN')} × {item.quantity}
                  </p>
                  <p className="text-purple-600">
                    Total: ₹{(item.discountedPrice * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Original Total</span>
            <span>₹{originalTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount (80%)</span>
            <span>-₹{discount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-3">
            <span>Final Amount</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
        <button
          onClick={() => setIsUserDetailsModalOpen(true)}
          className="w-full bg-gradient-to-r from-orange-500/85 to-blue-500/80 text-white mt-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>

      <UserDetailsModal
        isOpen={isUserDetailsModalOpen}
        onClose={() => setIsUserDetailsModalOpen(false)}
        onSubmit={handleOrderSubmit}
        total={total}
      />
    </div>
  );
};