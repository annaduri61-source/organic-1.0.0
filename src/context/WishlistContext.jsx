import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleWishlist = (product) => {
    setLikedItems((prev) => {
      const isLiked = prev.some((item) => item.id === product.id);
      if (isLiked) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isLiked = (productId) => {
    return likedItems.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ likedItems, toggleWishlist, isLiked }}>
      {children}
    </WishlistContext.Provider>
  );
};
