import React, { useState } from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';
import type { UserDetails } from '../types/UserDetails';

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: UserDetails) => void;
  total: number;
}

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  total
}) => {
  const [details, setDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    city: '',
    pincode: '',
    address: '',
    state: 'TamilNadu'
  });

  const [showMinOrderError, setShowMinOrderError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (total < 2500) {
      setShowMinOrderError(true);
      return;
    }
    
    onSubmit(details);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="max-w-2xl mx-auto mt-20 bg-white rounded-lg p-16"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      contentLabel="User Details"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Customer Details</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      {showMinOrderError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>Minimum order value should be ₹2,500. Please add more items to continue.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Mobile Number (WhatsApp)
          </label>
          <input
            type="tel"
            id="phone"
            required
            pattern="[0-9]{10}"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={details.phone}
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Town/City Name
          </label>
          <input
            type="text"
            id="city"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={details.city}
            onChange={(e) => setDetails({ ...details, city: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
            Postal Pincode
          </label>
          <input
            type="text"
            id="pincode"
            required
            pattern="[0-9]{6}"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={details.pincode}
            onChange={(e) => setDetails({ ...details, pincode: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Full Address
          </label>
          <textarea
            id="address"
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={details.address}
            onChange={(e) => setDetails({ ...details, address: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            id="state"
            value="TamilNadu"
            disabled
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500/80 to-blue-500/80 text-white py-3 px-4 rounded-md hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Place Order
          </button>
          <p className="text-center text-sm text-gray-500 mt-2">
            Minimum order value - ₹2,500
          </p>
        </div>
      </form>
    </Modal>
  );
};