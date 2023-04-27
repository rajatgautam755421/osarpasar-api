const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = new model("ContactModel", contactSchema);
