import Cart from '../models/Cart.js';

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({
      user: req.user._id,
      products: [],
    });
  }

  const itemIndex = cart.products.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex > -1) {
    cart.products[itemIndex].quantity += quantity;
  } else {
    cart.products.push({ productId, quantity });
  }

  await cart.save();

  res.json(cart);
};

const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('products.productId');

  res.json(cart);
};

export {
  addToCart,
  getCart,
};
