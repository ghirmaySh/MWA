const { ReplSet } = require("mongodb");
const mongoose = require("mongoose");
const Players = mongoose.model("players");

const _addLastTrophy = function (req, res, player) {
  console.log("inside lastTrophy");
  console.log(req.body);

  const trophy = {
    tournament: req.body.tournament,
    host: req.body.age,
    city: req.body.city
  };

  console.log("the new trophy is: ", trophy);

  Players.lastTrophy.push(trophy);

  Players.save(function (err, player) {
    console.log("upadated team ", player); 
    const response = {
      status: 200,
      message: player,
    };
    if (err) {
      console.log("Error saving player");
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.getLastTrophy = function (req, res) {
  console.log("GetOne lastTrophy request  recieved");
  const playerId = req.params.playerId;
  Players.findById(playerId)
    .select("lastTrophy")
    .exec(function (err, player) {
      res.status(200).json(player.lastTrophy);
    });
};



module.exports.DeleteTrophy = function (req, res) {
  console.log("Delete Trophy request received");
  const playerId = req.params.playerId;
  const trophyId = req.params.trophyID;
  Team.findById(playerId)
    .select("lastTrophy")
    .exec(function (err, player) {
      player.lastTrophy.pull(trophyId);

      team.save(function (err, player) {
        console.log("upadated team ", player); 
        const response = {
          status: 200,
          message: player,
        };
        if (err) {
          console.log("Error saving team");
          response.status = 500;
          response.message = err;
        }
        res.status(response.status).json(response.message);
      });
    });
};

module.exports.addTrophy = function (req, res) {
  console.log("POST new trophy");
  console.log(req.body);
  const playersId = req.params.playersId;
  Team.findById(playersId).exec(function (err, players) {
    const response = {
      status: 200,
      message: players,
    };
    if (err) {
      console.log("Error creating Trophy");
      response.status = 500;
      response.message = err;
    } else if (!players) {
      console.log("Error creating Trophy");
      response.status = 404;
      response.message = { message: "player id not found" };
    }
    if (player) {
      console.log("Player is ", player);
      _addLastTrophy(req, res, player);
    } else {
      res.status(response.status).json(response.message);
    }
  });
};
