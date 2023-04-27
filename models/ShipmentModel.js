const { Schema, model } = require("mongoose");
const { SHIPMENT_STATUSES } = require("../common/Constants");

const shipmentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "UserModal",
    },
    courierSize: {
      type: Number,
      required: true,
    },
    deliveryProvience: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryDistrict: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryMunicipality: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryTole: {
      type: String,
      required: true,
      trim: true,
    },
    typeOfParcel: {
      type: String,
      required: true,
      trim: true,
    },
    pickupTime: {
      type: String,

      trim: true,
    },
    recieverName: {
      type: String,
      required: true,
      trim: true,
    },

    recieverEmail: {
      type: String,
      required: true,
      trim: true,
    },
    recieverPhone: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: [true, "Status Of Product Is Required"],
      trim: true,
      enum: [...SHIPMENT_STATUSES],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = new model("ShipmentModal", shipmentSchema);
