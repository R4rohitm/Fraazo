const { Schema, model, SchemaTypes } = require("mongoose");

const CartSchema = new Schema(
  {
    userId: { type: SchemaTypes.ObjectId, required: true },
    name: { type: String, required: [true, "Please enter your name"] },
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
  },
  { timestamps: true }
);

const CartModel = new model("cart", CartSchema);
module.exports = CartModel;


//Add to cart -> add to items array -> if already existing , inc qty 