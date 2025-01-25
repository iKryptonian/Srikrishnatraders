import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { DiwaliChitPage } from './pages/DiwaliChitPage';
import { CartPage } from './pages/CartPage';
import { useCart } from './hooks/useCart';

function App() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header cart={cart} onRemoveFromCart={removeFromCart} />
        
        <main className="pt-20 container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/products" 
              element={<ProductsPage onAddToCart={addToCart} />} 
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/diwali-chit" element={<DiwaliChitPage />} />
            <Route 
              path="/cart" 
              element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;