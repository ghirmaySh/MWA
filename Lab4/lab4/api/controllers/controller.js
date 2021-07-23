 const Game = require("../data/model");
module.exports.gamesGetAll = function (req, res) {
  console.log("Here are the games");
  let count = 5;
  let offset = 0;
 
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  //We are Using mongoose here
  Game.find().skip(offset).limit(count).exec(function(err, games){
    console.log("Games are Found ", games.length);
    res.status(200).json(games);
  });
  
};
 module.exports.addOne = function (req, res) {

  res.status(201).send(req.body);
 };

module.exports.gamesGetGameById = function (req, res) {  
  const gameId = req.params.gameId;
  Game.findById(gameId).exec(function(err, game){
    res.status(200).json(game);
  });
};
