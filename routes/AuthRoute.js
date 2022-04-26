const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

//Create A User
router.post("/register", async (req, res) => {
  const isAUser = await UserModel.findOne({ email: req.body.email });
  if (!isAUser) {
    const requestUser = await new UserModel(req.body);
    try {
      const newUser = await requestUser.save();
      res.status(201).json({
        success: true,
        user: newUser,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error,
      });
    }
  } else {
    res.json({
      status: "failed",
      message: "User Already Exists",
    });
  }
});

//Login In A User
router.post("/login", async (req, res) => {
  //check if user is already present
  const presentUser = await UserModel.findOne({ email: req.body.email });
  //Email exists or not
  if (!presentUser) return res.status(400).send("Email is not found");
  //password matches or not
  const validPassword = await bcrypt.compare(
    req.body.password,
    presentUser.hashedPassword
  );
  if (!validPassword) return res.status(400).json("Password is incorrect");

  try {
    await new UserModel({
      email: req.body.email,
      password: req.body.password,
    });

    res.json({
      _id: presentUser._id,
      name: presentUser.name,
      email: presentUser.email,
      token: jwt.sign(
        { _id: presentUser._id },
        "kjbsjkfsdbjkfjksdjkfhkjsdvbfhsdjfvdsbjvfhsdvfjsdvfvhdsvfvjd"
      ),
    });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

module.exports = router;
