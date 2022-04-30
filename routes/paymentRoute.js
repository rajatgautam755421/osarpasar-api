const PaymentModel = require("../models/PaymentModel");

const router = require("express").Router();

router.post("/payment", async (req, res) => {
  const { amount, idx, mobile, product_name, product_url, name, email } =
    req.body;

  try {
    const response = await PaymentModel.create({
      amount,
      idx,
      mobile,
      product_name,
      product_url,
      name,
      email,
    });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/payment", async (req, res) => {
  const response = await PaymentModel.find({});
  res.json(response);
});
module.exports = router;
