const { Schema, model, SchemaTypes } = require("mongoose");

const CartSchema = new Schema({
  userId: { type: SchemaTypes.ObjectId, required: true },
  items: [Object],
});

const CartModel = new model("cart", CartSchema);
module.exports = CartModel;
