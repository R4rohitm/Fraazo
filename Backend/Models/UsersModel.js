const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  emailId: { type: String, required: true },
  password: { type: String },
  mobileNumber: { type: String, required: true },
  credits: { type: Number, default:0 },
  location: [String],
  coupon: { type: String },
  verified: { type: Boolean },
});

const UsersModel = new model("user", UserSchema);
module.exports = UsersModel;
