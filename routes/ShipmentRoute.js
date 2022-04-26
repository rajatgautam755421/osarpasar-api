const ShipmentModel = require("../models/ShipmentModel");
const router = require("express").Router();

router.post("/shipment", async (req, res) => {
  try {
    const response = await ShipmentModel.create(req.body);
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/shipment", async (req, res) => {
  try {
    const response = await ShipmentModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
