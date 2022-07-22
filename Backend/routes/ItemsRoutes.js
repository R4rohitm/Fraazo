const {Router} = require('express');;
const ItemsModel = require("../Models/ItemsModel");

const itemsRoutes = Router();

itemsRoutes.get("/", async (req, res) => {
  const items = await ItemsModel.find({});
  return res.json(items);
});

itemsRoutes.get("/:id", async (req, res) => {
  const {id} = req.params;
  const items = await ItemsModel.findOne({_id:id});
  return res.json(items);
});

itemsRoutes.get("/search", async (req, res) => {
  const query = req.query.q;
  const items = await ItemsModel.find({
    name: { $regex: new RegExp(`${query}*`), $options: "gi" },
  });
  return res.json(items);
});

itemsRoutes.post("/", async (req, res) => {
  const items = await ItemsModel({...req.body});
  items.save((err, items) => {
    if(err) return res.status(500).send(err);
    else return res.status(201).json(items);
  });
});

module.exports = itemsRoutes;