import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, Phone, Calendar } from 'lucide-react';
import { FireworksAnimation } from '../components/FireworksAnimation';
import myImages from './../../public/images/WS2k.gif';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <FireworksAnimation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
        <img
          src=" "
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-blue-500/80 flex items-center justify-center p-4">
          <img src={myImages} alt="Left Image" className="absolute left-0 p-2 w-18 h-18 hidden sm:block"/>
          <img src={myImages} alt="Right Image" className="absolute right-0 p-2 w-18 h-18 hidden sm:block"/>

          <div className="text-center text-white space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">Welcome to Sri Krishna Traders</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Light up your celebrations with our premium collection of fireworks.
              Experience the magic of festivities with our spectacular range.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
              <Link
                to="/products"
                className="w-full md:w-auto bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 active:scale-95 active:bg-yellow-600 transition-transform transition-colors duration-300 shadow-md hover:shadow-lg hover:ring-4 hover:ring-yellow-300"
              >
                Explore Products
              </Link>
              <Link
                to="/diwali-chit"
                className="w-full md:w-auto bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:scale-105 active:scale-95 active:bg-purple-700 transition-transform transition-colors duration-300 shadow-md hover:shadow-lg hover:ring-4 hover:ring-purple-300"
              >
                Join Diwali Chit Scheme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-gradient-to-t from-purple-600/60 via-pink-500/50 to-pink-600/60 p-6 rounded-xl shadow-lg text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600">
            Carefully selected fireworks that meet the highest safety standards
          </p>
        </div>

        <div className="bg-gradient-to-t from-purple-600/60 via-pink-500/50 to-pink-600/60 p-6 rounded-xl shadow-lg text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8 text-pink-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
          <div className="text-gray-600 space-y-2">
            <p>Exclusive Diwali discounts and festival season packages</p>
            <p className="text-purple-600 font-semibold">
              Mega Offer: Flat 80% OFF on all items!
            </p>
          </div>
        </div>

        <Link 
          to="/diwali-chit" 
          className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow relative overflow-hidden"
        >
          <div className="animate-blink absolute inset-0 bg-gradient-to-t from-purple-600/60 via-pink-500/50 to-pink-600/60 border-8 border-pink-500 rounded-lg"></div>
          <div className="relative">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diwali Chit Scheme 2025</h3>
            <div className="text-gray-600 space-y-2">
              <p>Join our Diwali chit scheme and save big on festivities</p>
              <ul className="text-left pl-4 mt-2 space-y-1">
                <li className="text-purple-600 font-semibold">✓ One month free</li>
                <li className="text-purple-600 font-semibold">✓ Free delivery</li>
                <li className="text-green-600"></li>
              </ul>
              <p className="text-white-100 font-semibold group-hover:text-white-900 mt-4">
                Click to learn more →
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500/80 to-blue-500/80 p-6 md:p-12 rounded-xl text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Light Up Your Celebration?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Explore our wide range of fireworks and make your festivities truly memorable.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/products"
            className="w-full md:w-auto bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View Products
          </Link>
          <Link
            to="/diwali-chit"
            className="w-full md:w-auto border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Join Chit Scheme
          </Link>
        </div>
      </section>
    </div>
  );
};
