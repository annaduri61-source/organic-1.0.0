import React, { useState } from 'react';
import { Filter, Grid, List, ChevronDown, Search, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  // Fruits & Veges
  { id: 1, name: 'Organic Spinach', price: 45.00, oldPrice: 55.00, discount: 15, rating: 4.5, reviews: 222, image: '/assets/product-thumb-4.png', category: 'Fruits & Veges' },
  { id: 2, name: 'Red Apples', price: 120.00, oldPrice: 150.00, discount: 20, rating: 4.8, reviews: 156, image: '/assets/product-thumb-6.png', category: 'Fruits & Veges' },
  { id: 3, name: 'Fresh Carrots', price: 35.00, oldPrice: 45.00, discount: 22, rating: 4.4, reviews: 89, image: '/assets/product-thumb-11.png', category: 'Fruits & Veges' },
  { id: 4, name: 'Bell Peppers', price: 80.00, oldPrice: 100.00, discount: 20, rating: 4.6, reviews: 112, image: '/assets/product-thumb-12.png', category: 'Fruits & Veges' },
  { id: 5, name: 'Broccoli', price: 95.00, oldPrice: 120.00, discount: 15, rating: 4.7, reviews: 45, image: '/assets/product-thumb-13.png', category: 'Fruits & Veges' },
  { id: 6, name: 'Cherry Tomatoes', price: 60.00, oldPrice: 75.00, discount: 20, rating: 4.9, reviews: 230, image: '/assets/product-thumb-14.png', category: 'Fruits & Veges' },

  // Breads & Sweets
  { id: 7, name: 'Whole Wheat Bread', price: 40.00, oldPrice: 50.00, discount: 20, rating: 4.5, reviews: 222, image: '/assets/product-thumb-1.png', category: 'Breads & Sweets' },
  { id: 8, name: 'Oatmeal Cookies', price: 85.00, oldPrice: 100.00, discount: 15, rating: 4.7, reviews: 41, image: '/assets/product-thumb-2.png', category: 'Breads & Sweets' },
  { id: 9, name: 'Chocolate Muffin', price: 55.00, oldPrice: 65.00, discount: 15, rating: 4.6, reviews: 67, image: '/assets/product-thumb-15.png', category: 'Breads & Sweets' },
  { id: 10, name: 'Butter Croissants', price: 120.00, oldPrice: 140.00, discount: 14, rating: 4.8, reviews: 88, image: '/assets/product-thumb-16.png', category: 'Breads & Sweets' },
  { id: 11, name: 'Bagels (6 pack)', price: 180.00, oldPrice: 200.00, discount: 10, rating: 4.5, reviews: 54, image: '/assets/product-thumb-17.png', category: 'Breads & Sweets' },
  { id: 12, name: 'Fruit Cake', price: 450.00, oldPrice: 500.00, discount: 10, rating: 4.9, reviews: 12, image: '/assets/product-thumb-18.png', category: 'Breads & Sweets' },

  // Beverages
  { id: 13, name: 'Almond Milk', price: 150.00, oldPrice: 180.00, discount: 16, rating: 4.6, reviews: 92, image: '/assets/product-thumb-7.png', category: 'Beverages' },
  { id: 14, name: 'Organic Coffee', price: 350.00, oldPrice: 400.00, discount: 12, rating: 4.9, reviews: 320, image: '/assets/product-thumb-19.png', category: 'Beverages' },
  { id: 15, name: 'Green Tea (20 bags)', price: 120.00, oldPrice: 150.00, discount: 20, rating: 4.7, reviews: 85, image: '/assets/product-thumb-20.png', category: 'Beverages' },
  { id: 16, name: 'Orange Juice', price: 90.00, oldPrice: 110.00, discount: 18, rating: 4.5, reviews: 143, image: '/assets/product-thumb-21.png', category: 'Beverages' },
  { id: 17, name: 'Coconut Water', price: 65.00, oldPrice: 75.00, discount: 13, rating: 4.8, reviews: 210, image: '/assets/product-thumb-22.png', category: 'Beverages' },
  { id: 18, name: 'Sparkling Water', price: 45.00, oldPrice: 55.00, discount: 18, rating: 4.4, reviews: 67, image: '/assets/product-thumb-23.png', category: 'Beverages' },

  // Meat Products
  { id: 19, name: 'Salmon Fillet', price: 850.00, oldPrice: 1000.00, discount: 15, rating: 5.0, reviews: 89, image: '/assets/product-thumb-5.png', category: 'Meat Products' },
  { id: 20, name: 'Chicken Breast', price: 320.00, oldPrice: 380.00, discount: 15, rating: 4.7, reviews: 110, image: '/assets/product-thumb-24.png', category: 'Meat Products' },
  { id: 21, name: 'Beef Steak', price: 1200.00, oldPrice: 1500.00, discount: 20, rating: 4.9, reviews: 45, image: '/assets/product-thumb-25.png', category: 'Meat Products' },
  { id: 22, name: 'Lamb Chops', price: 1500.00, oldPrice: 1800.00, discount: 16, rating: 4.8, reviews: 32, image: '/assets/product-thumb-26.png', category: 'Meat Products' },
  { id: 23, name: 'Pork Ribs', price: 750.00, oldPrice: 900.00, discount: 16, rating: 4.6, reviews: 28, image: '/assets/product-thumb-27.png', category: 'Meat Products' },
  { id: 24, name: 'Turkey Ground', price: 450.00, oldPrice: 550.00, discount: 18, rating: 4.5, reviews: 19, image: '/assets/product-thumb-28.png', category: 'Meat Products' },

  // Dairy & Eggs
  { id: 25, name: 'Cheddar Cheese', price: 250.00, oldPrice: 300.00, discount: 16, rating: 4.0, reviews: 32, image: '/assets/product-thumb-3.png', category: 'Dairy & Eggs' },
  { id: 26, name: 'Greek Yogurt', price: 80.00, oldPrice: 100.00, discount: 20, rating: 4.7, reviews: 110, image: '/assets/product-thumb-8.png', category: 'Dairy & Eggs' },
  { id: 27, name: 'Organic Butter', price: 180.00, oldPrice: 220.00, discount: 18, rating: 4.8, reviews: 56, image: '/assets/product-thumb-29.png', category: 'Dairy & Eggs' },
  { id: 28, name: 'Free Range Eggs (12)', price: 140.00, oldPrice: 160.00, discount: 12, rating: 4.9, reviews: 340, image: '/assets/product-thumb-30.png', category: 'Dairy & Eggs' },
  { id: 29, name: 'Sour Cream', price: 65.00, oldPrice: 75.00, discount: 13, rating: 4.5, reviews: 24, image: '/assets/product-thumb-10.png', category: 'Dairy & Eggs' },
  { id: 30, name: 'Cottage Cheese', price: 120.00, oldPrice: 150.00, discount: 20, rating: 4.6, reviews: 41, image: '/assets/product-thumb-9.png', category: 'Dairy & Eggs' },
];

