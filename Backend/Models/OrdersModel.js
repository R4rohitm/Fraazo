const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: { type: SchemaTypes.ObjectId, required: true },
    items: [{type:Object}],
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const OrdersModel = new model("order", OrderSchema);
module.exports = OrdersModel;
