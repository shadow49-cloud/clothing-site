import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rainbow Dreams Hoodie',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1148606/pexels-photo-1148606.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Soft, cozy hoodie perfect for dreaming in color. Made with premium cotton blend for ultimate comfort.',
    features: ['100% Cotton Blend', 'Soft Fleece Lining', 'Kangaroo Pocket', 'Drawstring Hood'],
    inStock: true
  },
  {
    id: '2',
    name: 'Sunshine Smile Tee',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'tees',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Bright and cheerful tee to spread joy wherever you go. Super soft and breathable fabric.',
    features: ['Organic Cotton', 'Breathable Fabric', 'Crew Neck', 'Relaxed Fit'],
    inStock: true
  },
  {
    id: '3',
    name: 'Cloud Nine Sweatshirt',
    price: 69.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'sweatshirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Float on cloud nine with this incredibly soft sweatshirt. Perfect for lazy days and adventures.',
    features: ['French Terry Cotton', 'Ribbed Cuffs', 'Crew Neck', 'Comfortable Fit'],
    inStock: true
  },
  {
    id: '4',
    name: 'Starlight Magic Dress',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Twirl under the stars in this magical dress. Flowing fabric with dreamy prints.',
    features: ['Flowing Fabric', 'A-Line Silhouette', 'Midi Length', 'Comfortable Fit'],
    inStock: true
  },
  {
    id: '5',
    name: 'Bubble Pop Jacket',
    price: 124.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1148606/pexels-photo-1148606.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Stay warm and stylish with this fun bubble jacket. Water-resistant and super cozy.',
    features: ['Water Resistant', 'Insulated', 'Zip Closure', 'Side Pockets'],
    inStock: true
  },
  {
    id: '6',
    name: 'Candy Crush Shorts',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'shorts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Sweet as candy shorts perfect for summer adventures. Comfortable and playful design.',
    features: ['Elastic Waistband', 'Side Pockets', 'Breathable Fabric', 'High Rise'],
    inStock: false
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'hoodies', name: 'Hoodies', count: products.filter(p => p.category === 'hoodies').length },
  { id: 'tees', name: 'T-Shirts', count: products.filter(p => p.category === 'tees').length },
  { id: 'sweatshirts', name: 'Sweatshirts', count: products.filter(p => p.category === 'sweatshirts').length },
  { id: 'dresses', name: 'Dresses', count: products.filter(p => p.category === 'dresses').length },
  { id: 'jackets', name: 'Jackets', count: products.filter(p => p.category === 'jackets').length },
  { id: 'shorts', name: 'Shorts', count: products.filter(p => p.category === 'shorts').length }
];