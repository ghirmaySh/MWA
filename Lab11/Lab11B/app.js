let express = require("express");
require("dotenv").config();
require("./api/data/db.js");

let path = require("path");
let app = express();
let routes = require("./api/route");

app.use(express.json({extended:false}));

app.use(express.static(path.join(__dirname,"public")));
app.use(("/node_modules", express.static(path.join(__dirname, "node_modules"))));

app.use("/api", routes);
const server = app.listen(process.env.PORT,function(){
    console.log("Listening to port "+server.address().port);
});

