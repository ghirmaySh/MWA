const mongoose = require("mongoose");
mongoose.set("debug", true);

const Players = mongoose.model("players");

module.exports.getAllPlayers = function (req, res) {
  console.log("JSON request received");
  let offset = 0;
  let count = 6;
  const maxCount = 10;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }

  
  if (isNaN(offset) || isNaN(count)) {
    res.status(400).json({ message: "Query offset or count is not a number" });
    return;
  }

  if (count > maxCount) {
    count = maxCount;
    res.status(400).json({ message: "cannot exceed count of " + maxCount });
  }

  console.log("offset ", offset, " count ", count);

  Players.find() .skip(offset) .limit(count) .exec(function (err, players) {
      if (err) {
        console.log("Error finding players", err);
        res.status(500).json(err);
      } else {
        console.log("Players Found ", players);
        res.status(200).json(players);
      }
    });
};

module.exports.getOnePlayer = function (req, res) {
  console.log("GetOne request received");
  const playerId = req.params.playerId;
  Players.findById(playerId).exec(function (err, player) {
    const response = {
      status: 200,
      message: player,
    };
    if (err) {
      console.log("Error finding player");
      response.status = 500;
      response.message = err;
    } else if (!player) {
      response.status = 400;
      response.message = { message: "player not found" };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.AddOnePlayer = function (req, res) {
  console.log("POST new player");
  console.log(req.body);
  const newPlayer = {
    name: req.body.name,
    country: req.body.country,
    age : parseInt(req.body.age),
    rank: req.body.rank,
    netWorth: req.body.netWorth,
     trophy: [],
  };

  Players.create(newPlayer, function (err, player) {
    const response = {
      status: 200,
      message: player,
    }
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.playersFullUpdate = function (req, res) {
  console.log("FullUpdate request received");
  const playerId= req.params.playerId;

  Players.findById(playerId).exec(function (err, player) {
    const response = {
      status: 204, 
      message: player,
    };
    if (err) {
      console.log("Error finding player");
      response.status = 500;
      response.message = err;
    } else if (!player) {
      response.status = 400;
      response.message = { message: "player ID not found" };
    }
   
     else {
        player.name = req.body.name,
        player.country = req.body.country,
        player.age = paseInt(req.body.age),
        player.rank = req.body.rank,
        player.netWorth = req.body.netWorth,
        player.squadList = [];

      player.save(function (err, updatedPlayer) {
        if (err) {
          response.status = 500;
          response.message = err;
        } else {
          response.message = updatedPlayer;
        }
        res.status(response.status).json(response.message);
      });
    }
  });
};

module.exports.playersPartialUpdate = function (req, res) {
  console.log("partialUpdate request received");
  const playersId = req.params.playersId;

  Players.findById(playersId).exec(function (err, player) {
    const response = {
      status: 204, 
      message: player,
    };
    if (err) {
      console.log("Error finding player");
      response.status = 500;
      response.message = err;
    } else if (!player) {
      response.status = 400;
      response.message = { message: "player ID not found" };
    }
    if (response.status !== 204) {
      res.status(response.status).json(response.message);
    } else {

      if (req.body.name) {
        player.name = req.body.name;
      }
      if (req.body.country) {
        player.country = req.body.country;
      }
      if (req.body.age) {
        player.age = req.body.age;
      }
      if (req.body.rank) {
        player.rank = req.body.rank;
      }
      if (req.body.netWorth) {
        player.netWorth = req.body.netWorth;
     
      }
      if (req.body.trophy) {
        player.trophy = [];
      }

      Players.save(function (err, updatedPlayer) {
        if (err) {
          response.status = 500;
          response.message = err;
        } else {
          response.message = updatedPlayer;
        }
        res.status(response.status).json(response.message);
      });
    }
  });
};

module.exports.deletePlayer = function (req, res) {
  console.log("DeleteOne request received");
  const playerId = req.params.playerId;
  Players.findByIdAndDelete(playerId).exec(function (err, deletePlayer) {
    const response = {
      status: 204,
      message: deletePlayer,
    };
    if (err) {
      console.log("Error finding player");
      response.status = 500;
      response.message = err;
    } else if (!deletePlayer) {
      response.status = 404;
      response.message = { message: "player ID not found" };
    }
    res.status(response.status).json(response.message);
  });
};
