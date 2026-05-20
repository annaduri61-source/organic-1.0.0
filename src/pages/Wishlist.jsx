import React from 'react';

import { Link } from 'react-router-dom';

import {
  Trash2,
  ShoppingBag,
  Heart,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { useWishlist } from '../context/WishlistContext';

import { useCart } from '../context/CartContext';

const Wishlist = () => {

  const {
    likedItems,
    toggleWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  // EMPTY STATE
  if (likedItems.length === 0) {

    return (
      <div className="min-h-screen flex items-center justify-center px-4">

        <div className="text-center">

          <div className="w-28 h-28 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">

            <Heart
              size={42}
              className="text-pink-500"
            />

          </div>

          <h2 className="product-title text-3xl font-bold text-gray-800 mb-3">

            Your Wishlist is Empty

          </h2>

          <p className="text-gray-500 mb-8">

            Save your favorite products here.

          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all"
          >

            <ShoppingBag size={20} />

            Continue Shopping

          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 lg:px-8 py-10">

      {/* TITLE */}
      <div className="mb-10">

        <h1 className="product-title text-4xl font-bold text-gray-800 mb-3">

          My Wishlist

        </h1>

        <p className="text-gray-500">

          Your saved favorite products

        </p>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {likedItems.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{
              y: -8,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
            }}
            className="bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
          >

            {/* IMAGE */}
            <div className="relative bg-gradient-to-br from-[#f7fff8] to-[#eefbf1] p-4">

              <Link
                to={`/product/${item.id}`}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-2xl"
                />

              </Link>

              {/* REMOVE */}
              <button
                onClick={() =>
                  toggleWishlist(item)
                }
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"
              >

                <Trash2 size={18} />

              </button>
            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* CATEGORY */}
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-2">

                {item.category}

              </p>

              {/* PRODUCT NAME */}
              <Link
                to={`/product/${item.id}`}
              >

                <h3 className="product-title text-lg font-bold text-gray-800 hover:text-green-600 transition-all duration-300 leading-6 min-h-[45px] cursor-pointer">

                  {item.name}

                </h3>

              </Link>

              {/* PRICE */}
              <div className="flex items-center gap-2 mt-3">

                <span className="text-3xl font-black text-green-600">

                  ₹{item.price.toFixed(2)}

                </span>

                {item.oldPrice && (
                  <del className="text-gray-300 font-bold text-sm">

                    ₹{item.oldPrice.toFixed(2)}

                  </del>
                )}
              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  addToCart(item, 1)
                }
                className="mt-5 w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-black py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-base"
              >

                <ShoppingBag size={18} />

                Add To Cart

              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;