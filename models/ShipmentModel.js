const { Schema, model } = require("mongoose");

const shipmentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    sendername: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    sendernumber: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    senderemail: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    totalWeight: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: [true, "Name of user is required"],
      enum: ["1", "2", "3", "4", "5", "6", "7"],
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
    typeofparcel: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    pickuptime: {
      type: String,

      trim: true,
    },
    recievername: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },

    recieveremail: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    recievernumber: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },

    bstate: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    bcity: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    btole: {
      type: String,
      required: [true, "Name of user is required"],
      trim: true,
    },
    status: {
      type: String,
      required: [true, "Status Of Product Is Required"],
      trim: true,
      enum: ["pending", "delivered", "ontheway"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = new model("ShipmentDataModel", shipmentSchema);
