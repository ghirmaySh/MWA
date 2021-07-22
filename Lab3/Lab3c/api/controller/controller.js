const dbConection = require("../data/dbconnection");
const ObjectId= require("mongodb").ObjectId;

module.exports.getAllgames= function(req ,res){
   
    let offset = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,7);
    }
    if(req.query && req.query.count){
        count = parseInt(req.query.count,7);
    }
    const db = dbConection.get();
    const collection = db.collection("games");

    collection.find().skip(offset).limit(count).toArray(function(err,dbConection){
        console.log("Games are displayed",dbConection);
        res.status(200).json(dbConection);
    })
}