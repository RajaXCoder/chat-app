const express = require("express");
const colors = require("colors");
const cors = require("cors");

const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

//Routes Handles
app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000".bgMagenta.bold);
});

// app.get("/get", (req, res) => {
//   res.json("Hello World");
// });
