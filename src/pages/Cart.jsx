import React from 'react';

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Sparkles,
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

  /* EMPTY CART */

  if (cartItems.length === 0) {

    return (
      <div className="
      min-h-screen
      bg-[#050816]
      flex
      items-center
      justify-center
      overflow-hidden
      relative
      px-4
      ">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <div className="
          absolute
          top-0
          left-0

          w-[500px]
          h-[500px]

          bg-green-500/20
          blur-[160px]
          " />

          <div className="
          absolute
          bottom-0
          right-0

          w-[500px]
          h-[500px]

          bg-emerald-500/20
          blur-[160px]
          " />

        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
          relative
          z-20

          max-w-xl
          w-full

          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          rounded-[40px]

          p-10

          text-center

          shadow-[0_30px_120px_rgba(0,0,0,0.5)]
          "
        >

          {/* ICON */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            w-32
            h-32

            rounded-[35px]

            bg-gradient-to-br
            from-green-500
            to-emerald-600

            flex
            items-center
            justify-center

            mx-auto
            mb-8

            shadow-[0_20px_80px_rgba(34,197,94,0.5)]
            "
          >

            <ShoppingBag
              size={55}
              className="text-white"
            />

          </motion.div>

          <h2 className="
          text-5xl
          font-black
          text-white
          mb-5
          ">

            Cart is Empty

          </h2>

          <p className="
          text-gray-400
          text-lg
          leading-relaxed
          mb-10
          ">

            Your premium organic collection is waiting.
            Start exploring healthy products now.

          </p>

          <Link
            to="/shop"
            className="
            inline-flex
            items-center
            gap-3

            bg-gradient-to-r
            from-green-500
            to-emerald-600

            text-white
            font-black

            px-10
            py-5

            rounded-3xl

            shadow-[0_20px_60px_rgba(34,197,94,0.4)]

            hover:scale-105

            transition-all
            duration-300
            "
          >

            <ArrowLeft size={20} />

            Explore Products

          </Link>

        </motion.div>
      </div>
    );
  }

  return (
    <div className="
    min-h-screen
    bg-[#050816]
    overflow-hidden
    relative
    text-white
    px-4
    lg:px-8
    py-10
    ">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div className="
        absolute
        inset-0
        opacity-[0.06]

        bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

        bg-[size:80px_80px]
        " />

        {/* GLOW */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
          absolute
          top-0
          left-0

          w-[500px]
          h-[500px]

          bg-green-500/20
          blur-[160px]
          "
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-0
          right-0

          w-[500px]
          h-[500px]

          bg-emerald-500/20
          blur-[160px]
          "
        />

      </div>

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="
      relative
      z-20
      mb-14
      ">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <div className="
          inline-flex
          items-center
          gap-3

          px-6
          py-3

          rounded-full

          bg-white/5
          backdrop-blur-2xl

          border
          border-white/10

          mb-8
          ">

            <Sparkles
              size={18}
              className="text-green-400"
            />

            <span className="
            uppercase
            tracking-[5px]
            text-xs
            font-bold
            text-green-300
            ">
              Premium Cart
            </span>

          </div>

          <h1 className="
          text-6xl
          md:text-7xl
          font-black
          leading-[0.9]
          mb-6
          ">

            Your <span className="text-green-400 italic">
              Organic
            </span> Cart

          </h1>

          <p className="
          text-gray-400
          text-xl
          max-w-2xl
          leading-relaxed
          ">

            Review your selected premium healthy products
            with futuristic shopping experience.

          </p>

        </motion.div>

      </div>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <div className="
      relative
      z-20

      grid
      md:grid-cols-3
      gap-6

      mb-12
      ">

        {[
          {
            icon: ShieldCheck,
            title: 'Secure Checkout',
          },
          {
            icon: Truck,
            title: 'Fast Delivery',
          },
          {
            icon: Sparkles,
            title: 'Premium Quality',
          },
        ].map((item, i) => (

          <motion.div
            key={i}
            whileHover={{
              y: -10,
              rotateX: 8,
              rotateY: -8,
            }}
            className="
            bg-white/5
            backdrop-blur-3xl

            border
            border-white/10

            rounded-[30px]

            p-6

            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
          >

            <div className="
            w-16
            h-16

            rounded-2xl

            bg-gradient-to-br
            from-green-500
            to-emerald-600

            flex
            items-center
            justify-center

            mb-5
            ">

              <item.icon size={28} />

            </div>

            <h3 className="
            text-2xl
            font-black
            text-white
            ">

              {item.title}

            </h3>

          </motion.div>
        ))}

      </div>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="
      relative
      z-20

      grid
      lg:grid-cols-[1fr_420px]
      gap-10
      ">

        {/* CART ITEMS */}
        <div className="space-y-7">

          {cartItems.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{
                y: -8,
                rotateX: 5,
                rotateY: -5,
              }}
              className="
              group
              relative

              bg-white/5
              backdrop-blur-3xl

              border
              border-white/10

              rounded-[35px]

              overflow-hidden

              shadow-[0_20px_80px_rgba(0,0,0,0.45)]

              p-5

              flex
              flex-col
              xl:flex-row
              gap-6
              "
            >

              {/* IMAGE */}
              <Link
                to={`/product/${item.id}`}
                className="
                relative
                w-full
                xl:w-[240px]
                "
              >

                <div className="
                overflow-hidden
                rounded-[28px]
                h-56
                ">

                  <motion.img
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    src={item.image}
                    alt={item.name}
                    className="
                    w-full
                    h-full
                    object-cover
                    "
                  />

                </div>

              </Link>

              {/* CONTENT */}
              <div className="
              flex-1
              flex
              flex-col
              justify-between
              ">

                <div>

                  {/* CATEGORY */}
                  <p className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]

                  text-green-300

                  font-black

                  mb-3
                  ">

                    {item.category}

                  </p>

                  {/* NAME */}
                  <Link
                    to={`/product/${item.id}`}
                  >

                    <h2 className="
                    text-3xl
                    font-black

                    text-white

                    hover:text-green-400

                    transition-all
                    duration-300
                    ">

                      {item.name}

                    </h2>

                  </Link>

                  {/* PRICE */}
                  <div className="
                  flex
                  items-end
                  gap-3

                  mt-5
                  ">

                    <span className="
                    text-4xl
                    font-black
                    text-green-400
                    ">

                      ₹{item.price.toFixed(2)}

                    </span>

                    {item.oldPrice && (

                      <del className="
                      text-gray-500
                      text-lg
                      font-bold
                      mb-1
                      ">

                        ₹{item.oldPrice.toFixed(2)}

                      </del>
                    )}

                  </div>

                </div>

                {/* BOTTOM */}
                <div className="
                mt-8

                flex
                flex-wrap
                items-center
                justify-between
                gap-5
                ">

                  {/* QUANTITY */}
                  <div className="
                  flex
                  items-center
                  gap-5

                  bg-black/30

                  border
                  border-white/10

                  rounded-[22px]

                  px-4
                  py-3
                  ">

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
                      className="
                      w-11
                      h-11

                      rounded-xl

                      bg-white/5

                      hover:bg-green-500

                      transition-all

                      flex
                      items-center
                      justify-center
                      "
                    >

                      <Minus size={17} />

                    </button>

                    {/* VALUE */}
                    <span className="
                    text-2xl
                    font-black
                    ">

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
                      className="
                      w-11
                      h-11

                      rounded-xl

                      bg-white/5

                      hover:bg-green-500

                      transition-all

                      flex
                      items-center
                      justify-center
                      "
                    >

                      <Plus size={17} />

                    </button>

                  </div>

                  {/* REMOVE */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="
                    flex
                    items-center
                    gap-3

                    px-5
                    py-3

                    rounded-2xl

                    bg-red-500/10

                    border
                    border-red-500/20

                    text-red-400

                    font-black

                    hover:bg-red-500
                    hover:text-white

                    transition-all
                    "
                  >

                    <Trash2 size={18} />

                    Remove

                  </motion.button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================================================= */}
        {/* ORDER SUMMARY */}
        {/* ================================================= */}

        <div className="
        h-fit
        sticky
        top-28
        ">

          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
            relative

            bg-white/5
            backdrop-blur-3xl

            border
            border-white/10

            rounded-[40px]

            overflow-hidden

            p-8

            shadow-[0_20px_100px_rgba(0,0,0,0.5)]
            "
          >

            {/* GLOW */}
            <div className="
            absolute
            top-0
            right-0

            w-60
            h-60

            bg-green-500/20
            blur-[120px]
            " />

            <div className="relative z-10">

              <h2 className="
              text-4xl
              font-black
              text-white
              mb-8
              ">

                Order Summary

              </h2>

              {/* ITEMS */}
              <div className="
              space-y-5
              mb-8
              ">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-white/10

                    pb-4
                    "
                  >

                    <div>

                      <p className="
                      font-black
                      text-white
                      ">

                        {item.name}

                      </p>

                      <p className="
                      text-sm
                      text-gray-400
                      mt-1
                      ">

                        Qty : {item.quantity}

                      </p>

                    </div>

                    <span className="
                    text-lg
                    font-black
                    text-green-400
                    ">

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
              <div className="
              flex
              items-center
              justify-between

              mb-10
              ">

                <h3 className="
                text-3xl
                font-black
                text-white
                ">

                  Total

                </h3>

                <span className="
                text-5xl
                font-black
                text-green-400
                ">

                  ₹{getCartTotal().toFixed(2)}

                </span>

              </div>

              {/* CHECKOUT */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                w-full

                bg-gradient-to-r
                from-green-500
                to-emerald-600

                py-5

                rounded-[24px]

                text-xl
                font-black

                text-white

                shadow-[0_20px_60px_rgba(34,197,94,0.35)]

                transition-all
                duration-300
                "
              >

                Proceed To Checkout

              </motion.button>

              {/* SHOP */}
              <Link
                to="/shop"
                className="
                mt-5

                flex
                items-center
                justify-center
                gap-3

                text-gray-400

                hover:text-green-400

                transition-all

                font-bold
                "
              >

                <ArrowLeft size={18} />

                Continue Shopping

              </Link>

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Cart;