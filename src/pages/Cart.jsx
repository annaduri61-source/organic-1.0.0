import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05;
  const shipping = cartItems.length ? 5.0 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-gray-50/50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <ShoppingBag className="text-primary" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-900">Your Cart</h1>
            <p className="text-gray-500 font-medium">Review your items before checkout</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length ? cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 group hover:shadow-xl hover:border-primary/20 transition-all"
              >
                {/* Product Image */}
                <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-2xl p-4 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                </div>

                {/* Product Details */}
                <div className="flex-grow flex flex-col sm:flex-row justify-between items-center sm:items-start w-full gap-4">
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                    <p className="font-black text-primary text-xl">₹{item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col items-center sm:items-end gap-3">
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                      <button
                        onClick={() => {
                          const newQty = item.quantity - 1;
                          if (newQty < 1) {
                            removeFromCart(item.id);
                          } else {
                            updateQuantity(item.id, newQty);
                          }
                        }}
                        className="p-2 text-gray-400 hover:text-primary hover:bg-white rounded-lg transition-all shadow-sm"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-400 hover:text-primary hover:bg-white rounded-lg transition-all shadow-sm"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-bold text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            )) : (
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                <p className="font-bold text-gray-900 mb-2">Your cart is empty</p>
                <Link to="/shop" className="text-primary font-bold">Start shopping</Link>
              </div>
            )}

            <Link to="/shop" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-4">
              <ArrowRight className="rotate-180" size={18} /> Continue Shopping
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 h-fit sticky top-24"
          >
            <h2 className="text-xl font-black text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Subtotal</span>
                <span className="text-gray-900 font-bold">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Shipping</span>
                <span className="text-gray-900 font-bold">₹5.00</span>
              </div>
              <div className="flex justify-between text-gray-500 font-medium pb-4 border-b border-gray-100">
                <span>Estimated Tax (5%)</span>
                <span className="text-gray-900 font-bold">₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-gray-900 text-lg">Total</span>
                <span className="font-black text-primary text-3xl">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 group">
              Proceed to Checkout
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-4 border-t border-gray-100 pt-6">
              <img src="/assets/secure-payment.png" alt="Secure Payment" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" onError={(e) => e.target.style.display = 'none'} />
              <p className="text-xs text-gray-400 font-medium text-center">Safe and secure checkout</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
