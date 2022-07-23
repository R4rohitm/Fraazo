const CartModel = require("../Models/CartModel");

const getCartById = async (req, res) => {
  const { id } = req.params;
  const cart = await CartModel.findOne({ _id: id });
  if (!cart) {
    return res.status(404).send("Cart Data not found!");
  } else {
    return res.status(200).json(cart);
  }
};

const getCartByUserId = async (req, res) => {
  const { userId } = req.params;
  const cart = await CartModel.findOne({ userId });
  if (!cart) {
    return res.status(404).send("Cart Data not found!");
  } else {
    return res.status(200).json(cart);
  }
};

const createNewCartItem = async(req, res) => {
    const cart = await CartModel({...req.body, quantity:1}); 
    cart.save((err, cart) => {
        if(err) return res.status(500).send(err);
        else res.status(200).send("Cart Data created successfully!");
    });
};

module.exports = { getCartById, getCartByUserId, createNewCartItem };
