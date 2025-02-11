import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { CartButton } from './CartButton';
import type { CartItem } from '../types/CartItem';

interface HeaderProps {
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
}

export const Header: React.FC<HeaderProps> = ({ cart }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-yellow-200'
      : 'text-white hover:text-yellow-200';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-orange-400 to-blue-400 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-white hover:text-yellow-200"
        >
          <img
            src="https://ikrytonian.sirv.com/sklogo.jpg"
            alt="Sri Krishna Traders"
            className="h-14 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-yellow-200"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className={`${isActive('/')} transition-colors`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={`${isActive('/products')} transition-colors`}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/diwali-chit" className={`${isActive('/diwali-chit')} transition-colors`}>
                Diwali Chit
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>
                Contact
              </Link>
            </li>
            <li>
              <CartButton cart={cart} />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className={`${isActive('/')} transition-colors block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`${isActive('/products')} transition-colors block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/diwali-chit"
                className={`${isActive('/diwali-chit')} transition-colors block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Diwali Chit
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${isActive('/contact')} transition-colors block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="py-2">
              <CartButton cart={cart} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
