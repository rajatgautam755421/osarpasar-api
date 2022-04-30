const { Schema, model } = require("mongoose");

const newsLetterSchema = new Schema({
  email: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  amount: {
    type: Number,
    // required: true,
  },
  idx: {
    type: String,
    // required: true,
  },
  mobile: {
    type: String,
    // required: true,
  },
  product_name: {
    type: String,
    // required: true,
  },
  product_url: {
    type: String,
    // required: true,
  },
});

module.exports = new model("PaymentModelShipment", newsLetterSchema);
