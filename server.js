/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const app = express();
// set port, listen for requests
const PORT = process.env.PORT || 3000;

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
