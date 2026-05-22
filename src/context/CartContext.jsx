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

const CartContext = createContext();

/* ======================================= */
/* CUSTOM HOOK */
/* ======================================= */

export const useCart = () => {
  return useContext(CartContext);
};

/* ======================================= */
/* PROVIDER */
/* ======================================= */

export const CartProvider = ({
  children,
}) => {

  const [cartItems, setCartItems] =
    useState([]);

  /* ======================================= */
  /* LOAD CART FROM LOCAL STORAGE */
  /* ======================================= */

  useEffect(() => {

    const storedCart =
      localStorage.getItem('cartItems');

    if (storedCart) {

      setCartItems(
        JSON.parse(storedCart)
      );
    }

  }, []);

  /* ======================================= */
  /* SAVE CART TO LOCAL STORAGE */
  /* ======================================= */

  useEffect(() => {

    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  /* ======================================= */
  /* ADD TO CART */
  /* ======================================= */

  const addToCart = (
    product,
    quantity = 1
  ) => {

    setCartItems((prevItems) => {

      const existingItem =
        prevItems.find(
          (item) =>
            item._id === product._id
        );

      /* ITEM EXISTS */
      if (existingItem) {

        return prevItems.map(
          (item) =>
            item._id === product._id
              ? {
                  ...item,
                  qty:
                    item.qty +
                    quantity,
                }
              : item
        );
      }

      /* NEW ITEM */
      return [
        ...prevItems,
        {
          ...product,
          qty: quantity,
        },
      ];
    });
  };

  /* ======================================= */
  /* REMOVE FROM CART */
  /* ======================================= */

  const removeFromCart = (
    productId
  ) => {

    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          item._id !== productId
      )
    );
  };

  /* ======================================= */
  /* UPDATE QUANTITY */
  /* ======================================= */

  const updateQuantity = (
    productId,
    newQuantity
  ) => {

    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId
          ? {
              ...item,
              qty: newQuantity,
            }
          : item
      )
    );
  };

  /* ======================================= */
  /* CLEAR CART */
  /* ======================================= */

  const clearCart = () => {
    setCartItems([]);
  };

  /* ======================================= */
  /* TOTAL PRICE */
  /* ======================================= */

  const getCartTotal = useMemo(() => {

    return cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.qty,
      0
    );

  }, [cartItems]);

  /* ======================================= */
  /* TOTAL ITEMS COUNT */
  /* ======================================= */

  const getCartCount = useMemo(() => {

    return cartItems.reduce(
      (count, item) =>
        count + item.qty,
      0
    );

  }, [cartItems]);

  /* ======================================= */
  /* CONTEXT VALUE */
  /* ======================================= */

  const value = {
    cartItems,

    addToCart,

    removeFromCart,

    updateQuantity,

    clearCart,

    getCartTotal,

    getCartCount,
  };

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
};