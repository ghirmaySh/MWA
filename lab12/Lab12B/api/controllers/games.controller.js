 const mongoose = require("mongoose");
 const Game = mongoose.model("Game");


//   let offset = 0;
//   let count = 7;
//   const maxCount = 10;
//   if (req.query && req.query.offset) {
//     offset = parseInt(req.query.offset);
//   }
//   if (req.query && req.query.count) {
//     count = parseInt(req.query.count);
//   }
//   if (isNaN(offset) || isNaN(count)) {
//     res.status(400).json({ message: "Query offset or count is not a number" });
//     return;
//   }
//   if (count > maxCount) {
//     count = maxCount;
//     res.status(400).json({ message: "cannot exceed count of " + maxCount });
//   }
//   console.log("offset ", offset, " count ", count);

  module.exports.gamesGetAll = function (req, res) {
  let offset = 0;
  let count = 7;
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

  Game.find().skip(offset) .limit(count).exec().then((game) => {GameHandler(game, res)}).catch((err) => {ErrorHandler(res, err)});
  
  }


// module.exports.gamesGetOne = function (req, res) {
//   console.log("GetOne request received");
//   const gameId = req.params.gameId;
//   Game.findById(gameId).exec(function (err, game) {
//     const response = {
//       status: 200,
//       message: game,
//     };
//     if (err) {
//       console.log("Error finding game");
//       response.status = 500;
//       response.message = err;
//     } else if (!game) {
//       response.status = 400;
//       response.message = { message: "Game ID not found" };
//     }
//     res.status(response.status).json(response.message);
//   });
// };

function ErrorHandler(err, res){
  res.status(500).json("Error while finding game, Please try again." + err.message);
}
function GameHandler(game, res){
  const response = {
    status: 201,
    message: game,
  };
  if (!game) {
    response.status = 404;
    response.message = "Error while finding game, Please try again.";
  }
 
  res.status(response.status).json(response.message);
}
module.exports.gamesGetOne = function (req, res) {
  const gameId = req.params.gameId;
 
  Game.findById(gameId).exec().then((game) => {GameHandler(game, res)}).catch((err) => { ErrorHandler(res, err)});
   //Game.findById(gameId).exec().then(GameHandler.bind(null,res)).catch(ErrorHandler.bind(null,res));
 
};


// module.exports.gamesAddOne = function (req, res) {
//   console.log("POST new Game");
//   console.log(req.body);
//   const newGame = {
//     title: req.body.title,
//     price: parseFloat(req.body.price),
//     year: parseInt(req.body.year),
//     minPlayer: parseInt(req.body.minPlayer),
//     maxPlayer: parseInt(req.body.maxPlayer),
//     minAge: parseInt(req.body.minAge),
//     rate: parseInt(req.body.rate),
//     designers: req.body.designers,
//     publisher: {},
//   };
//   Game.create(newGame, function (err, game) {
//     const response = {
//       status: 200,
//       message: game,
//     };
//     if (err) {
//       console.log("Error creating game");
//       response.status = 500;
//       response.message = err;
//     }
//     res.status(response.status).json(response.message);
//   });
// };
function AddOneGameHandler(addgame, res){
  const response = {
    status: 201,
    message: addgame
  }
    const newGame = {
      title: req.body.title,
      price: parseFloat(req.body.price),
      year: parseInt(req.body.year),
      minPlayer: parseInt(req.body.minPlayer),
      maxPlayer: parseInt(req.body.maxPlayer),
      minAge: parseInt(req.body.minAge),
      rate: parseInt(req.body.rate),
      designers: req.body.designers,
      publisher: {},
    };
    res.status(response.status).json(response.message)
  }
    module.exports.gamesAddOne = function (req, res) {
    Game.create(newGame).then((addgame) => {AddOneGameHandler(addgame, res)}).catch((err) => {ErrorHandler(res, err)});
  
    }


// module.exports.gamesFullUpdateOne = function (req, res) {
//   console.log("FullUpdate request received");
//   const gameId = req.params.gameId;

//   if (gameId.length !== 24) {
//     res
//       .status(400)
//       .json({ message: "RequestParam gameId is not a parameter range " });
//   }

//   Game.findById(gameId).exec(function (err, game) {
//     const response = {
//       status: 204, // update
//       message: game,
//     };
//     if (err) {
//       console.log("Error finding game");
//       response.status = 500;
//       response.message = err;
//     } else if (!game) {
//       response.status = 400;
//       response.message = { message: "Game ID not found" };
//     }
//     if (response.status !== 204) {
//       res.status(response.status).json(response.message);
//     } else {
    
