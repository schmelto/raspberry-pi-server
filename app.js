/* eslint-disable no-undef */
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/names", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

//get info
app.get("/info", (req, res) => {
    res.json({});
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
