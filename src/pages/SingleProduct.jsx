import React, { useState } from 'react';

import {
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RefreshCw,
  Plus,
  Minus,
  ArrowRight,
  CheckCircle,
  X,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import { Link, useParams, useNavigate } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import { useCart } from '../context/CartContext';

import { products, getProductById } from '../data/products';

const SingleProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState('description');

  // POPUP STATE
  const [showPopup, setShowPopup] = useState(false);

  const product = getProductById(id);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Product not found
          </h1>

          <Link
            to="/shop"
            className="px-8 py-4 bg-primary text-white font-black rounded-[24px]"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4);

  // ADD TO CART
  const handleAddToCart = () => {

    // ADD PRODUCT
    addToCart(product, quantity);

    // SHOW POPUP
    setShowPopup(true);

    // AUTO HIDE
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="py-12 lg:py-24">

      <div className="container mx-auto px-4">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-3 text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-12">

          <Link to="/" className="hover:text-primary">
            Home
          </Link>

          <span>/</span>

          <Link to="/shop" className="hover:text-primary">
            Shop
          </Link>

          <span>/</span>

          <span className="text-gray-900">
            {product.name}
          </span>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square bg-gray-50 rounded-[60px] overflow-hidden p-12 border border-gray-100 shadow-2xl"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
            />

            <span className="absolute top-10 left-10 bg-accent text-white font-black px-5 py-2 rounded-2xl uppercase tracking-[0.2em] text-[10px]">
              {product.discount}% OFF
            </span>

            <button className="absolute top-10 right-10 w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all shadow-xl">

              <Heart size={24} />

            </button>
          </motion.div>

          {/* INFO */}
          <div className="space-y-10">

            {/* TITLE */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="flex items-center gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-200'
                      }
                    />
                  ))}
                </div>

                <span className="text-xs font-bold text-gray-400 tracking-wider">
                  ({product.reviews} Reviews)
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-6">

                <span className="text-5xl font-black text-primary italic">
                  ₹{product.price.toFixed(2)}
                </span>

                <del className="text-2xl text-gray-200 font-bold">
                  ₹{product.oldPrice.toFixed(2)}
                </del>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed text-lg font-medium">
              {product.description}
            </p>

            {/* QUANTITY */}
            <div className="flex flex-wrap items-center gap-6 pt-4">

              <div className="flex items-center bg-gray-50 border border-gray-100 rounded-[24px] p-2 gap-6 shadow-sm">

                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <Minus size={20} />
                </button>

                <span className="text-2xl font-black w-8 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* UPDATED BUTTON */}
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-yellow-400 text-gray-900 font-black py-5 rounded-[24px] shadow-2xl hover:scale-[1.05] transition-all flex items-center justify-center gap-4 text-lg cursor-pointer"
              >

                <ShoppingBag size={24} />

                Add to Cart

              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-4 pt-10">

              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: ShieldCheck, label: 'Secure Pay' },
                { icon: RefreshCw, label: 'Easy Return' },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="bg-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex flex-col items-center gap-3"
                >

                  <badge.icon
                    size={24}
                    className="text-primary"
                  />

                  <span className="text-[10px] font-black uppercase">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <section className="pt-20 border-t border-gray-100">

          <div className="flex items-center justify-between mb-12">

            <h2 className="text-4xl font-black text-gray-900">
              Related Products
            </h2>

            <Link
              to="/shop"
              className="group flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest"
            >
              View All

              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
              />
            ))}
          </div>
        </section>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>

        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 right-6 z-50"
          >

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 w-[350px]">

              <div className="flex items-start gap-4">

                <CheckCircle
                  size={40}
                  className="text-green-500"
                />

                <div className="flex-1">

                  <h3 className="font-black text-lg text-gray-900">
                    Added to Cart
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Product added successfully.
                  </p>

                  <div className="flex gap-3 mt-4">

                    {/* GO TO CART */}
                    <button
                      onClick={() => navigate('/cart')}
                      className="px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm"
                    >
                      Go To Cart
                    </button>

                    {/* CONTINUE */}
                    <button
                      onClick={() => setShowPopup(false)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm"
                    >
                      Continue
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SingleProduct;