import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.sizes[0]);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 hover:rotate-3">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:rotate-12 transition-all duration-200">
              <button
                onClick={handleWishlistToggle}
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:rotate-12 transition-all duration-200"
              >
                <Heart className={`w-4 h-4 ${inWishlist ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </button>
            </button>
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={handleAddToCart}
              className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:rotate-12 transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-rose-200 text-rose-700 px-3 py-1 rounded-full text-sm font-medium transform rotate-3">
              Sale
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-slate-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;