//       (game.title = req.body.title),
//         (game.price = parseFloat(req.body.price)),
//         (game.year = parseInt(req.body.year)),
//         (game.minPlayer = parseInt(req.body.minPlayer)),
//         (game.maxPlayer = parseInt(req.body.maxPlayer)),
//         (game.minAge = parseInt(req.body.minAge)),
//         (game.rate = parseInt(req.body.rate)),
//         (game.designers = req.body.designers),
//         (game.publisher = {});
//       game.save(function (err, updatedGame) {
//         if (err) {
//           response.status = 500;
//           response.message = err;
//         } else {
//           response.message = updatedGame;
//         }
//         res.status(response.status).json(response.message);
//       });
//     }
//   });
// };


function PartialUpdateGameHandler(updateGame, res){
  const response = {
    status: 204,
    message: updateGame,
  };
  if (!updateGame) {
    response.status = 404;
    response.message = "Error Deleting game.";

  } else if (response.status !== 204) {
    res.status(response.status).json(response.message);
  } else {
  
    if (req.body.title) {
      game.title = req.body.title;
    }
    if (req.body.price) {
      game.price = parseFloat(req.body.price);
    }
    if (req.body.year) {
      game.year = parseInt(req.body.year);
    }
    if (req.body.minPlayer) {
      game.minPlayer = parseInt(req.body.minPlayer);
    }
    if (req.body.maxPlaye) {
      game.maxPlayer = parseInt(req.body.maxPlayer);
    }
    if (req.body.mindAge) {
      game.minAge = parseInt(req.body.minAge);
    }
    if (req.body.rate) {
      game.rate = parseInt(req.body.rate);
    }
    if (req.body.designers) {
      game.designers = req.body.designers;
    }
    if (req.body.title) {
      game.publisher = {};
    }
    game.save(function (err, updatedGame) {
      if (err) {
        response.status = 500;
        response.message = err;
      } else {
        response.message = updatedGame;
      }
    });
    res.status(response.status).json(response.message);
  };
}
module.exports.gamesPartialUpdateOne = function (req, res) {
  const gameId = req.params.gameId;
  Game.findById(gameId).exec.then((deleteGame) => {PartialUpdateGameHandler(updateGame, res)}).catch((err) => {ErrorHandler(res, err)});
}

// module.exports.gamesPartialUpdateOne = function (req, res) {
//   console.log("partialUpdate request received");
//   const gameId = req.params.gameId;

//   Game.findById(gameId).exec(function (err, game) {
//     const response = {
//       status: 204, // update
//       message: game,
//     };
//     if (err) {
//       console.log("Error finding game");
//       response.status = 500;
//       response.message = err;
//     } else if (!game) {
//       response.status = 400;
//       response.message = { message: "Game ID not found" };
//     }
//     if (response.status !== 204) {
//       res.status(response.status).json(response.message);
//     } else {
    
//       if (req.body.title) {
//         game.title = req.body.title;
//       }
//       if (req.body.price) {
//         game.price = parseFloat(req.body.price);
//       }
//       if (req.body.year) {
//         game.year = parseInt(req.body.year);
//       }
//       if (req.body.minPlayer) {
//         game.minPlayer = parseInt(req.body.minPlayer);
//       }
//       if (req.body.maxPlaye) {
//         game.maxPlayer = parseInt(req.body.maxPlayer);
//       }
//       if (req.body.mindAge) {
//         game.minAge = parseInt(req.body.minAge);
//       }
//       if (req.body.rate) {
//         game.rate = parseInt(req.body.rate);
//       }
//       if (req.body.designers) {
//         game.designers = req.body.designers;
//       }
//       if (req.body.title) {
//         game.publisher = {};
//       }
//       game.save(function (err, updatedGame) {
//         if (err) {
//           response.status = 500;
//           response.message = err;
//         } else {
//           response.message = updatedGame;
//         }
//         res.status(response.status).json(response.message);
//       });
//     }
//   });
// };



// module.exports.gamesDeleteOne = function (req, res) {
//   console.log("DeleteOne request received");
//   const gameId = req.params.gameId;
//   Game.findByIdAndDelete(gameId).exec(function (err, deletedGame) {
//     const response = {
//       status: 204,
//       message: deletedGame,
//     };
//     if (err) {
//       console.log("Error finding game");
//       response.status = 500;
//       response.message = err;
//     } else if (!deletedGame) {
//       response.status = 404;
//       response.message = { message: "Game ID not found" };
//     }
//     res.status(response.status).json(response.message);
//   });
// };


function DeleteGameHandler(deleteGame, res){
  const response = {
    status: 201,
    message: deleteGame,
  };
  if (!game) {
    response.status = 404;
    response.message = "Error Deleting game.";
  }
 
  res.status(response.status).json(response.message);
}
module.exports.gamesDeleteOne = function (req, res) {
  const gameId = req.params.gameId;
 
  Game.findById(gameId).exec().then((deleteGame) => {DeleteGameHandler(deleteGame, res)}).catch((err) => {ErrorHandler(res, err)});
}
