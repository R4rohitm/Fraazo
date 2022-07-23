const {Router} = require('express');
const CartModel = require("../Models/CartModel");
const {
  getCartByUserId,
  addNewCartItem,
  addMultipleCartItems,
  changeQuantity,
  deleteCartItem,
  countUserCartItems,
} = require("../Controllers/CartController");

const cartRoutes = Router();

cartRoutes.get("/user/:userId", getCartByUserId);

cartRoutes.get("/countItems/:userId", countUserCartItems);

cartRoutes.post("/", addNewCartItem );

cartRoutes.post("/multiple", addMultipleCartItems);

cartRoutes.patch("/:id", changeQuantity);

cartRoutes.delete("/:id", deleteCartItem);

module.exports = cartRoutes;