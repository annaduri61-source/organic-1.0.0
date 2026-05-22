import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

/* ======================================= */
/* CREATE CONTEXT */
/* ======================================= */

const WishlistContext =
  createContext();

/* ======================================= */
/* CUSTOM HOOK */
/* ======================================= */

export const useWishlist = () => {
  return useContext(
    WishlistContext
  );
};

/* ======================================= */
/* PROVIDER */
/* ======================================= */

export const WishlistProvider = ({
  children,
}) => {

  const [likedItems, setLikedItems] =
    useState([]);

  /* ======================================= */
  /* LOAD WISHLIST */
  /* ======================================= */

  useEffect(() => {

    const savedWishlist =
      localStorage.getItem(
        'wishlist'
      );

    if (savedWishlist) {

      setLikedItems(
        JSON.parse(savedWishlist)
      );
    }

  }, []);

  /* ======================================= */
  /* SAVE WISHLIST */
  /* ======================================= */

  useEffect(() => {

    localStorage.setItem(
      'wishlist',
      JSON.stringify(likedItems)
    );

  }, [likedItems]);

  /* ======================================= */
  /* TOGGLE WISHLIST */
  /* ======================================= */

  const toggleWishlist = (
    product
  ) => {

    setLikedItems((prev) => {

      const exists = prev.some(
        (item) =>
          item._id === product._id
      );

      /* REMOVE */
      if (exists) {

        return prev.filter(
          (item) =>
            item._id !== product._id
        );
      }

      /* ADD */
      return [
        ...prev,
        product,
      ];
    });
  };

  /* ======================================= */
  /* CHECK LIKED */
  /* ======================================= */

  const isLiked = (
    productId
  ) => {

    return likedItems.some(
      (item) =>
        item._id === productId
    );
  };

  /* ======================================= */
  /* CLEAR WISHLIST */
  /* ======================================= */

  const clearWishlist = () => {
    setLikedItems([]);
  };

  /* ======================================= */
  /* TOTAL ITEMS */
  /* ======================================= */

  const wishlistCount = useMemo(() => {

    return likedItems.length;

  }, [likedItems]);

  /* ======================================= */
  /* CONTEXT VALUE */
  /* ======================================= */

  const value = {
    likedItems,

    toggleWishlist,

    isLiked,

    clearWishlist,

    wishlistCount,
  };

  return (
    <WishlistContext.Provider
      value={value}
    >
      {children}
    </WishlistContext.Provider>
  );
};