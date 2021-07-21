const express = require("express");
const router = require("./routes/game");
const app = express();
app.set("port",4000);
const games = require("./routes/game")



app.use("/",router)

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
