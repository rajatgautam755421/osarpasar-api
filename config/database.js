const { connect } = require("mongoose");
const { createSeedAdmin } = require("../common/generalHelpers");
require("dotenv").config();

const dbConnection = async () => {
  await connect(
    "mongodb+srv://amanmongodb123:amanmongodb123@cluster0.raequ.mongodb.net/osar-pasar",
    (err) => {
      if (!err) {
        console.log("connected to database 😂");
        createSeedAdmin();
      } else {
        console.log(err.message);
      }
    }
  );
};

module.exports = { dbConnection };
