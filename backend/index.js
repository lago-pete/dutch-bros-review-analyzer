const dotenv = require("dotenv");
dotenv.config();  //What this does is find the .env file in your directory. It takes the values found on it and injects them into the process.env so that they may be used later. 


const express = require("express");
require('./src/db/init')


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
