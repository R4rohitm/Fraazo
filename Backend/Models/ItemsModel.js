const {Schema, model, models} = require('mongoose');

const ItemsSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: String, required: true },
  image: {
    type: String,
    default:
      "https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg",
    required: true,
  },
  price: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
});

const ItemsModel = new model("item", ItemsSchema);
module.exports = ItemsModel;