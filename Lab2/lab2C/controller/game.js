const gamesData = require("../data/games.json")

module.exports.getAllGames = function(req,res){
   console.log("Json request recieved");
        res.status(200).json(gamesData);
    

}