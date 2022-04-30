const ShipmentModel = require("../models/ShipmentModel");
const router = require("express").Router();

router.post("/shipment", async (req, res) => {
  console.log(req.body);
  try {
    const response = await ShipmentModel.create(req.body);
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/shipment", async (req, res) => {
  try {
    const response = await ShipmentModel.find({}).sort({ createdAt: -1 });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.put("/shipment/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await ShipmentModel.findByIdAndUpdate(
      { _id: id },
      { status: req.body.status },
      {
        new: true,
      }
    );
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.delete("/shipment/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await ShipmentModel.findByIdAndRemove({ _id: id });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/shipment/find/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await ShipmentModel.findById({ _id: id });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

//Shipment FInd BY User

router.get("/shipment/findbyuser/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const response = await ShipmentModel.find({ user: id }).sort({
      createdAt: -1,
    });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.put("/shipment/update/paid/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await ShipmentModel.findByIdAndUpdate(
      { _id: id },
      { isPaid: true },
      {
        new: true,
      }
    );
    res.status(200).json(response);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
