import React, {
  useState,
  useEffect,
} from 'react';

import {
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { useWishlist } from '../context/WishlistContext';

import { useCart } from '../context/CartContext';

const Navbar = () => {

  const { likedItems } = useWishlist();

  const { cartItems, getCartCount } =
    useCart();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  /* ================================================= */
  /* SCROLL EFFECT */
  /* ================================================= */

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );

  }, []);

  const isActive = (path) =>
    location.pathname === path;

  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Shop',
      path: '/shop',
    },
    {
      label: 'Categories',
      path: '/categories',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <motion.header
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`
        fixed
        top-0
        left-0
        w-full

        z-[9999]

        transition-all
        duration-500

        ${
          isScrolled
            ? `
            bg-[#050816]/75
            backdrop-blur-3xl

            border-b
            border-white/10

            shadow-[0_10px_60px_rgba(0,0,0,0.45)]

            py-2
            `
            : `
            bg-transparent
            py-4
            `
        }
        `}
      >

        {/* GLOW */}
        <div className="
        absolute
        inset-0

        opacity-60

        bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_30%)]

        pointer-events-none
        " />

        <div className="
        container
        mx-auto
        px-4
        relative
        z-20
        ">

          <div className="
          flex
          items-center
          justify-between
          gap-5
          ">

            {/* ================================================= */}
            {/* LEFT */}
            {/* ================================================= */}

            <div className="
            flex
            items-center
            gap-3
            ">

              {/* MOBILE MENU */}
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  rotate: 10,
                }}
                className="
                lg:hidden

                w-11
                h-11

                rounded-2xl

                bg-white/5
                backdrop-blur-2xl

                border
                border-white/10

                text-white

                flex
                items-center
                justify-center

                transition-all
                "
                onClick={() =>
                  setIsMenuOpen(true)
                }
              >

                <Menu size={22} />

              </motion.button>

              {/* LOGO */}
              <Link
                to="/"
                className="
                flex
                items-center
                gap-3
                "
              >

                <motion.img
                  whileHover={{
                    rotate: -5,
                    scale: 1.05,
                  }}
                  src="/assets/logo.png"
                  alt="Organic"
                  className="
                  h-10
                  sm:h-12
                  w-auto
                  object-contain
                  "
                />

                <div className="
                hidden
                sm:block
                ">

                  

                </div>

              </Link>

            </div>

            {/* ================================================= */}
            {/* CENTER NAV */}
            {/* ================================================= */}

            <nav className="
            hidden
            lg:flex
            ">

              <div className="
              flex
              items-center
              gap-3

              bg-white/5
              backdrop-blur-3xl

              border
              border-white/10

              rounded-full

              px-4
              py-3

              shadow-[0_10px_50px_rgba(0,0,0,0.35)]
              ">

                {navLinks.map((item, index) => (

                  <Link
                    key={index}
                    to={item.path}
                    className="
                    relative
                    "
                  >

                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      className={`
                      relative

                      px-5
                      py-3

                      rounded-full

                      text-sm
                      font-black

                      uppercase
                      tracking-[0.15em]

                      transition-all
                      duration-300

                      overflow-hidden

                      ${
                        isActive(item.path)
                          ? `
                          text-white
                          `
                          : `
                          text-gray-300
                          hover:text-white
                          `
                      }
                      `}
                    >

                      {/* ACTIVE BG */}
                      {isActive(item.path) && (

                        <motion.div
                          layoutId="navbar-pill"
                          transition={{
                            type: 'spring',
                            bounce: 0.25,
                            duration: 0.6,
                          }}
                          className="
                          absolute
                          inset-0

                          rounded-full

                          bg-gradient-to-r
                          from-green-500
                          to-emerald-600

                          shadow-[0_10px_40px_rgba(34,197,94,0.4)]
                          "
                        />

                      )}

                      {/* HOVER LIGHT */}
                      <div className="
                      absolute
                      inset-0

                      opacity-0
                      hover:opacity-100

                      transition-all
                      duration-500

                      bg-white/5
                      rounded-full
                      " />

                      <span className="
                      relative
                      z-20
                      ">

                        {item.label}

                      </span>

                    </motion.div>

                  </Link>
                ))}

              </div>

            </nav>

            {/* ================================================= */}
            {/* RIGHT */}
            {/* ================================================= */}

            <div className="
            flex
            items-center
            gap-3
            ">

              {/* LOGIN */}
              <motion.div
                whileHover={{
                  y: -3,
                  rotate: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >

                <Link
                  to="/login"
                  className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-white/5
                  backdrop-blur-2xl

                  border
                  border-white/10

                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-green-500

                  transition-all
                  duration-300
                  "
                >

                  <User size={20} />

                </Link>

              </motion.div>

              {/* WISHLIST */}
              <motion.div
                whileHover={{
                  y: -3,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >

                <Link
                  to="/wishlist"
                  className="
                  relative

                  w-12
                  h-12

                  rounded-2xl

                  bg-white/5
                  backdrop-blur-2xl

                  border
                  border-white/10

                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-pink-500

                  transition-all
                  duration-300
                  "
                >

                  <Heart size={20} />

                  <span className="
                  absolute
                  -top-1
                  -right-1

                  w-5
                  h-5

                  rounded-full

                  bg-pink-500

                  text-white
                  text-[10px]
                  font-black

                  flex
                  items-center
                  justify-center
                  ">

                    {likedItems.length}

                  </span>

                </Link>

              </motion.div>

              {/* CART */}
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >

                <Link
                  to="/cart"
                  className="
                  relative

                  h-12

                  px-5

                  rounded-2xl

                  bg-gradient-to-r
                  from-green-500
                  to-emerald-600

                  text-white

                  flex
                  items-center
                  gap-3

                  shadow-[0_10px_40px_rgba(34,197,94,0.4)]

                  transition-all
                  duration-300
                  "
                >

                  <ShoppingBag size={20} />

                  <span className="
                  hidden
                  sm:block

                  text-sm
                  font-black

                  uppercase
                  tracking-[0.15em]
                  ">

                    Cart

                  </span>

                  <span className="
                  w-6
                  h-6

                  rounded-full

                  bg-white
                  text-green-600

                  text-[11px]
                  font-black

                  flex
                  items-center
                  justify-center
                  ">

                    {getCartCount}

                  </span>

                </Link>

              </motion.div>

            </div>

          </div>

        </div>

      </motion.header>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>

        {isMenuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="
              fixed
              inset-0

              bg-black/70
              backdrop-blur-sm

              z-[99998]
              "
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{
                x: '-100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '-100%',
              }}
              transition={{
                type: 'spring',
                damping: 25,
              }}
              className="
              fixed
              top-0
              left-0
              bottom-0

              w-[85%]
              max-w-[340px]

              bg-[#050816]/95
              backdrop-blur-3xl

              border-r
              border-white/10

              z-[99999]

              shadow-[0_20px_80px_rgba(0,0,0,0.6)]

              p-6

              flex
              flex-col
              "
            >

              {/* TOP */}
              <div className="
              flex
              items-center
              justify-between

              mb-12
              ">

                <div className="
                flex
                items-center
                gap-3
                ">

                  <img
                    src="/assets/logo.svg"
                    alt="Logo"
                    className="h-10"
                  />

                  <div>

                    <h2 className="
                    text-2xl
                    font-black
                    text-white
                    ">

                      Organic

                    </h2>

                    <p className="
                    text-[10px]

                    uppercase
                    tracking-[0.3em]

                    text-green-300

                    font-black
                    ">

                      Healthy Store
                    </p>

                  </div>

                </div>

                <button
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                  className="
                  w-11
                  h-11

                  rounded-2xl

                  bg-white/5

                  border
                  border-white/10

                  text-white

                  flex
                  items-center
                  justify-center
                  "
                >

                  <X size={22} />

                </button>

              </div>

              {/* LINKS */}
              <ul className="
              space-y-5
              ">

                {navLinks.map((item, index) => (

                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >

                    <Link
                      to={item.path}
                      onClick={() =>
                        setIsMenuOpen(false)
                      }
                      className={`
                      flex
                      items-center
                      justify-between

                      px-5
                      py-4

                      rounded-2xl

                      text-lg
                      font-black

                      transition-all
                      duration-300

                      ${
                        isActive(item.path)
                          ? `
                          bg-gradient-to-r
                          from-green-500
                          to-emerald-600

                          text-white
                          `
                          : `
                          bg-white/5
                          text-gray-300

                          hover:bg-white/10
                          hover:text-white
                          `
                      }
                      `}
                    >

                      {item.label}

                      <ArrowRight size={18} />

                    </Link>

                  </motion.li>
                ))}

              </ul>

              {/* BOTTOM */}
              <div className="
              mt-auto

              bg-white/5
              backdrop-blur-2xl

              border
              border-white/10

              rounded-[30px]

              p-6
              ">

                <div className="
                flex
                items-center
                gap-3

                mb-4
                ">

                  <Sparkles
                    size={18}
                    className="text-green-400"
                  />

                  <p className="
                  text-sm
                  font-black

                  uppercase
                  tracking-[0.2em]

                  text-green-300
                  ">

                    Premium Organic
                  </p>

                </div>

                <h3 className="
                text-2xl
                font-black
                text-white
                leading-tight
                ">

                  Healthy Shopping Experience

                </h3>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* FLOATING CART */}
      {/* ================================================= */}

      <AnimatePresence>

        {cartItems.length > 0 && (
          <motion.button
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            transition={{
              type: 'spring',
              damping: 18,
            }}
            onClick={() =>
              navigate('/cart')
            }
            className="
            fixed
            bottom-5
            right-5

            z-[99999]

            bg-gradient-to-r
            from-green-500
            to-emerald-600

            text-white

            px-6
            py-4

            rounded-2xl

            shadow-[0_20px_60px_rgba(34,197,94,0.45)]

            flex
            items-center
            gap-4

            font-black

            hover:scale-105

            transition-all
            duration-300
            "
          >

            <ShoppingBag size={20} />

            <span className="
            hidden
            sm:block

            uppercase
            tracking-[0.15em]
            text-sm
            ">

              Continue To Cart

            </span>

            <span className="
            bg-white
            text-green-600

            px-3
            py-1

            rounded-xl

            text-xs
            font-black
            ">

              {getCartCount}

            </span>

            <ArrowRight size={18} />

          </motion.button>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;