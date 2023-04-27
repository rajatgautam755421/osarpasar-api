const router = require("express").Router();
const axios = require("axios");
const asyncHandler = require("../middlewares/asyncHandler");

router.post(
  "/payment/verify",
  asyncHandler((req, res) => {
    //   console.log(req.body);
    const { token, amount } = req.body;
    console.log(token, amount);
    let data = {
      token: token,
      amount: amount,
    };

    let config = {
      headers: {
        Authorization: "Key test_secret_key_5ae0f6b24aa54f50aa96f09f547ddff8",
      },
    };

    axios
      .post("https://khalti.com/api/v2/payment/verify/", data, config)
      .then((response) => {
        res.json({ success: true, message: response.data });
      })
      .catch((error) => {
        res.json({ success: false, message: error });
      });
  })
);

module.exports = router;
