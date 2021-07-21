const express = require("express");

//require("dotenv").config();

const app = express();

//app.set("port",process.env.PORT);
app.set("port",5353);


const server = app.listen(app.get("port"), function () {
    console.log("Listening to port ", server.address().port);
});




