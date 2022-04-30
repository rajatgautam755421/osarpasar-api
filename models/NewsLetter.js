const { Schema, model } = require("mongoose");

const newsLetterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new model("NewsLetterModel", newsLetterSchema);
