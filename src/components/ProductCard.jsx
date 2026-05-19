import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isLiked } = useWishlist();
  const liked = isLiked(product.id);

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-gray-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all group cursor-pointer">
      <Link to="/product" className="relative aspect-square mb-6 bg-gray-50 rounded-2xl overflow-hidden block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        {product.discount && (
          <span className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
            {product.discount}% OFF
          </span>
        )}
        <button 
          onClick={handleLikeClick}
          className={`absolute top-4 right-4 p-2 backdrop-blur-md rounded-full transition-all z-10 ${liked ? 'bg-pink-100 text-pink-500 opacity-100' : 'bg-white/80 text-gray-400 hover:text-pink-500 opacity-0 group-hover:opacity-100'}`}
        >
          <Heart size={18} className={liked ? 'fill-pink-500' : ''} />
        </button>
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
            />
          ))}
          <span className="text-[10px] font-bold text-gray-400 ml-1">({product.reviews})</span>
        </div>

        <Link to="/product">
          <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-gray-900">₹{product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <del className="text-sm text-gray-400 font-bold">₹{product.oldPrice.toFixed(2)}</del>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <div className="flex items-center border border-gray-100 rounded-xl px-2 py-1 gap-3">
            <button className="text-gray-400 hover:text-primary"><Minus size={14} /></button>
            <span className="text-xs font-bold w-4 text-center">1</span>
            <button className="text-gray-400 hover:text-primary"><Plus size={14} /></button>
          </div>
          <button 
            onClick={() => navigate('/cart')}
            className="flex-grow flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 py-2.5 rounded-xl font-bold text-xs hover:bg-yellow-500 hover:scale-[1.05] hover:shadow-xl hover:shadow-yellow-400/40 transition-all active:scale-95 shadow-lg shadow-yellow-400/20"
          >
            <ShoppingCart size={14} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
