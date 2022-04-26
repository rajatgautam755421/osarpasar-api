const { Schema, model } = require("mongoose");

const shipmentSchema = new Schema({
  sendername: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  number: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  typeofparcel: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  pickuptime: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  recievername: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  country: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
  tole: {
    type: String,
    required: [true, "Name of user is required"],
    trim: true,
  },
});

module.exports = new model("ShipmentModel", shipmentSchema);
