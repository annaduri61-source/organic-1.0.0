import React, { useState } from 'react';

import {
  Heart,
  ShoppingBag,
  Eye,
  Plus,
  Minus,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  const { likedItems, toggleWishlist } = useWishlist();

  // CHECK IF LIKED
  const isLiked = likedItems.some(
    (item) => item.id === product.id
  );

  // QUANTITY
  const [quantity, setQuantity] = useState(1);

  // ADD TO CART
  const handleAddToCart = (e) => {

    e.preventDefault();

    e.stopPropagation();

    addToCart(product, quantity);
  };

  // TOGGLE WISHLIST
  const handleWishlist = (e) => {

    e.preventDefault();

    e.stopPropagation();

    toggleWishlist(product);
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
        }}
        className="group bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >

        {/* IMAGE */}
        <Link to={`/product/${product.id}`}>

          <div className="relative bg-gradient-to-br from-gray-50 to-green-50 p-4 overflow-hidden">

            {/* PRODUCT IMAGE */}
            <motion.img
              whileHover={{
                scale: 1.1,
                rotate: 2,
              }}
              transition={{ duration: 0.5 }}
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain"
            />

            {/* DISCOUNT */}
            {product.discount && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 left-3 bg-red-500 text-white text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-xl shadow-lg"
              >
                {product.discount}% OFF
              </motion.span>
            )}

            {/* ACTIONS */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">

              {/* WISHLIST */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={handleWishlist}
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all ${
                  isLiked
                    ? 'bg-pink-500 text-white'
                    : 'bg-white hover:bg-pink-50 hover:text-pink-500'
                }`}
              >

                <Heart
                  size={15}
                  fill={isLiked ? 'currentColor' : 'none'}
                />

              </motion.button>

              {/* VIEW */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-50 hover:text-green-500 transition-all"
              >

                <Eye size={15} />

              </motion.button>
            </div>
          </div>
        </Link>

        {/* CONTENT */}
        <div className="p-4 space-y-4">

          {/* CATEGORY */}
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">
            {product.category}
          </p>

          {/* PRODUCT NAME */}
          <Link to={`/product/${product.id}`}>

            <h3 className="text-lg font-black text-gray-900 hover:text-green-600 transition-colors line-clamp-2 min-h-[50px]">
              {product.name}
            </h3>

          </Link>

          {/* PRICE */}
          <div className="flex items-center gap-2">

            <span className="text-2xl font-black text-green-600 italic">
              ₹{product.price.toFixed(2)}
            </span>

            {product.oldPrice && (
              <del className="text-gray-300 font-bold text-sm">
                ₹{product.oldPrice.toFixed(2)}
              </del>
            )}
          </div>

          {/* QUANTITY */}
          <div className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl p-2 gap-4 shadow-sm">

            {/* MINUS */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();

                setQuantity(
                  Math.max(1, quantity - 1)
                );
              }}
              className="w-8 h-8 rounded-xl bg-white shadow hover:bg-gray-100 flex items-center justify-center transition-all"
            >

              <Minus size={14} />

            </motion.button>

            {/* VALUE */}
            <motion.span
              key={quantity}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="text-lg font-black w-6 text-center"
            >
              {quantity}
            </motion.span>

            {/* PLUS */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();

                setQuantity(quantity + 1);
              }}
              className="w-8 h-8 rounded-xl bg-white shadow hover:bg-gray-100 flex items-center justify-center transition-all"
            >

              <Plus size={14} />

            </motion.button>
          </div>

          {/* ADD TO CART */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.03,
            }}
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-black py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
          >

            <ShoppingBag size={18} />

            Add To Cart

          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;