const asyncHandler = require("../middlewares/asyncHandler");
const ContactModel = require("../models/ContactModel");
const router = require("express").Router();

router.post(
  "/contact",
  asyncHandler(async (req, res) => {
    const response = await ContactModel.create(req.body);
    res.json({ success: true, message: response });
  })
);

router.get("/contact/all", async (req, res) => {
  try {
    const response = await ContactModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.delete("/contact/delete/:id", async (req, res) => {
  const id = req.params.id;
  const response = await ContactModel.findByIdAndRemove({ _id: id });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
