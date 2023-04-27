const {
  registerUser,
  loginUser,
  findAUser,
  verifyOtp,
  updateUser,
  sendEmailToAllUsers,
  getAllUsers,
  deleteUser,
} = require("../controllers/userController");

const router = require("express").Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/login/otp").post(verifyOtp);
router.route("/getUser").get(findAUser);
router.route("/update/:id").put(updateUser);
router.route("/email").post(sendEmailToAllUsers);
router.route("/all").get(getAllUsers);
router.route("/delete").post(deleteUser);

module.exports = router;
