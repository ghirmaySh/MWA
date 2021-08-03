
const { json } = require("express");
var mongoose = require("mongoose");
var Tenis = mongoose.model("player");

module.exports.playerGetAll = function (req, res) {

    const maxCount = 10;
    let offset = 0;
    let count = 9;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 9);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    if (count > maxCount) {
 
        res.status(404).json({ "message": "the query string count can not exceed " + maxCount });
    }
  
    if (isNaN(offset) || isNaN(count)) {
        res.status(404).json({ "message": "the query string offset and count should be a number" });
    }

    Tenis.find().skip(offset).limit(count).exec(function (err, player) {
        console.log("getting all...");
        if (err) {
            console.log("error finding player");
            res.status(500).json(err);
        }
        else {
            console.log("Found player", player.length);
            res.status(200).json(player);
        }
    });
};

module.exports.searchplayer=function(req,res){
    var country = req.params.country;
    Tenis.find({"country":country}).exec(function (err, player) {
        console.log("getting all...");
        if (err) {
            console.log("error finding player");
            res.status(500).json(err);
        }
        else {
            console.log("Found player", player.length);
            res.status(200).json(player);
        }
    });

}


module.exports.playerAddOne = function (req, res) {

    if (req.body.name && req.body.age && req.body.country && req.body.rank) {

    
        Tenis.create({
            name:req.body.name,
            age: parseInt(req.body.age),
            country: req.body.country,
            rank: req.body.rank,
            netWorth: req.body.netWorth,
            // bornCountry: req.body.bornCountry
        }, (err, player) => {
            if (err) {
                console.log("Error creating player");
                res.status(400).json(err);
            } else {
                console.log("player created", player);
                res.status(201).json(player);
            }
        });
    }
    else {

        res.status(404).json({ "message": "you have to fill the fields" });
    }
}

module.exports.playerGetOne = function (req, res) {

    var playerId = req.params.playerId;

    Tenis.findById(playerId).exec(function (err, player) {

        console.log("player first section");
        var response = {
            status: 200,
            message: player
        }
        if (err) {//error checking

            console.log("error section");
            response.status = 500;
            response.message = err;


        } else if (!player) {//result checking
            
            response.status = 404;
            response.message = { "message": "player Id no found" };
        }
        res.status(response.status).json(response.message);

    });
}



module.exports.playerUpdateOne = function (req, res) {

    const playerId = req.params.playerId;

    Tenis.findById(playerId).exec(function (err, player) {

        const response = { status: 204 };
        if (err) {
            console.log("Error finding player");
            response.status = 500;
            response.message = err;
        } else if (!player) {
            response.status = 404;
            response.message = { "message": "player ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            player.name=req.body.name;
            player.age=req.body.age;
            player.country = req.body.country;
            player.rank = req.body.rank;
            player.netWorth = req.body.netWorth;

            player.save(function (err, updatedplayer) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(response.message);
            });
        }
    });
};

module.exports.playerDeleteOne = function (req, res) {

    var playerId = req.params.playerId;
    console.log("DELETE player ", playerId);

    Tenis.findByIdAndRemove(playerId).exec(function (err, player) {
        var response = { 
            status: 204
         };

        if (err) {

            console.log("Error finding player");
            response.status = 500;
            response.message = err;
        } else if (!player) {

            response.status = 404;

            response.message = { "message": "player ID not found" };
        }

        res.status(response.status).json(response.message);
    });
};