const categories = [
  { name: 'All', image: null },
  { name: 'Fruits & Veges', image: '/assets/category-thumb-1.jpg' },
  { name: 'Breads & Sweets', image: '/assets/category-thumb-2.jpg' },
  { name: 'Beverages', image: '/assets/category-thumb-3.jpg' },
  { name: 'Meat Products', image: '/assets/category-thumb-5.jpg' },
  { name: 'Dairy & Eggs', image: '/assets/category-thumb-7.jpg' },
  { name: 'Frozen Foods', image: '/assets/category-thumb-6.jpg' },
  { name: 'Snacks', image: '/assets/category-thumb-8.jpg' },
  { name: 'Household', image: '/assets/category-thumb-4.jpg' },
];
const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(500);

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= priceRange;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="py-12 lg:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-20 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-primary font-black uppercase tracking-[0.3em] mb-6">
            <a href="/" className="hover:opacity-70 transition-opacity">Home</a>
            <span className="opacity-30">/</span>
            <span className="text-gray-400">Shop</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            Our <span className="text-primary italic">Organic</span> Shop
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-10">
            {/* Search */}
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 font-bold text-gray-900 focus:ring-4 focus:ring-primary/10 transition-all shadow-xl shadow-black/5"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500">
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-black/5">
              <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center justify-between">
                Categories <Filter size={18} className="text-primary" />
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button 
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full text-left font-bold py-3 px-4 rounded-2xl transition-all flex items-center justify-between group ${activeCategory === cat.name ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}`}
                    >
                      <div className="flex items-center gap-3">
                        {cat.image ? (
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[10px] uppercase font-black">All</div>
                        )}
                        <span>{cat.name}</span>
                      </div>
                      <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${activeCategory === cat.name ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                        {cat.name === 'All' ? products.length : products.filter(p => p.category === cat.name).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-black/5">
              <h3 className="text-xl font-black text-gray-900 mb-8">Price Range</h3>
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer mb-6" 
              />
              <div className="flex items-center justify-between">
                <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 font-black text-gray-900">₹0</div>
                <div className="bg-primary/10 px-4 py-2 rounded-xl border border-primary/20 font-black text-primary italic">₹{priceRange}</div>
              </div>
            </div>

            {/* Reset Button */}
            {(activeCategory !== 'All' || searchQuery !== '' || priceRange < 500) && (
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); setPriceRange(500); }}
                className="w-full py-4 bg-gray-900 text-white font-black rounded-3xl hover:bg-red-500 transition-all flex items-center justify-center gap-2"
              >
                Clear All Filters <X size={18} />
              </button>
            )}
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-9 space-y-10">
            {/* Toolbar */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-[32px] border border-gray-100 shadow-xl shadow-black/5 flex flex-wrap items-center justify-between gap-6">
              <p className="text-gray-500 font-bold">Showing <span className="text-gray-900 font-black">{filteredProducts.length}</span> products</p>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                  <button className="p-2.5 bg-white text-primary rounded-xl shadow-sm"><Grid size={20} /></button>
                  <button className="p-2.5 text-gray-400 hover:text-primary transition-colors"><List size={20} /></button>
                </div>
                <button className="flex items-center gap-3 font-black text-gray-900 hover:text-primary transition-colors bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                  Sort by: Newest <ChevronDown size={18} />
                </button>
              </div>
            </div>

            {/* Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map(product => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center bg-white rounded-[48px] border border-dashed border-gray-200">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-gray-300" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 font-medium mb-8">Try adjusting your filters or search query to find what you're looking for.</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); setPriceRange(500); }}
                  className="px-8 py-3 bg-primary text-white font-black rounded-2xl hover:bg-gray-900 transition-all shadow-xl shadow-primary/20"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center pt-12">
                <div className="flex gap-3 bg-white p-2 rounded-[28px] border border-gray-100 shadow-xl shadow-black/5">
                  <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-white font-black shadow-lg shadow-primary/20">1</button>
                  <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-500 font-bold hover:bg-primary/5 hover:text-primary transition-all">2</button>
                  <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-500 font-bold hover:bg-primary/5 hover:text-primary transition-all">3</button>
                  <button className="px-8 h-14 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-500 font-bold hover:bg-primary/5 hover:text-primary transition-all">Next</button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
