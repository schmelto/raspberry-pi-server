const express = require("express");
const app = express();
const port = 3000;

app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
