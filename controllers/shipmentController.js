const { default: mongoose } = require("mongoose");
const { sendEmail } = require("../common/sendEmail");
const asyncHandler = require("../middlewares/asyncHandler");
const ShipmentModel = require("../models/ShipmentModel");

const createShipment = asyncHandler(async (req, res) => {
  const newShipment = await ShipmentModel.create(req.body);

  await sendEmail(
    req.body.recieverEmail,
    `${req.user.name} has created an order with order number ${newShipment?._id}.<br/>Please don't share this info with anyone else.<br/>Click on this link below to view info.`,
    `Click On The Link Below To View The Order Made By ${req.user?.email}`,
    `http://localhost:3000/reciever/info/${newShipment?._id}`
  );

  res.json({ success: true, message: newShipment });
});

const getShimentInfoOfAUser = asyncHandler(async (req, res) => {
  const { userid } = req.params;

  const userShipmnt = await ShipmentModel.find({ user: userid }).sort({
    createdAt: -1,
  });
  res.json({ success: true, message: userShipmnt });
});

const getAllShipment = asyncHandler(async (req, res) => {
  const allShipments = await ShipmentModel.find({})
    .populate("user")
    .sort({ createdAt: -1 });
  res.json({ success: true, message: allShipments });
});

const deleteShimentInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const userShipmnt = await ShipmentModel.findByIdAndRemove({ _id: id });
  res.json({ success: true, message: userShipmnt });
});

const getUniqueShipment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const orderResponse = await ShipmentModel.findById({ _id: id }).populate(
    "user"
  );

  if (!orderResponse) {
    throw new Error("This Order Is Deleted or Does not Exist.");
  }

  res.json({ success: true, message: orderResponse });
});

const updateShipment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userShipmnt = await ShipmentModel.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );
  res.json({ success: true, message: userShipmnt });
});

module.exports = {
  createShipment,
  getShimentInfoOfAUser,
  deleteShimentInfo,
  getAllShipment,
  getUniqueShipment,
  updateShipment,
};
