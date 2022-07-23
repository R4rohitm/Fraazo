const { Schema, model, SchemaTypes } = require("mongoose");

const CartItemSchema = new Schema(
  {
    userId: { type: SchemaTypes.ObjectId, required: true },
    quantity: Number,
    name: { type: String, required: true },
    qty: {
      type: String,
      required: [true, "Please enter product selling quantity"],
    },
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
  },
  { timestamps: true }
);

const CartItemModel = new model("cartItem", CartItemSchema);
module.exports = CartItemModel;
