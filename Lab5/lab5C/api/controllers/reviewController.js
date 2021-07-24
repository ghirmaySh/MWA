const Game = require("../data/games.model");
const _addReview = function(req, res, game){
    console.log("inside _addReview")
    console.log(req.body.name);
    console.log(req.body.reviews);
    console.log(req.body.date);
    game.reviews.name = req.body.name;
    game.reviews.review = req.body.reviews;
    game.reviews.date = req.body.date;
    
    game.save(function(err, game){
        console.log("upadated game ", game); 
        const response = {
            status: 200,
            message: game
          };
          if (err) {
            console.log("Error saving review");
            response.status = 500;
            response.message = err;
          }
          res.status(response.status).json(response.message);
    })
};
module.exports.reviewAddOne = function (req, res) {
    console.log("POST new Review");
    console.log(req.body);
    const gameId = req.params.gameId;
    Game.findById(gameId).exec(function(err, game){
        const response = {
            status: 200,
            message: game,
          };
          if (err) {
            console.log("Error creating game");
            response.status = 500;
            response.message = err;
          } else if(!game){
              console.log("Error creating review");
              response.status = 404;
              response.message = {"message": "Game id not found"};
          }
          if(game){
              console.log("Game is ", game);
              _addReview(req, res, game);
          }else{
            res.status(response.status).json(response.message);
          }          
        }     
  )};
 

module.exports.getOneReview = function(req,res){
    const gameId = req.params.gameId;

    //Game.findById(gameId).select("reviews").exec()
    Game.findById(gameId).select("reviews").exec(function(err,game){
        const reviews = game.review;
        res.status(200).json(reviews);
    });

}