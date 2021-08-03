let express = require("express");
let router = express.Router();
let controllerPlayer = require("../controller/playerController.js");
let controllerUsers = require("../controller/userController.js")

router.route("/player").get(controllerPlayer.playerGetAll).
post(controllerPlayer.playerAddOne);

router.route("/player/search").
get(controllerPlayer.searchplayer)

router.route("/player/:playerId").get(controllerPlayer.playerGetOne)
    .put(controllerPlayer.playerUpdateOne).delete(controllerPlayer.playerDeleteOne);

 router.route("/users/register")
 .post(controllerUsers.register)  
 
 router.route("/users/login")
 .post(controllerUsers.login);

module.exports = router;