import React, { useState } from 'react';

import {
  Heart,
  ShoppingBag,
  Eye,
  Plus,
  Minus,
  Star,
  Sparkles,
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

  /* ================================================= */
  /* ADD TO CART */
  /* ================================================= */

  const handleAddToCart = (e) => {

    e.preventDefault();

    e.stopPropagation();

    addToCart(product, quantity);
  };

  /* ================================================= */
  /* WISHLIST */
  /* ================================================= */

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
        y: 60,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -18,
        rotateX: 10,
        rotateY: -10,
        scale: 1.02,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 18,
      }}
      className="
      group
      relative

      bg-gradient-to-b
      from-white/[0.08]
      to-white/[0.03]

      backdrop-blur-[30px]

      rounded-[36px]
      overflow-hidden

      border
      border-white/10

      shadow-[0_25px_90px_rgba(0,0,0,0.45)]

      transition-all
      duration-700

      max-w-full
      mx-auto

      hover:border-green-400/30
      "
      style={{
        transformStyle: 'preserve-3d',
      }}
    >

      {/* ================================================= */}
      {/* GLOW */}
      {/* ================================================= */}

      <div className="
      absolute
      inset-0

      opacity-0
      group-hover:opacity-100

      transition-all
      duration-700

      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_40%)]

      pointer-events-none
      " />

      {/* ================================================= */}
      {/* SHINE */}
      {/* ================================================= */}

      <div className="
      absolute
      inset-0

      before:absolute
      before:inset-0

      before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]

      before:translate-x-[-200%]

      group-hover:before:translate-x-[200%]

      before:transition-transform
      before:duration-[1800ms]
      " />

      {/* ================================================= */}
      {/* IMAGE SECTION */}
      {/* ================================================= */}

      <div className="
      relative
      h-[290px]
      overflow-hidden
      ">

        {/* IMAGE */}
        <Link to={`/product/${product.id}`}>

          <motion.img
            animate={{
              scale: isHovered ? 1.06 : 1,
            }}
            transition={{
              duration: 0.7,
            }}
            src={product.image}
            alt={product.name}
            className="
            w-full
            h-full
            object-cover

            group-hover:scale-110
            group-hover:rotate-2

            transition-all
            duration-1000
            "
          />

        </Link>

        {/* OVERLAY */}
        <div className="
        absolute
        inset-0

        bg-gradient-to-t
        from-[#050816]
        via-[#050816]/20
        to-transparent
        " />

        {/* ================================================= */}
        {/* DISCOUNT */}
        {/* ================================================= */}

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
              scale: 1.08,
            }}
            className="
            absolute
            top-4
            left-4
            z-30
            "
          >

            <div className="
            px-4
            py-2

            rounded-2xl

            bg-gradient-to-r
            from-green-400
            to-emerald-600

            text-white

            font-black
            text-[10px]

            tracking-[0.2em]

            shadow-[0_10px_30px_rgba(34,197,94,0.4)]
            ">

              {product.discount}% OFF

            </div>

          </motion.div>
        )}

        {/* ================================================= */}
        {/* ACTION BUTTONS */}
        {/* ================================================= */}

        <motion.div
          animate={{
            x: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
          absolute
          top-4
          right-4

          flex
          flex-col
          gap-2

          z-30
          "
        >

          {/* WISHLIST */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            onClick={handleWishlist}
            className={`
            w-11
            h-11

            rounded-2xl

            flex
            items-center
            justify-center

            backdrop-blur-3xl

            border
            border-white/10

            shadow-xl

            transition-all

            ${
              isLiked
                ? 'bg-pink-500 text-white'
                : 'bg-black/40 text-white hover:bg-pink-500'
            }
            `}
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
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
                rotate: -10,
              }}
              className="
              w-11
              h-11

              rounded-2xl

              flex
              items-center
              justify-center

              bg-black/40
              backdrop-blur-3xl

              border
              border-white/10

              text-white

              hover:bg-green-500

              shadow-xl

              transition-all
              "
            >

              <Eye size={17} />

            </motion.button>

          </Link>

        </motion.div>

        {/* ================================================= */}
        {/* CATEGORY */}
        {/* ================================================= */}

        <div className="
        absolute
        bottom-4
        left-4
        z-20
        ">

          <div className="
          px-4
          py-2

          rounded-full

          bg-black/40
          backdrop-blur-xl

          border
          border-white/10

          text-[10px]
          uppercase
          tracking-[0.25em]

          font-black
          text-green-300
          ">

            {product.category}

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="
      relative
      p-5
      z-10
      ">

        {/* ================================================= */}
        {/* RATING */}
        {/* ================================================= */}

        <div className="
        flex
        items-center
        justify-between

        mb-3
        ">

          <div className="
          flex
          items-center
          gap-2
          ">

            <Star
              size={14}
              fill="currentColor"
              className="text-yellow-400"
            />

            <span className="
            text-xs
            font-bold
            text-gray-300
            ">

              {product.rating || 4.8}

            </span>

          </div>

          <Sparkles
            size={16}
            className="
            text-green-400
            opacity-70
            "
          />

        </div>

        {/* ================================================= */}
        {/* PRODUCT NAME */}
        {/* ================================================= */}

        <Link to={`/product/${product.id}`}>

          <motion.h3
            whileHover={{
              x: 3,
            }}
            className="
            text-[24px]
            font-black

            tracking-[-1px]

            text-white

            leading-[1.1]

            transition-all
            duration-300

            group-hover:text-green-300
            "
          >

            {product.name}

          </motion.h3>

        </Link>

        {/* ================================================= */}
        {/* DESCRIPTION */}
        {/* ================================================= */}

        <p className="
        text-gray-400

        leading-6
        text-[13px]

        mt-3

        line-clamp-2
        ">

          {product.description}

        </p>

        {/* ================================================= */}
        {/* PRICE */}
        {/* ================================================= */}

        <div className="
        flex
        items-end
        gap-3

        mt-5
        ">

          <span className="
          text-4xl
          font-black

          tracking-[-2px]

          bg-gradient-to-r
          from-green-300
          to-emerald-500

          bg-clip-text
          text-transparent
          ">

            ₹{product.price.toFixed(2)}

          </span>

          {product.oldPrice && (

            <del className="
            text-gray-500
            text-base
            font-bold
            mb-1
            ">

              ₹{product.oldPrice.toFixed(2)}

            </del>
          )}

        </div>

        {/* ================================================= */}
        {/* QUANTITY */}
        {/* ================================================= */}

        <div className="
        mt-5

        flex
        items-center
        justify-between

        bg-black/30

        border
        border-white/10

        rounded-[20px]

        px-3
        py-3
        ">

          {/* MINUS */}
          <motion.button
            whileTap={{
              scale: 0.85,
            }}
            onClick={(e) => {

              e.preventDefault();

              setQuantity(
                Math.max(1, quantity - 1)
              );
            }}
            className="
            w-10
            h-10

            rounded-xl

            bg-white/5

            hover:bg-green-500

            text-white

            flex
            items-center
            justify-center

            transition-all
            "
          >

            <Minus size={16} />

          </motion.button>

          {/* VALUE */}
          <span className="
          text-xl
          font-black
          text-white
          ">

            {quantity}

          </span>

          {/* PLUS */}
          <motion.button
            whileTap={{
              scale: 0.85,
            }}
            onClick={(e) => {

              e.preventDefault();

              setQuantity(quantity + 1);
            }}
            className="
            w-10
            h-10

            rounded-xl

            bg-white/5

            hover:bg-green-500

            text-white

            flex
            items-center
            justify-center

            transition-all
            "
          >

            <Plus size={16} />

          </motion.button>

        </div>

        {/* ================================================= */}
        {/* BUTTON */}
        {/* ================================================= */}

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          onClick={handleAddToCart}
          className="
          group
          relative
          overflow-hidden

          mt-5
          w-full

          rounded-[22px]

          bg-gradient-to-r
          from-green-400
          via-emerald-500
          to-green-600

          py-4

          font-black
          tracking-[0.08em]
          uppercase

          text-sm
          text-white

          flex
          items-center
          justify-center
          gap-3

          shadow-[0_20px_50px_rgba(34,197,94,0.4)]

          hover:shadow-[0_25px_70px_rgba(34,197,94,0.6)]

          transition-all
          duration-500
          "
        >

          {/* SHINE */}
          <div className="
          absolute
          top-0
          -left-24

          w-20
          h-full

          bg-white/20

          skew-x-12

          group-hover:left-[120%]

          transition-all
          duration-1000
          " />

          <ShoppingBag size={18} />

          <span>
            Add To Cart
          </span>

        </motion.button>

      </div>

    </motion.div>
  );
};

export default ProductCard;