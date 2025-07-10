import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return <Navigate to="/shop" replace />;
  }
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Add to Cart
            </button>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>✓ Free shipping on orders over $50</span>
              <span>✓ 30-day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}