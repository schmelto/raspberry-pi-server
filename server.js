/* eslint-disable no-undef */
var express = require("express");
var app = express();

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/users", (_req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

//get info
app.get("/info", (_req, res) => {
  res.json({});
});

//swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
