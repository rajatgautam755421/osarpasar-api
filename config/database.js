const { connect } = require("mongoose");
require("dotenv").config();

connect(
  "mongodb+srv://amanmongodb123:amanmongodb123@cluster0.raequ.mongodb.net/NihareekaCollege",
  (err) => {
    if (!err) {
      console.log("connected to database 😂");
    } else {
      console.log("No connection 😒");
    }
  }
);
