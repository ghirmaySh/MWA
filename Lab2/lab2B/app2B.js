const express = require("express");
const path = require("path");

const app = express();

//app.set("port",process.env.PORT)
app.set("port", 3000);

app.use(express.static(path.join(__dirname, "public")));

//const server = app.listen(process.env, function () 
const server = app.listen(app.get("port"), function () {
    console.log("Listening to port ", server.address().port);
});
