const Game = require("../data/games.model");

module.exports.gamesGetAll = function (req, res) {
  console.log("Get all games");

  if(req.query && req.query.lat && req.query.lng){
    runGeoQuery(req, res);
    return;
  }
  let count = 5;
  let offset = 0;

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  Game.find().skip(offset).limit(count).exec(function(err, games){
    console.log("Found games", games.length);
    res.status(200).json(games);
  });

};

module.exports.addOne = function (req, res) {
  console.log("Body", req.body);
  res.status(201).send(req.body);
};

module.exports.gamesGetGameById = function (req, res) {  
  const gameId = req.params.gameId;
  Game.findById(gameId).exec(function(err, game){
    console.log("Found game", game["title"]);
    res.status(200).json(game);
  });
};
