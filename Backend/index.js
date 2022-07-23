

const express = require("express");
require("dotenv").config({ path: "./.env" });
const connection = require('./Database/db');


const authRoutes = require("./routes/AuthRoutes");
const itemsRoutes = require("./routes/ItemsRoutes");
const userRoutes = require("./routes/UserRoutes");
const cartRoutes = require("./routes/CartRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const paymentRoutes = require("./routes/PaymentRoutes");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/items", itemsRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/payment", paymentRoutes);

app.get("/", (req, res) => {
  return res.send("Fraazo Backend");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  await connection;
  console.log(`Connected to DB`);
});
