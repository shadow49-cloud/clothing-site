import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, HeartHandshake } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-sky-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Express Your
                <span className="text-slate-600"> Style</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Discover our magical collection of clothing that brings joy, comfort, and personality to your everyday adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="bg-sky-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-sky-300 text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-sky-300 hover:text-slate-700 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div>
                <img
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Featured Fashion"
                  className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Nueve?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe clothing should be fun, comfortable, and express your unique personality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <Truck className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $50. Fast and reliable delivery.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Premium materials and craftsmanship. 30-day return policy.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-violet-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <HeartHandshake className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">Every piece is designed with care and attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nueve Arrivals */}
      <section className="py-20 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 transform hover:rotate-1 transition-transform duration-300">Nueve Arrivals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh styles just landed! Discover the latest additions to our dreamy collection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <div key={product.id} className={`transform ${index === 1 ? 'rotate-1' : index === 2 ? '-rotate-1' : 'rotate-0'}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="bg-violet-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-violet-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1 inline-flex items-center space-x-2"
            >
              <span>Shop New Arrivals</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular items that everyone is talking about.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="bg-sky-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1 inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy customers who love our products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                review: "Absolutely love my Rainbow Dreams Hoodie! It's so soft and the colors are amazing. Perfect for everyday wear!"
              },
              {
                name: "Mike J.",
                rating: 5,
                review: "Great quality and fast shipping. The sizing is perfect and the designs are unique. Highly recommend!"
              },
              {
                name: "Emily R.",
                rating: 5,
                review: "DreamWear has become my go-to for comfortable, stylish clothing. The customer service is excellent too!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-300 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;