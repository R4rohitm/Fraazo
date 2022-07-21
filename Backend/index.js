const express = require("express");
const cors = require("cors");
const connection = require('./Database/db');

const itemsRoutes = require("./routes/ItemsRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/items", itemsRoutes);

app.get("/", (req, res) => {
  return res.send("Fraazo Backend");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  await connection;
  console.log(`Connected to DB`);
});
