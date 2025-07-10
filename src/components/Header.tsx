import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Heart, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { toggleCart, getTotalItems } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 gravity-animation">
              <Heart className="w-4 h-4 text-slate-600" />
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-slate-600 transition-colors duration-300">
              Nueve
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                isActive('/') ? 'text-slate-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                isActive('/shop') ? 'text-slate-600' : 'text-gray-700'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                isActive('/about') ? 'text-slate-600' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                isActive('/contact') ? 'text-slate-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-slate-600 transition-colors duration-300 gravity-animation">
              <Search className="w-5 h-5" />
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-700">{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="text-sm text-gray-700 hover:text-slate-600 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-700 hover:text-slate-600 transition-colors duration-300"
              >
                <User className="w-5 h-5" />
                <span className="text-sm">Login</span>
              </Link>
            )}

            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-slate-600 transition-colors duration-300 gravity-animation"
            >
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-300 text-slate-700 text-xs rounded-full w-5 h-5 flex items-center justify-center bounce-gravity">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;