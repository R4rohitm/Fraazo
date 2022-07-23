const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  title:{type: String, enum:["Mr.", "Mrs.", "Miss"]},
  firstname: { type: String, required: [true, "Please enter your first name"] },
  lastname: { type: String, required: [true, "Please enter your last name"] },
  email: { type: String, required: [true, "Please enter your email"], unique: true },
  password: { type: String },
  mobile: { type: String, required: [true, "Please enter your mobile number"], unique: true },
  credits: { type: Number, default: 0 },
  location: [{type:Object}],
  coupon: { type: String, unique:true },
  verified: { type: Boolean, default: false },
  avatar: {
    type: String,
    default:
      "https://webasset.fraazo.com/production/orange.e7cfd56af0f2c6dbd3a1.png",
  },
}, {timestamps: true});

const UsersModel = new model("user", UserSchema);
module.exports = UsersModel;
