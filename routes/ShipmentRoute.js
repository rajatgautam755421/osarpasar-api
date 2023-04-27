const {
  createShipment,
  getShimentInfoOfAUser,
  deleteShimentInfo,
  getAllShipment,
  getUniqueShipment,
  updateShipment,
} = require("../controllers/shipmentController");
const router = require("express").Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const verifyRoles = require("../middlewares/roleMiddleware");
const { SENDER_ROLE, ADMIN_ROLE, ALL_ROLES } = require("../common/Constants");

router.post(
  "/shipment",
  authMiddleware,
  verifyRoles([SENDER_ROLE]),
  createShipment
);

router.get(
  "/shipment/:userid",
  authMiddleware,
  verifyRoles([SENDER_ROLE, ADMIN_ROLE]),
  getShimentInfoOfAUser
);
router.get(
  "/shipment/remove/:id",
  authMiddleware,
  verifyRoles([SENDER_ROLE, ADMIN_ROLE]),
  deleteShimentInfo
);
router.get("/shipment/reciever/:id", getUniqueShipment);

router.post("/shipment/all", getAllShipment);
router.put("/shipment/update/:id", updateShipment);

module.exports = router;
