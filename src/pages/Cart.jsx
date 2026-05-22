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

  /* ======================================= */
  /* EMPTY CART */
  /* ======================================= */

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
          absolute top-0 left-0
          w-[500px] h-[500px]
          bg-green-500/20
          blur-[160px]
          " />

          <div className="
          absolute bottom-0 right-0
          w-[500px] h-[500px]
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
          relative z-20

          max-w-xl
          w-full

          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          rounded-[40px]

          p-10
          text-center
          "
        >

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            w-32 h-32

            rounded-[35px]

            bg-gradient-to-br
            from-green-500
            to-emerald-600

            flex
            items-center
            justify-center

            mx-auto
            mb-8
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
          mb-10
          ">

            Your premium organic collection is waiting.

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

      {/* HEADER */}
      <div className="
      relative
      z-20
      mb-14
      ">

        <div className="
        inline-flex
        items-center
        gap-3

        px-6
        py-3

        rounded-full

        bg-white/5

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

          Your
          <span className="
          text-green-400
          italic
          ">
            {' '}Organic
          </span>
          {' '}Cart

        </h1>

      </div>

      {/* FEATURES */}
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

          <div
            key={i}
            className="
            bg-white/5
            backdrop-blur-3xl

            border
            border-white/10

            rounded-[30px]

            p-6
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
            ">

              {item.title}

            </h3>

          </div>
        ))}

      </div>

      {/* MAIN */}
      <div className="
      relative
      z-20

      grid
      lg:grid-cols-[1fr_420px]
      gap-10
      ">

        {/* ITEMS */}
        <div className="space-y-7">

          {cartItems.map((item) => (

            <motion.div
              key={item._id}
              whileHover={{
                y: -5,
              }}
              className="
              bg-white/5
              backdrop-blur-3xl

              border
              border-white/10

              rounded-[35px]

              p-5

              flex
              flex-col
              xl:flex-row
              gap-6
              "
            >

              {/* IMAGE */}
              <Link
                to={`/product/${item._id}`}
                className="
                w-full
                xl:w-[240px]
                "
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full
                  h-56
                  object-cover
                  rounded-[28px]
                  "
                />

              </Link>

              {/* CONTENT */}
              <div className="
              flex-1
              flex
              flex-col
              justify-between
              ">

                <div>

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

                  <h2 className="
                  text-3xl
                  font-black
                  ">

                    {item.name}

                  </h2>

                  <div className="
                  mt-5
                  text-4xl
                  font-black
                  text-green-400
                  ">

                    ₹{item.price.toFixed(2)}

                  </div>

                </div>

                {/* ACTIONS */}
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

                    <button
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          Math.max(
                            1,
                            item.qty - 1
                          )
                        )
                      }
                      className="
                      w-11
                      h-11

                      rounded-xl

                      bg-white/5

                      flex
                      items-center
                      justify-center
                      "
                    >

                      <Minus size={17} />

                    </button>

                    <span className="
                    text-2xl
                    font-black
                    ">

                      {item.qty}

                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.qty + 1
                        )
                      }
                      className="
                      w-11
                      h-11

                      rounded-xl

                      bg-green-500

                      flex
                      items-center
                      justify-center
                      "
                    >

                      <Plus size={17} />

                    </button>

                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      removeFromCart(item._id)
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
                    "
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
        <div className="
        sticky
        top-28
        h-fit
        ">

          <div className="
          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          rounded-[40px]

          p-8
          ">

            <h2 className="
            text-4xl
            font-black
            mb-8
            ">

              Order Summary

            </h2>

            <div className="
            space-y-5
            mb-8
            ">

              {cartItems.map((item) => (

                <div
                  key={item._id}
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
                    ">

                      {item.name}

                    </p>

                    <p className="
                    text-sm
                    text-gray-400
                    ">

                      Qty : {item.qty}

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
                      item.qty
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
              ">

                Total

              </h3>

              <span className="
              text-5xl
              font-black
              text-green-400
              ">

                ₹{getCartTotal.toFixed(2)}

              </span>

            </div>

            {/* CHECKOUT */}
            <Link to="/checkout">

              <button
                className="
                w-full

                bg-gradient-to-r
                from-green-500
                to-emerald-600

                py-5

                rounded-[24px]

                text-xl
                font-black
                "
              >

                Proceed To Checkout

              </button>

            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;