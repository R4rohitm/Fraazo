const { Router } = require("express");
const {
  getAllItems,
  getItemById,
  getItemsBySearch,
  getBestDeals,
  getVegetables,
  getFruits,
  createNewItem,
} = require("../Controllers/ItemsController");

const itemsRoutes = Router();

itemsRoutes.get("/", getAllItems);

itemsRoutes.get("/search", getItemsBySearch);

itemsRoutes.get("/bestDeals", getBestDeals);

itemsRoutes.get("/vegetables", getVegetables);

itemsRoutes.get("/fruits", getFruits);

itemsRoutes.get("/:id", getItemById);

itemsRoutes.post("/", createNewItem);

module.exports = itemsRoutes;
