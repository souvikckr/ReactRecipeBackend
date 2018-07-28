const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/db");

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect( db.url, (err, database) => {
    if (err) return console.log(err);
    // db = database.db("souvik_recipe");
    require("./app/routes")(app, database.db("recipe"));
    app.listen(port, () => {
      console.log("backend running on port" + port);
    });
  }
);
