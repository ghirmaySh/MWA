const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path")

require("./data/db"); 
app.use(express.json({extended:false}))

const routes = require("./routes/routes")

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/api",routes)
app.use(express.static(path.join(__dirname,process.env.PUBLIC_FOLDER )));
const server = app.listen(process.env.PORT,function(){
    console.log("Running on port ",server.address().port);
});
