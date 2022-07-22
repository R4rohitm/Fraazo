const {Router} = require('express');
const {
  getCartById, getCartByUserId, createNewCartItem
} = require('../Controllers/CartController');

const cartRoutes = Router();

cartRoutes.get("/:id", getCartById);

cartRoutes.get("/user/:userId", getCartByUserId);

cartRoutes.post("/", createNewCartItem);


module.exports = cartRoutes;