const express = require("express");
const routes = require("./routes/routes")
require("dotenv").config();
const path = require("path")

require("./data/db"); 
const app = express();//always import before any routes
app.use(express.json({extended:false}))
// app.set(process.env.PORT);



app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/api",routes)
app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));
const server = app.listen(process.env.PORT,function(){
    console.log("Running on port ",server.address().port);
});
