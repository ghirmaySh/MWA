const express = require("express");
require("dotenv").config();
const path = require("path");
require("./api/data/db");
const router = require("./api/routes");

const app = express();

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use("/api", router);

const server = app.listen(process.env.PORT, function () {
  console.log("Listening to port ", server.address().port);
});
