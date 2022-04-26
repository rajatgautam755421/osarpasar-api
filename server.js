const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("./config/database");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const Port = 4000;
//Global Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//Importing Route
const contactRoute = require("./routes/contactRoute");
const authRoute = require("./routes/AuthRoute");
const ShipmentRoute = require("./routes/ShipmentRoute");

//Using Routes
app.use("/api/v1", contactRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", ShipmentRoute);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(Port, () => {
  console.log("Server is up and running in 3000");
});
