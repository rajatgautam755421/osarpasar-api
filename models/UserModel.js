const { Schema, model } = require("mongoose");
const { USER_ROLE, SENDER_ROLE } = require("../common/Constants");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  phone: {
    type: Number,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  otp: {
    type: Number,
  },
  completeAddress: {
    type: String,
  },
  role: {
    type: String,
    default: SENDER_ROLE,
  },
  subscription: {
    type: String,
  },
});

module.exports = model("UserModal", userSchema);
