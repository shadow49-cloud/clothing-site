import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Heart, Search, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { toggleCart, getTotalItems } = useCart();
  const { getTotalItems: getWishlistItems } = useWishlist();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - User & Navigation */}
          <div className="flex items-center space-x-6">
            {/* User Info */}
            {isAuthenticated && user && (
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Hi, {user.name.split(' ')[0]}</span>
              </div>
            )}

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-300 hover:text-sky-600 ${
                  isActive('/') ? 'text-sky-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`text-sm font-medium transition-colors duration-300 hover:text-sky-600 ${
                  isActive('/shop') ? 'text-sky-600' : 'text-gray-700'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors duration-300 hover:text-sky-600 ${
                  isActive('/about') ? 'text-sky-600' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors duration-300 hover:text-sky-600 ${
                  isActive('/contact') ? 'text-sky-600' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-sky-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Center - Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-gray-50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </form>
          </div>

          {/* Right Side - Actions & Company Name */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <button className="p-2 text-gray-700 hover:text-sky-600 transition-colors relative">
              <Heart className="w-5 h-5" />
              {getWishlistItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-300 text-slate-700 text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getWishlistItems()}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-sky-600 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-sky-300 text-slate-700 text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Auth */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-sky-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="text-sm">Login</span>
              </Link>
            ) : (
              <button
                onClick={logout}
                className="hidden md:block text-sm text-gray-700 hover:text-sky-600 transition-colors"
              >
                Logout
              </button>
            )}

            {/* Company Name */}
            <Link to="/" className="flex items-center space-x-2 group ml-4">
              <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-4 h-4 text-slate-600" />
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
                Nueve
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-gray-50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </form>

              {/* Mobile User Info */}
              {isAuthenticated && user && (
                <div className="flex items-center space-x-2 py-2">
                  <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Hi, {user.name.split(' ')[0]}</span>
                </div>
              )}

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <Link
                  to="/"
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-sky-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive('/shop') ? 'text-sky-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive('/about') ? 'text-sky-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive('/contact') ? 'text-sky-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                {!isAuthenticated ? (
                  <Link
                    to="/login"
                    className="block py-2 text-sm font-medium text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 text-sm font-medium text-gray-700 text-left"
                  >
                    Logout
                  </button>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;