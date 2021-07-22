const MongoClient = require("mongodb").MongoClient;
const dbName = "meanGamesDB";
const dburl = "mongodb://localhost:27017/" + dbName;
let _connection = null;
const open = function(){
    MongoClient.connect(dburl,{ useUnifiedTopology: true }, function(err,client){
        if(err){
            console.log("Database connection failed");
            return;
        }
        _connection = client.db(dbName);
        console.log("my database connection is open ",_connection);
    });
};
const get = function(){
    return _connection;
};
module.exports ={
    open: open,
    get: get,
};