const ItemsModel = require("../Models/ItemsModel");

const getAllItems = async(req, res) => {
    const items = await ItemsModel.find({});
    return res.json(items);
};

const getItemById = async(req, res) => {
    const { id } = req.params;
    const items = await ItemsModel.findOne({ _id: id });
    return res.json(items);
};

const getItemsBySearch = async(req, res) => {
      const query = req.query.q;
      const items = await ItemsModel.find({
        name: { $regex: new RegExp(`${query}*`), $options: "gi" },
      });
      return res.json(items);
};

const getVegetables = async(req, res) => {
    const items = await ItemsModel.find({category:"vegetables"});
    return res.json(items);
};

const getFruits = async(req, res) => {
    const items = await ItemsModel.find({category:"fruits"});
    return res.json(items);
};

const createNewItem = async(req, res) => {
    const items = await ItemsModel({ ...req.body });
    items.save((err, items) => {
        if (err) return res.status(500).send(err);
        else return res.status(201).json(items);
    });
};

module.exports = {
  getAllItems,
  getItemById,
  getItemsBySearch,
  getVegetables,
  getFruits,
  createNewItem,
};