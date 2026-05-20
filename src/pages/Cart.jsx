import React from 'react';

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  // EMPTY CART
  if (cartItems.length === 0) {

    return (
      <div className="min-h-screen flex items-center justify-center px-4">

        <div className="text-center">

          <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">

            <ShoppingBag
              size={42}
              className="text-green-600"
            />

          </div>

          <h2 className="product-title text-3xl font-bold text-gray-800 mb-3">

            Your Cart is Empty

          </h2>

          <p className="text-gray-500 mb-8">

            Add some products to continue shopping.

          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all"
          >

            <ArrowLeft size={20} />

            Continue Shopping

          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 lg:px-8 py-10">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="product-title text-4xl font-bold text-gray-800 mb-3">

          Shopping Cart

        </h1>

        <p className="text-gray-500">

          Review your selected products

        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8">

        {/* CART ITEMS */}
        <div className="space-y-5">

          {cartItems.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{
                y: -4,
              }}
              className="bg-white rounded-[28px] border border-gray-100 shadow-md p-5 flex flex-col sm:flex-row gap-5"
            >

              {/* IMAGE */}
              <Link
                to={`/product/${item.id}`}
                className="w-full sm:w-[180px]"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-2xl"
                />

              </Link>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between">

                <div>

                  {/* CATEGORY */}
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-2">

                    {item.category}

                  </p>

                  {/* NAME */}
                  <Link
                    to={`/product/${item.id}`}
                  >

                    <h2 className="product-title text-2xl font-bold text-gray-800 hover:text-green-600 transition-all">

                      {item.name}

                    </h2>

                  </Link>

                  {/* PRICE */}
                  <div className="flex items-center gap-3 mt-3">

                    <span className="text-3xl font-black text-green-600">

                      ₹{item.price.toFixed(2)}

                    </span>

                    {item.oldPrice && (
                      <del className="text-gray-300 font-bold">

                        ₹{item.oldPrice.toFixed(2)}

                      </del>
                    )}
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

                  {/* QUANTITY */}
                  <div className="flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-3 py-2 gap-4">

                    {/* MINUS */}
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(
                            1,
                            item.quantity - 1
                          )
                        )
                      }
                      className="w-9 h-9 rounded-xl bg-white shadow hover:bg-gray-100 flex items-center justify-center transition-all"
                    >

                      <Minus size={15} />

                    </button>

                    {/* VALUE */}
                    <span className="text-lg font-black text-gray-800">

                      {item.quantity}

                    </span>

                    {/* PLUS */}
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="w-9 h-9 rounded-xl bg-white shadow hover:bg-gray-100 flex items-center justify-center transition-all"
                    >

                      <Plus size={15} />

                    </button>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 font-bold transition-all"
                  >

                    <Trash2 size={18} />

                    Remove

                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="h-fit sticky top-28">

          <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl p-7">

            <h2 className="product-title text-2xl font-bold text-gray-800 mb-6">

              Order Summary

            </h2>

            {/* ITEMS */}
            <div className="space-y-4 mb-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >

                  <div>

                    <p className="product-title font-semibold text-gray-800">

                      {item.name}

                    </p>

                    <p className="text-sm text-gray-400">

                      Qty: {item.quantity}

                    </p>
                  </div>

                  <span className="font-black text-gray-800">

                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}

                  </span>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="border-t border-gray-100 pt-5 flex items-center justify-between mb-6">

              <h3 className="product-title text-2xl font-bold text-gray-800">

                Total

              </h3>

              <span className="text-4xl font-black text-green-600">

                ₹{getCartTotal().toFixed(2)}

              </span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl transition-all hover:scale-[1.02]">

              Proceed To Checkout

            </button>

            {/* CONTINUE SHOPPING */}
            <Link
              to="/shop"
              className="mt-4 flex items-center justify-center gap-2 text-gray-500 hover:text-green-600 transition-all font-semibold"
            >

              <ArrowLeft size={18} />

              Continue Shopping

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;