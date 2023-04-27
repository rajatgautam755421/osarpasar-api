const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { dbConnection } = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
dbConnection();

const Port = 5000;
//Global Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//Importing Route
const contactRoute = require("./routes/contactRoute");
const ShipmentRoute = require("./routes/ShipmentRoute");
const newsletterRoute = require("./routes/newsletterRoute");
const paymentRoute = require("./routes/paymentRoute");
const khaltiRoute = require("./routes/KhaltiRoute");
const userRoute = require("./routes/userRoute");
const ratingRoute = require("./routes/ratingRoute");

const errorHandler = require("./middlewares/error");

//Using Routes
app.use("/api/v1", contactRoute);
app.use("/api/v1", ShipmentRoute);
app.use("/api/v1", newsletterRoute);
app.use("/api/v1", paymentRoute);
app.use("/api/v1", khaltiRoute);
app.use("/api/v1", ratingRoute);
app.use("/api/v1/users", userRoute);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(errorHandler);

app.listen(Port, () => {
  console.log(`Server is up and running in ${Port}`);
});
