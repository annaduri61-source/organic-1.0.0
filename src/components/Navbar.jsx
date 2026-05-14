import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Search & Actions */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <a href="/" className="flex-shrink-0">
              <img src="/images/logo.png" alt="Organic" className="h-10 lg:h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-grow max-w-2xl bg-gray-50 rounded-2xl border border-gray-100 px-4 py-1.5 items-center gap-2">
            <select className="bg-transparent border-none text-sm font-semibold text-gray-600 focus:ring-0 cursor-pointer pr-8">
              <option>All Categories</option>
              <option>Groceries</option>
              <option>Drinks</option>
              <option>Chocolates</option>
            </select>
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <div className="flex-grow flex items-center gap-2">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for more than 20,000 products" 
                className="w-full bg-transparent border-none focus:ring-0 text-sm py-1.5"
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 lg:gap-6">
            <button className="p-2.5 hover:bg-gray-100 rounded-full transition-all text-gray-700">
              <User size={22} />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-full transition-all text-gray-700 relative">
              <Heart size={22} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">0</span>
            </button>
            <button className="p-2.5 bg-primary/10 hover:bg-primary/20 rounded-full transition-all text-primary relative">
              <ShoppingBag size={22} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm">3</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav className="hidden lg:block border-t border-gray-50">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-10 py-3 text-sm font-bold uppercase tracking-wider text-gray-700">
            <li><a href="#" className="text-primary border-b-2 border-primary pb-3 -mb-3">Home</a></li>
            <li className="group relative">
              <button className="flex items-center gap-1 hover:text-primary transition-colors py-3">
                Pages <ChevronDown size={14} />
              </button>
              {/* Simple Dropdown */}
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-xl border border-gray-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-6 py-2 hover:bg-gray-50 hover:text-primary">About Us</a>
                <a href="#" className="block px-6 py-2 hover:bg-gray-50 hover:text-primary">Shop</a>
                <a href="#" className="block px-6 py-2 hover:bg-gray-50 hover:text-primary">Single Product</a>
                <a href="#" className="block px-6 py-2 hover:bg-gray-50 hover:text-primary">Contact</a>
              </div>
            </li>
            <li><a href="#" className="hover:text-primary transition-colors py-3">Fruits & Veges</a></li>
            <li><a href="#" className="hover:text-primary transition-colors py-3">Bakery</a></li>
            <li><a href="#" className="hover:text-primary transition-colors py-3">Beverages</a></li>
            <li><a href="#" className="hover:text-primary transition-colors py-3">Offers</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] shadow-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <img src="/images/logo.png" alt="Logo" className="h-8" />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Menu</h4>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-lg font-bold text-primary">Home</a></li>
                    <li><a href="#" className="text-lg font-bold hover:text-primary">Shop</a></li>
                    <li><a href="#" className="text-lg font-bold hover:text-primary">Categories</a></li>
                    <li><a href="#" className="text-lg font-bold hover:text-primary">Offers</a></li>
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</h4>
                  <p className="text-sm text-gray-500">Need help? Call us:</p>
                  <p className="text-lg font-bold text-gray-800">+1 234 567 890</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
