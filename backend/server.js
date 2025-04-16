const express = require("express");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();
app.use(cors());

require("dotenv").config();

connectDB();
app.listen(3000, () => {
  console.log("Server is running on port 3000".cyan.bold);
});

app.get("/get", (req, res) => {
  res.json("Hello World");
});
