import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Whole Wheat Sandwich Bread',
    price: 18.00,
    oldPrice: 24.00,
    discount: 10,
    rating: 4.5,
    reviews: 222,
    image: '/assets/thumb-1.png' // Using category image as placeholder
  },
  {
    id: 2,
    name: 'Whole Grain Oatmeal',
    price: 50.00,
    oldPrice: 54.00,
    discount: 10,
    rating: 4.5,
    reviews: 41,
    image: '/assets/thumb-2.png'
  },
  {
    id: 3,
    name: 'Sharp Cheddar Cheese',
    price: 12.00,
    oldPrice: 14.00,
    discount: 10,
    rating: 4.0,
    reviews: 32,
    image: '/assets/thumb-3.png'
  },
  {
    id: 4,
    name: 'Organic Baby Spinach',
    price: 18.00,
    oldPrice: 24.00,
    discount: 10,
    rating: 4.5,
    reviews: 222,
    image: '/assets/thumb-4.png'
  },
  {
    id: 5,
    name: 'Fresh Salmon Fillet',
    price: 32.00,
    oldPrice: 38.00,
    discount: 15,
    rating: 5.0,
    reviews: 89,
    image: '/assets/thumb-5.png'
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Selling Products</h2>
            <p className="text-gray-500">The most popular items from our local organic farms.</p>
          </div>
          <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-all text-sm shadow-sm">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
