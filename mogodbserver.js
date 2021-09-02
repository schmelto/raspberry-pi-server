/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var MongoClient = require("mongodb").MongoClient;
var Promise = require("promise");
var express = require("express");
var app = express();
var url = "mongodb://localhost:27017/test";

function connect(url) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, function (err, db) {
      if (err) {
        console.error("mongo connection error: ", err.message);
        reject(err);
      } else {
        console.info("connected to mongodb");
        resolve(db);
      }
    });
  });
}

// eslint-disable-next-line no-unused-vars
connect(url).then(
  function (db) {
    app.get("/", function (req, res) {
      // do something with db
      res.send("Node.js and MongoDB up and running");
    });

    app.listen(3000, function () {
      console.log("Server started on port 3000!");
    });
  },
  function (err) {
    console.error(err);
  }
);
