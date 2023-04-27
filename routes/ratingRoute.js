const asyncHandler = require("../middlewares/asyncHandler");
const RatingModal = require("../models/ratingModal");

const router = require("express").Router();

router.post(
  "/rating",
  asyncHandler(async (req, res) => {
    const { email, rating } = req.body;
    console.log(req.body);
    if (!email || !rating) {
      throw new Error("Email and Rating Must Be Provides");
    }

    const findFeedbackToRespectiveEmail = await RatingModal.findOne({
      email: email,
    });

    if (findFeedbackToRespectiveEmail) {
      throw new Error("You Already Have Provided Feedback.");
    }

    const response = await RatingModal.create({ ...req.body });
    res.json({ message: response, success: true });
  })
);

router.get(
  "/ratings",
  asyncHandler(async (req, res) => {
    const response = await RatingModal.find();
    res.json({ message: response, success: true });
  })
);

module.exports = router;
