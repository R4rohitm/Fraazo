const CartModel = require("../Models/CartModel");

const getCartByUserId = async (req, res) => {
  const { userId } = req.params;
  const cart = await CartModel.find({ userId });
  if (!cart) {
    return res.status(404).send("Cart Data for this user not found!");
  } else {
    return res.status(200).json(cart);
  }
};

const addNewCartItem = async (req, res) => {
  const cartItem = await CartModel(req.body);
  cartItem.save((err, item) => {
    if (err) return res.status(500).send(err);
    else return res.status(201).send("Cart added");
  });
};

const addMultipleCartItems = async (req, res) => {
  const cartItems = await CartModel.insertMany(req.body);
  cartItems.save((err, item) => {
    if (err) return res.status(500).send(err);
    else return res.status(201).send("Item added to Cart");
  });
};

const countUserCartItems = async (req, res) => {
  const { userId } = req.params;
  const count = await CartModel.countDocuments({ userId });
  return res.status(200).send(count);
};

const changeQuantity = async (req, res) => {
  let { id } = req.params;
  let { op } = req.body;
  if (op == "inc") {
    await CartModel.updateOne({ _id: id }, { $inc: { quantity: 1 } });
  } else if (op == "dec") {
    await CartModel.updateOne({ _id: id }, { $inc: { quantity: -1 } });
  }
  let cart = await CartModel.findOne({ _id: id });
  if(cart.quantity === 0){
     await CartModel.deleteOne({ _id: id });
     return res.send("Cart is Empty");
  }else return res.json(cart);
};

const deleteCartItem = async (req, res) => {
  const { id } = req.params;
  await CartModel.deleteOne({ _id: id });
  res.send("Item removed from Cart");
};

module.exports = {
  getCartByUserId,
  addNewCartItem,
  addMultipleCartItems,
  changeQuantity,
  deleteCartItem,
  countUserCartItems,
};
