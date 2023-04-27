const {
  generateOtp,
  removeSensetiveField,
} = require("../common/generalHelpers");
const asyncHandler = require("../middlewares/asyncHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { ADMIN_ROLE } = require("../common/Constants");
const { sendEmail } = require("../common/sendEmail");

const registerUser = asyncHandler(async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (user) {
    throw new Error("User Already Exists With This Email");
  }

  let salt = await bcrypt.genSalt(12);
  let hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = await userModel.create({
    ...req.body,
    temporaryKey: generateOtp(),
    password: hashedPassword,
  });

  res.json({ message: newUser, success: true });
});

const loginUser = asyncHandler(async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) {
    throw new Error(
      "This Email Doesn't Exist. So Please Register To Continue."
    );
  }

  let validPassword = false;
  if (user.role === ADMIN_ROLE) {
    validPassword = req.body.password === user.password;
  } else {
    validPassword = await bcrypt.compare(req.body.password, user.password);
  }

  if (!validPassword) {
    throw new Error("Password Is Not Valid.");
  }
  const generatedOtp = generateOtp();

  await sendEmail(req.body.email, generatedOtp);

  const updatedUserData = await userModel.findOneAndUpdate(
    { email: req.body.email },
    { otp: user.role === ADMIN_ROLE ? 1234 : generatedOtp },
    { new: true }
  );
  res.json({ success: true, message: updatedUserData });
});

const verifyOtp = asyncHandler(async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (req.body.otp !== user?.otp) {
    throw new Error("OTP Didn't Match.");
  }

  const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  const validUser = {
    _id: user?._id,
    email: user.email,
    phoneNmber: user.phoneNumber,
    token: token,
    role: user?.role,
    subscription: user?.subscription,
    name: user?.name,
    phone: user?.phone,
    completeAddress: user?.completeAddress,
  };

  res.json({ success: true, message: validUser });
});

const findAUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.json({ message: "No Email", status: "Error" });
  }
  const user = await userModel.findOne({ email });
  res.json({ message: user, success: true });
});

const updateUser = asyncHandler(async (req, res) => {
  let { oldPassword, password } = req.body;

  if (password) {
    let salt = await bcrypt.genSalt(12);
    let hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.findById({ _id: req.params.id });
    const validPassword = await bcrypt.compare(oldPassword, user.password);
    if (!validPassword) {
      throw new Error("Password Didn't Match");
    }
    req.body.password = hashedPassword;
  }

  const response = await userModel.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  );

  res.json({ success: true, message: removeSensetiveField(response) });
});

const sendEmailToAllUsers = async (req, res) => {
  const response = await userModel.find({});

  response.forEach((user) => {
    sendEmail(
      user?.email,
      req.body.message,
      "Please Read The Message Carefully",
      "Information From Osar Pasar"
    );
  });
  res.json({ success: true, message: "Successfully Sent" });
};

const getAllUsers = asyncHandler(async (req, res) => {
  const response = await userModel.find();
  res.json({ success: true, message: response });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const response = await userModel.deleteOne({ email: email });
  if (response) {
    res.json({ success: true, message: email });
  }
});

module.exports = {
  registerUser,
  loginUser,
  findAUser,
  verifyOtp,
  updateUser,
  sendEmailToAllUsers,
  getAllUsers,
  deleteUser,
};
