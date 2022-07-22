const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//const User = require("./models/userSchema");

//we link the route file
app.use(require("./route/auth"));

const PORT = process.env.PORT;

//Middleware

app.listen(PORT, () => {
  console.log(`Server Started at port no ${PORT}`);
});
