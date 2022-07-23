const { Schema, model } = require("mongoose");

const OTPSchema = new Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, expires: 60, index: true, default: Date.now },
});

const OTPModel = new model("otp", OTPSchema);
module.exports = OTPModel;
