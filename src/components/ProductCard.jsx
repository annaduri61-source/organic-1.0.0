import React, { useState } from 'react';

import {
  Heart,
  ShoppingBag,
  Eye,
  Plus,
  Minus,
  Star,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  const { likedItems, toggleWishlist } =
    useWishlist();

  const isLiked = likedItems.some(
    (item) => item.id === product.id
  );

  const [quantity, setQuantity] =
    useState(1);

  const [isHovered, setIsHovered] =
    useState(false);

  // ADD TO CART
  const handleAddToCart = (e) => {

    e.preventDefault();

    e.stopPropagation();

    addToCart(product, quantity);
  };

  // WISHLIST
  const handleWishlist = (e) => {

    e.preventDefault();

    e.stopPropagation();

    toggleWishlist(product);
  };

  return (
    <motion.div
      onHoverStart={() =>
        setIsHovered(true)
      }
      onHoverEnd={() =>
        setIsHovered(false)
      }
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -16,
        rotateX: 4,
        rotateY: -4,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 18,
      }}
      className="group relative bg-white rounded-[34px] overflow-hidden border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.16)] transition-all duration-700 max-w-[300px] mx-auto"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >

      {/* ANIMATED GRADIENT BORDER */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        className="absolute inset-0 rounded-[34px] p-[1.5px] bg-gradient-to-br from-green-400 via-lime-300 to-yellow-300 z-0"
      >

        <div className="w-full h-full bg-white rounded-[34px]" />

      </motion.div>

      {/* GLOW */}
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 0.8,
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute -top-20 -right-20 w-56 h-56 bg-green-300 rounded-full blur-3xl z-0"
      />

      {/* IMAGE SECTION */}
      <div className="relative bg-gradient-to-br from-[#f7fff8] via-[#f3fff5] to-[#eefbf1] p-4 overflow-hidden z-10">

        {/* DISCOUNT */}
        {product.discount && (
          <motion.div
            initial={{
              scale: 0,
              rotate: -20,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            whileHover={{
              rotate: -5,
              scale: 1.05,
            }}
            className="absolute top-4 left-4 z-30"
          >

            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1.5 rounded-full shadow-xl">

              {product.discount}% OFF

            </span>
          </motion.div>
        )}

        {/* ACTIONS */}
        <motion.div
          animate={{
            x: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0.8,
          }}
          className="absolute top-4 right-4 flex flex-col gap-3 z-30"
        >

          {/* WISHLIST */}
          <motion.button
            whileTap={{
              scale: 0.85,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 12,
            }}
            onClick={handleWishlist}
            className={`w-11 h-11 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-xl transition-all ${
              isLiked
                ? 'bg-pink-500 text-white'
                : 'bg-white/90 hover:bg-pink-50 hover:text-pink-500'
            }`}
          >

            <Heart
              size={17}
              fill={
                isLiked
                  ? 'currentColor'
                  : 'none'
              }
            />

          </motion.button>

          {/* VIEW */}
          <Link
            to={`/product/${product.id}`}
          >

            <motion.button
              whileTap={{
                scale: 0.85,
              }}
              whileHover={{
                scale: 1.15,
                rotate: -12,
              }}
              className="w-11 h-11 rounded-full flex items-center justify-center shadow-2xl bg-white/90 hover:bg-green-50 hover:text-green-600 transition-all"
            >

              <Eye size={17} />

            </motion.button>

          </Link>
        </motion.div>

        {/* IMAGE */}
        <Link to={`/product/${product.id}`}>

          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="overflow-hidden rounded-[28px]"
          >

            <motion.img
              animate={{
                scale: isHovered ? 1.06 : 1,
              }}
              transition={{
                duration: 0.5,
              }}
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover cursor-pointer"
            />

          </motion.div>

        </Link>
      </div>

      {/* CONTENT */}
      <div className="relative p-5 z-10">

        {/* CATEGORY + RATING */}
        <div className="flex items-center justify-between mb-3">

          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold">

            {product.category}

          </p>

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className="flex items-center gap-1 text-yellow-500"
          >

            <Star
              size={14}
              fill="currentColor"
            />

            <span className="text-sm font-bold text-gray-700">

              {product.rating || 4.8}

            </span>
          </motion.div>
        </div>

        {/* PRODUCT NAME */}
        <Link to={`/product/${product.id}`}>

          <motion.h3
            whileHover={{
              x: 4,
            }}
            className="product-title text-lg font-bold text-gray-800 hover:text-green-600 transition-all duration-300 leading-6 min-h-[48px] cursor-pointer"
          >

            {product.name}

          </motion.h3>

        </Link>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-500 leading-6 mt-2 line-clamp-2">

          {product.description}

        </p>

        {/* PRICE */}
        <div className="flex items-end gap-2 mt-4">

          <motion.span
            whileHover={{
              scale: 1.05,
            }}
            className="text-3xl font-black text-green-600 tracking-tight"
          >

            ₹{product.price.toFixed(2)}

          </motion.span>

          {product.oldPrice && (
            <del className="text-gray-300 font-bold text-sm mb-1">

              ₹{product.oldPrice.toFixed(2)}

            </del>
          )}
        </div>

        {/* QUANTITY */}
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="mt-5 flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl px-3 py-2 shadow-sm"
        >

          {/* MINUS */}
          <motion.button
            whileTap={{
              scale: 0.85,
            }}
            whileHover={{
              rotate: -8,
              scale: 1.1,
            }}
            onClick={(e) => {

              e.preventDefault();

              setQuantity(
                Math.max(1, quantity - 1)
              );
            }}
            className="w-9 h-9 rounded-xl bg-white shadow hover:bg-gray-100 flex items-center justify-center transition-all"
          >

            <Minus size={15} />

          </motion.button>

          {/* VALUE */}
          <motion.span
            key={quantity}
            initial={{
              scale: 1.4,
            }}
            animate={{
              scale: 1,
            }}
            className="text-lg font-black text-gray-800"
          >

            {quantity}

          </motion.span>

          {/* PLUS */}
          <motion.button
            whileTap={{
              scale: 0.85,
            }}
            whileHover={{
              rotate: 8,
              scale: 1.1,
            }}
            onClick={(e) => {

              e.preventDefault();

              setQuantity(quantity + 1);
            }}
            className="w-9 h-9 rounded-xl bg-white shadow hover:bg-gray-100 flex items-center justify-center transition-all"
          >

            <Plus size={15} />

          </motion.button>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          onClick={handleAddToCart}
          className="relative overflow-hidden mt-5 w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-black py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl text-base"
        >

          {/* BUTTON GLOW */}
          <motion.div
            animate={{
              x: isHovered
                ? '120%'
                : '-120%',
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="absolute inset-y-0 w-16 bg-white/30 blur-xl rotate-12"
          />

          <ShoppingBag size={18} />

          Add To Cart

        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;