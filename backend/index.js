const express = require("express");
const dotenv = require("dotenv");
require("./src/db/pool");
require('./src/db/init')

dotenv.config();

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
