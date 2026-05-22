import Product from '../models/Product.js';

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const createProduct = async (req, res) => {
  const product = new Product(req.body);

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
};

export {
  getProducts,
  createProduct,
};
