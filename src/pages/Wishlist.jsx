import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { likedItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-50/50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-3xl font-black text-gray-900">Your Wishlist</h1>
          <p className="text-gray-500 font-medium">Products you liked</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {likedItems.length ? (
              likedItems.map((item, index) => (
                <div key={item.id} className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl p-4 flex-shrink-0 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="font-black text-primary text-xl">₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <button
                      onClick={() => { addToCart(item, 1); toggleWishlist(item); }}
                      className="flex items-center gap-2 bg-yellow-400 text-gray-900 py-2 px-3 rounded-xl font-bold hover:bg-yellow-500 transition-all"
                    >
                      <ShoppingCart size={16} /> Move to Cart
                    </button>
                    <button
                      onClick={() => toggleWishlist(item)}
                      className="text-xs font-bold text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                <p className="font-bold text-gray-900 mb-2">You haven't liked any products yet</p>
                <Link to="/shop" className="text-primary font-bold">Browse products</Link>
              </div>
            )}
          </div>

          <aside className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl h-fit sticky top-24">
            <h2 className="text-xl font-black text-gray-900 mb-4">Wishlist Summary</h2>
            <p className="text-gray-500">Items: <span className="font-bold text-gray-900">{likedItems.length}</span></p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
