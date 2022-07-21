const {Router} = require('express');;
const ItemsModel = require("../Models/ItemsModel");

const itemsRoutes = Router();

itemsRoutes.get("/", async (req, res) => {
  const items = await ItemsModel.find({});
  return res.json(items);
});

itemsRoutes.get("/search", async (req, res) => {
  const query = req.query.q;
  const items = await ItemsModel.find({
    name: { $regex: new RegExp(`${query}*`), $options: "gi" },
  });
  return res.json(items);
});

module.exports = itemsRoutes;