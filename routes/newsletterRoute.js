const { default: axios } = require("axios");
const NewsLetter = require("../models/NewsLetter");
const router = require("express").Router();

router.post("/newsletter", async (req, res) => {
  const user = await NewsLetter.findOne({ email: req.body.email });
  if (!user) {
    try {
      const response = await NewsLetter.create(req.body);
      res.json(response);
    } catch (error) {
      res.json(error.message);
    }
  } else {
    res.json({
      msg: "ALready Subscribed",
    });
  }
});

router.get("/newsletter", async (req, res) => {
  const response = await NewsLetter.find({});
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

//delete Newsletter

router.delete("/newsletter/delete/:id", async (req, res) => {
  const id = req.params.id;
  const response = await NewsLetter.findByIdAndRemove({ _id: id });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = router;
