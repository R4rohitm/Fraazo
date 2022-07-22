const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstname: { type: String, required: [true, "Please enter your first name"] },
  lastname: { type: String, required: [true, "Please enter your last name"] },
  emailId: { type: String, required: [true, "Please enter your email"] },
  password: { type: String },
  mobileNumber: { type: String, required: [true, "Please enter your mobile number"] },
  credits: { type: Number, default: 0 },
  location: [Object],
  coupon: { type: String },
  verified: { type: Boolean },
  avatar: {
    type: String,
    default:
      "https://webasset.fraazo.com/production/orange.e7cfd56af0f2c6dbd3a1.png",
  },
});

const UsersModel = new model("user", UserSchema);
module.exports = UsersModel;
