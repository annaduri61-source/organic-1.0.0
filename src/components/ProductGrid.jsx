import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = () => {
  const displayedProducts = products.slice(0, 4);
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Selling Products</h2>
            <p className="text-gray-500">The most popular items from our local organic farms.</p>
          </div>
          <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-all text-sm shadow-sm">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
