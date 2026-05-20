import React, { useState } from 'react';

import {
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

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

  const location = useLocation();

  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">

        {/* MAIN NAVBAR */}
        <div className="container mx-auto px-4 py-3">

          <div className="flex items-center justify-between gap-3">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* MOBILE MENU */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-all shrink-0"
                onClick={() =>
                  setIsMenuOpen(true)
                }
              >

                <Menu size={24} />

              </button>

              {/* LOGO */}
              <Link
                to="/"
                className="flex items-center gap-2 min-w-0"
              >

                <img
                  src="/assets/logo.png"
                  alt="Organic"
                  className="h-9 w-auto object-contain shrink-0"
                />

                
              </Link>
            </div>

            {/* CENTER NAV */}
            <nav className="hidden lg:flex justify-center flex-1">

              <ul className="flex items-center gap-10 text-sm font-bold uppercase tracking-wider">

                <li>
                  <Link
                    to="/"
                    className={`transition-all duration-300 pb-1 border-b-2 ${
                      isActive('/')
                        ? 'text-green-600 border-green-600'
                        : 'text-gray-700 border-transparent hover:text-green-600'
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className={`transition-all duration-300 pb-1 border-b-2 ${
                      isActive('/about')
                        ? 'text-green-600 border-green-600'
                        : 'text-gray-700 border-transparent hover:text-green-600'
                    }`}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className={`transition-all duration-300 pb-1 border-b-2 ${
                      isActive('/shop')
                        ? 'text-green-600 border-green-600'
                        : 'text-gray-700 border-transparent hover:text-green-600'
                    }`}
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className={`transition-all duration-300 pb-1 border-b-2 ${
                      isActive('/contact')
                        ? 'text-green-600 border-green-600'
                        : 'text-gray-700 border-transparent hover:text-green-600'
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">

              {/* LOGIN */}
              <Link
                to="/login"
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-all text-gray-700"
              >

                <User size={20} />

              </Link>

              {/* WISHLIST */}
              <Link
                to="/wishlist"
                className="w-10 h-10 flex items-center justify-center hover:bg-pink-50 rounded-full transition-all text-gray-700 relative"
              >

                <Heart size={20} />

                <span className="absolute top-0 right-0 w-5 h-5 bg-pink-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {likedItems.length}
                </span>
              </Link>

              {/* CART */}
              <Link
                to="/cart"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-green-100 hover:bg-green-200 rounded-full transition-all text-green-700 relative flex items-center justify-center"
              >

                <ShoppingBag size={20} />

                <span className="absolute top-0 right-0 w-5 h-5 bg-green-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {getCartCount()}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>

          {isMenuOpen && (
            <>
              {/* OVERLAY */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() =>
                  setIsMenuOpen(false)
                }
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
              />

              {/* SIDEBAR */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{
                  type: 'spring',
                  damping: 25,
                }}
                className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[99999] shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 flex flex-col border-r border-gray-200"
              >

                {/* TOP */}
                <div className="flex items-center justify-between mb-10">

                  <img
                    src="/assets/logo.png"
                    alt="Logo"
                    className="h-10"
                  />

                  <button
                    onClick={() =>
                      setIsMenuOpen(false)
                    }
                    className="p-2 hover:bg-gray-100 rounded-xl"
                  >

                    <X size={24} />

                  </button>
                </div>

                {/* MOBILE LINKS */}
                <ul className="space-y-5">

                  <li>
                    <Link
                      to="/"
                      onClick={() =>
                        setIsMenuOpen(false)
                      }
                      className="text-lg font-bold hover:text-green-600 block"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about"
                      onClick={() =>
                        setIsMenuOpen(false)
                      }
                      className="text-lg font-bold hover:text-green-600 block"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/shop"
                      onClick={() =>
                        setIsMenuOpen(false)
                      }
                      className="text-lg font-bold hover:text-green-600 block"
                    >
                      Shop
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      onClick={() =>
                        setIsMenuOpen(false)
                      }
                      className="text-lg font-bold hover:text-green-600 block"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* FLOATING CART BUTTON */}
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
            className="fixed bottom-5 right-5 z-[99999] bg-gradient-to-r from-green-500 to-lime-500 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-black hover:scale-105 transition-all"
          >

            <ShoppingBag size={20} />

            <span className="hidden sm:block">
              Continue To Cart
            </span>

            <span className="bg-white text-green-600 px-2 py-1 rounded-lg text-xs">
              {getCartCount()}
            </span>

            <ArrowRight size={18} />

          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;