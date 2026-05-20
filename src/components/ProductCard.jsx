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

  /* ADD TO CART */
  const handleAddToCart = (e) => {

    e.preventDefault();

    e.stopPropagation();

    addToCart(product, quantity);
  };

  /* WISHLIST */
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
        y: -12,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 18,
      }}
      className="
      product-card
      group
      relative

      bg-white/90
      backdrop-blur-xl

      rounded-[34px]
      overflow-hidden

      border
      border-white/60

      shadow-[0_10px_40px_rgba(34,197,94,0.08)]

      hover:shadow-[0_25px_60px_rgba(34,197,94,0.18)]

      transition-all
      duration-700

      max-w-full
      mx-auto
      "
    >

      {/* SOFT GLOW */}
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 0.8,
          opacity: isHovered ? 0.18 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
        absolute
        -top-20
        -right-20
        w-56
        h-56
        bg-green-300
        rounded-full
        blur-3xl
        z-0
        "
      />

      {/* IMAGE SECTION */}
      <div className="
      relative

      bg-gradient-to-br
      from-[#f5fff7]
      via-[#f7fff9]
      to-[#eefbf2]

      p-4
      overflow-hidden
      z-10
      ">

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
            className="
            absolute
            top-4
            left-4
            z-30
            "
          >

            <span className="
            bg-gradient-to-r
            from-green-500
            to-lime-500

            text-white

            text-[10px]
            uppercase
            tracking-[0.2em]

            font-black

            px-3
            py-1.5

            rounded-full

            shadow-xl
            ">

              {product.discount}% OFF

            </span>
          </motion.div>
        )}

        {/* ACTIONS */}
        <motion.div
          animate={{
            x: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0.85,
          }}
          className="
          absolute
          top-4
          right-4

          flex
          flex-col
          gap-3

          z-30
          "
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
            className={`
            w-11
            h-11

            rounded-full

            flex
            items-center
            justify-center

            shadow-xl

            backdrop-blur-xl

            transition-all

            ${
              isLiked
                ? 'bg-pink-500 text-white'
                : 'bg-white hover:bg-pink-50 hover:text-pink-500'
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
                scale: 0.85,
              }}
              whileHover={{
                scale: 1.15,
                rotate: -12,
              }}
              className="
              w-11
              h-11

              rounded-full

              flex
              items-center
              justify-center

              shadow-xl

              bg-white

              hover:bg-green-50
              hover:text-green-600

              transition-all
              "
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
            }}
            transition={{
              duration: 0.5,
            }}
            className="
            overflow-hidden
            rounded-[28px]
            "
          >

            <motion.img
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{
                duration: 0.5,
              }}
              src={product.image}
              alt={product.name}
              className="
              w-full
              h-56
              object-cover
              "
            />

          </motion.div>

        </Link>
      </div>

      {/* CONTENT */}
      <div className="relative p-5 z-10">

        {/* CATEGORY */}
        <div className="
        flex
        items-center
        justify-between
        mb-3
        ">

          <p className="
          text-[10px]
          uppercase
          tracking-[0.25em]

          text-gray-400

          font-bold
          ">

            {product.category}

          </p>

          <div className="
          flex
          items-center
          gap-1

          text-yellow-500
          ">

            <Star
              size={14}
              fill="currentColor"
            />

            <span className="
            text-sm
            font-bold
            text-gray-700
            ">

              {product.rating || 4.8}

            </span>

          </div>
        </div>

        {/* PRODUCT NAME */}
        <Link to={`/product/${product.id}`}>

          <motion.h3
            whileHover={{
              x: 4,
            }}
            className="
            product-title

            text-lg
            font-bold

            text-slate-800

            hover:text-green-600

            transition-all
            duration-300

            leading-6
            min-h-[48px]
            "
          >

            {product.name}

          </motion.h3>

        </Link>

        {/* DESCRIPTION */}
        <p className="
        text-sm
        text-gray-500

        leading-6
        mt-2

        line-clamp-2
        ">

          {product.description}

        </p>

        {/* PRICE */}
        <div className="
        flex
        items-end
        gap-2
        mt-4
        ">

          <span className="
          text-3xl
          font-black

          text-green-600

          tracking-tight
          ">

            ₹{product.price.toFixed(2)}

          </span>

          {product.oldPrice && (
            <del className="
            text-gray-300
            font-bold
            text-sm
            mb-1
            ">

              ₹{product.oldPrice.toFixed(2)}

            </del>
          )}
        </div>

        {/* QUANTITY */}
        <div className="
        mt-5

        flex
        items-center
        justify-between

        bg-green-50

        border
        border-green-100

        rounded-2xl

        px-3
        py-2
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
            w-9
            h-9

            rounded-xl

            bg-white

            hover:bg-green-500
            hover:text-white

            shadow-sm

            flex
            items-center
            justify-center

            transition-all
            "
          >

            <Minus size={15} />

          </motion.button>

          {/* VALUE */}
          <span className="
          text-lg
          font-black

          text-slate-800
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
            w-9
            h-9

            rounded-xl

            bg-white

            hover:bg-green-500
            hover:text-white

            shadow-sm

            flex
            items-center
            justify-center

            transition-all
            "
          >

            <Plus size={15} />

          </motion.button>
        </div>

        {/* ADD TO CART */}
        <motion.button
          whileTap={{
            scale: 0.92,
          }}
          whileHover={{
            scale: 1.03,
            y: -3,
          }}
          onClick={handleAddToCart}
          className="
          group
          relative
          overflow-hidden

          mt-5
          w-full

          bg-gradient-to-r
          from-green-500
          via-lime-500
          to-green-600

          hover:from-green-400
          hover:via-lime-400
          hover:to-green-500

          text-white
          font-black

          py-3.5
          rounded-2xl

          transition-all
          duration-300

          flex
          items-center
          justify-center
          gap-3

          shadow-[0_10px_35px_rgba(34,197,94,0.25)]

          text-base
          tracking-wide

          cursor-pointer
          "
        >

          {/* GLOW */}
          <div
            className="
            absolute
            inset-0

            opacity-0
            group-hover:opacity-100

            transition-opacity
            duration-500

            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]
            "
          />

          {/* SHINE */}
          <div
            className="
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
            "
          />

          {/* ICON */}
          <motion.div
            whileHover={{
              rotate: -10,
              scale: 1.15,
            }}
            className="relative z-10"
          >

            <ShoppingBag size={20} />

          </motion.div>

          {/* TEXT */}
          <span className="relative z-10">
            Add To Cart
          </span>

        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;