 const Game = require("../data/model");
 module.exports.gamesGetAll = function (req, res) {
  console.log("Here are the games");
  let count = 4;
  let offset = 1;
 
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 8);
  }
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 8);
  }
  if(isNaN(offset) || isNaN(count)){
    res.status(400).json({message: "Query String and count have to return a number"})
    return;
  }
  Game.find().skip(offset).limit(count).exec(function(err, games){
    
    if(err){
      console.log("Error finding games");
      res.status(500).json(err);
    } else { 
    console.log("Games are Found ", games.length);
    res.status(200).json(games);
    }
  });
  
};
 module.exports.addOne = function (req, res) {

  res.status(201).send(req.body);
 };

module.exports.gamesGetGameById = function (req, res) {  
  const gameId = req.params.gameId;
  Game.findById(gameId).exec(function(err, game){
    if(err){
      console.log("Error finding a game");
      res.status(500).json(err);

    } else if (!game){
    res.status(404).json({message: "Game with this id not fond"})

    } else { 
    res.status(200).json(game);
    }
  });
};
