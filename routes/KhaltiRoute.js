const router = require("express").Router();
const axios = require("axios");

router.post("/payment/verify", (req, res) => {
  //   console.log(req.body);
  const { token, amount } = req.body;
  //   console.log(token, amount);
  let data = {
    token: token,
    amount: amount,
  };

  let config = {
    headers: {
      Authorization: "Key test_secret_key_31baef07122c4822a2823fd38678d0be",
    },
  };

  try {
    axios
      .post("https://khalti.com/api/v2/payment/verify/", data, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
