const Game = require("../data/games.model");
module.exports.publisherGetOne = function(req, res){
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function(err, game){
        const publisher = game.publisher;
        res.status(200).json(publisher);
      });
}
module.exports.addOnePublisher= function(req,res){
   console.log("Adding new publisher");
   console.log(req.body);
   const gameId = req.params.gameId;
   Game.findById(gameId).exec(function(err,game){
     const response = {
       status : 200,
       message : game,
     };
     if(err){
       console.log("Error creating game");
       response.status = 500;
       response.message = err;
     }
     if(game){
       console.log("Game is ", game);
       _addpublisher(req,res,game);
     
   }else{ 
   res.status(200).json("message: publisher is updated")
}
   }
   )};