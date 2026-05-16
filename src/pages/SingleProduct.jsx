import React, { useState } from 'react';
import { Star, ShoppingBag, Heart, Share2, ShieldCheck, Truck, RefreshCw, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1,
    name: 'Whole Wheat Sandwich Bread',
    price: 18.00,
    oldPrice: 24.00,
    discount: 10,
    rating: 4.5,
    reviews: 222,
    sku: 'ORG-12345',
    category: 'Bakery',
    tags: ['Organic', 'Fresh', 'Healthy'],
    image: '/assets/product-thumb-1.png',
    description: 'Our Whole Wheat Sandwich Bread is made with 100% organic whole wheat flour, stone-ground to preserve the natural nutrients and fiber. Baked daily in small batches, it has a rich, nutty flavor and a perfect soft texture for your favorite sandwiches or morning toast.',
    features: [
      '100% Organic Stone-Ground Whole Wheat',
      'No Artificial Preservatives or Flavors',
      'Excellent Source of Dietary Fiber',
      'Baked Fresh Every Morning'
    ]
  };

  const relatedProducts = [
    { id: 2, name: 'Whole Grain Oatmeal', price: 50.00, oldPrice: 54.00, discount: 10, rating: 4.5, reviews: 41, image: '/assets/product-thumb-2.png' },
    { id: 3, name: 'Sharp Cheddar Cheese', price: 12.00, oldPrice: 14.00, discount: 10, rating: 4.0, reviews: 32, image: '/assets/product-thumb-3.png' },
    { id: 4, name: 'Organic Baby Spinach', price: 18.00, oldPrice: 24.00, discount: 10, rating: 4.5, reviews: 222, image: '/assets/product-thumb-4.png' },
    { id: 5, name: 'Fresh Salmon Fillet', price: 32.00, oldPrice: 38.00, discount: 15, rating: 5.0, reviews: 89, image: '/assets/product-thumb-5.png' },
  ];

  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-12">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span className="opacity-30">/</span>
          <a href="/shop" className="hover:text-primary transition-colors">Shop</a>
          <span className="opacity-30">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          {/* Product Image Area */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square bg-gray-50 rounded-[60px] overflow-hidden p-12 border border-gray-100 shadow-2xl shadow-black/5 cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-10 left-10 bg-accent text-white font-black px-5 py-2 rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-accent/20">
                {product.discount}% OFF
              </span>
              <button className="absolute top-10 right-10 w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all shadow-xl hover:scale-110">
                <Heart size={24} />
              </button>
            </motion.div>
          </div>

          {/* Product Info Area */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400 tracking-wider">({product.reviews} Reviews)</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-6">
                <span className="text-5xl font-black text-primary italic">₹{product.price.toFixed(2)}</span>
                <del className="text-2xl text-gray-200 font-bold">₹{product.oldPrice.toFixed(2)}</del>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed text-lg font-medium">
              {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center bg-gray-50 border border-gray-100 rounded-[24px] p-2 gap-6 shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:bg-white hover:text-primary hover:shadow-md rounded-2xl transition-all"
                >
                  <Minus size={20} />
                </button>
                <span className="text-2xl font-black w-8 text-center text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:bg-white hover:text-primary hover:shadow-md rounded-2xl transition-all"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button className="flex-grow bg-yellow-400 text-gray-900 font-black py-5 rounded-[24px] shadow-2xl shadow-yellow-400/20 hover:bg-yellow-500 hover:scale-[1.05] hover:shadow-yellow-400/40 active:scale-[0.98] transition-all flex items-center justify-center gap-4 text-lg">
                <ShoppingBag size={24} /> Add to Cart
              </button>
            </div>

            <div className="pt-10 border-t border-gray-100 grid grid-cols-2 gap-6">
              <p className="text-xs font-black text-gray-900 uppercase tracking-widest">SKU: <span className="font-bold text-gray-400 ml-2">{product.sku}</span></p>
              <p className="text-xs font-black text-gray-900 uppercase tracking-widest">Category: <span className="font-bold text-gray-400 ml-2">{product.category}</span></p>
              <p className="text-xs font-black text-gray-900 uppercase tracking-widest col-span-2">Tags: <span className="font-bold text-gray-400 ml-2">{product.tags.join(', ')}</span></p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-10">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: ShieldCheck, label: 'Secure Pay' },
                { icon: RefreshCw, label: 'Easy Return' }
              ].map((badge, i) => (
                <div key={i} className="bg-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex flex-col items-center gap-3 text-center group hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer">
                  <badge.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Area */}
        <div className="border-t border-gray-100 pt-20 mb-24">
          <div className="flex gap-12 border-b border-gray-100 mb-12 justify-center lg:justify-start">
            {['description', 'features', 'reviews'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-6 text-sm font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
              >
                {tab}
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary rounded-full shadow-lg shadow-primary/30" />}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto lg:mx-0">
            {activeTab === 'description' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <p className="text-gray-500 leading-relaxed text-xl font-medium">{product.description}</p>
                <p className="text-gray-500 leading-relaxed text-xl font-medium">Our commitment to quality ensures that every loaf is checked for consistency and taste. We use traditional baking methods combined with organic ingredients to create a product that is not only delicious but also good for your body.</p>
              </motion.div>
            )}
            {activeTab === 'features' && (
              <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-[24px] border border-gray-100 font-bold text-gray-700">
                    <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/30" />
                    {feature}
                  </li>
                ))}
              </motion.ul>
            )}
            {activeTab === 'reviews' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20 bg-gray-50 rounded-[60px] border border-gray-100">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Star size={40} className="text-gray-200" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">No reviews yet</h3>
                <p className="text-gray-400 font-bold mb-10">Be the first to review this product!</p>
                <button className="px-10 py-4 bg-white border border-gray-200 text-gray-900 font-black rounded-[20px] hover:bg-gray-900 hover:text-white transition-all shadow-xl">Write a Review</button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-20 border-t border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black text-gray-900">Related <span className="text-primary italic">Products</span></h2>
            <a href="/shop" className="group flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest">
              View All <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
