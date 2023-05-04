const express = require("express");
const cors = require("cors");
const chefs = require("./chefs.json");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "working" });
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
