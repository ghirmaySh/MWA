const express = require("express");
const path = require("path");
const router = require("./api/routes");
require("dotenv").config();
require("./api/data/db");
const app = express();

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(process.env.PUBLIC_FOLDER))

app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use("/api",router);
const server = app.listen(process.env.PORT, function(){
    console.log("Listening to port",server.address().port);
});