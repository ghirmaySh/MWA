const dbConection = require("../data/dbconnection");
const { Collection }= require("mongodb");
const e = require("express");

module.exports.getAllgames= function(req ,res){
    const db = dbConection.get();
    const collection = db.collection("games");
   
    let offset = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10);
    }
    if(req.query && req.query.count){
        count = parseInt(req.query.count,10);
    }
    if(count > 7)
        count = 7;
        else
        count = 5;
    

    collection.find().skip(offset).limit(count).toArray(function(err,games){
        console.log("Games are displayed",games);
        res.status(200).json(games);
    })
}