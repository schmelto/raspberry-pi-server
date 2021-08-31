var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/names", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
