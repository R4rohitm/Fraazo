const { Schema, model, SchemaTypes } = require("mongoose");

const CartItemModel = require("./CartItemModel");

const CartSchema = new Schema(
  {
    userId: { type: SchemaTypes.ObjectId, required: true },
    items: [{type: SchemaTypes.ObjectId, ref:
      CartItemModel}], 
  },
  { timestamps: true }
);

const CartModel = new model("cart", CartSchema);
module.exports = CartModel;


//Add to cart -> add to items array -> if already existing , inc qty 