const { Router } = require("express");
const {
  getAllItems,
  getItemById,
  getItemsBySearch,
  getVegetables,
  getFruits,
  createNewItem,
} = require("../Controllers/ItemsController");

const itemsRoutes = Router();

itemsRoutes.get("/", getAllItems);

itemsRoutes.get("/search", getItemsBySearch);

itemsRoutes.get("/vegetables", getVegetables);

itemsRoutes.get("/fruits", getFruits);

itemsRoutes.get("/:id", getItemById);

itemsRoutes.post("/", createNewItem);

module.exports = itemsRoutes;
