const {Schema, model, models} = require('mongoose');

const ItemsSchema = new Schema({
  name: { type: String, required: [true, "Please enter your name"] },
  qty: { type: String, required: [true, "Please enter product selling quantity"]},
  image: {
    type: String,
    default:
      "https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg",
  },
  price: { type: String, required: [true, "Please enter a price"] },
  category: {
    type: String,
    required: [true, "Please enter the product category"],
  },
  subcategory: {
    type: String,
    required: [true, "Please enter the product subcategory"],
  },
});

const ItemsModel = new model("item", ItemsSchema);
module.exports = ItemsModel;