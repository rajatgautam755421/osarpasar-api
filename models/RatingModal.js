const { Schema, model } = require("mongoose");

const ratingSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = new model("RatingModel", ratingSchema);
