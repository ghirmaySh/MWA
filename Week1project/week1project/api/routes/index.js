const express = require("express");
const controllerPlayers = require("../controllers/player.controller");
const trophyController = require("../controllers/trophy.controller");

const router = express.Router();

router
  .route("/players")
  .get(controllerPlayers.getAllPlayers)
   .post(controllerPlayers.AddOnePlayer);

 router
 .route("/players/:playerId")
  .get(controllerPlayers.getOnePlayer)
  .put(controllerPlayers.playersFullUpdate)
  .patch(controllerPlayers.playersPartialUpdate)
  .delete(controllerPlayers.deletePlayer);

   router
   .route("/players/:playerId/lastTrophy")
   .get(trophyController.getLastTrophy)

   router
   .route("/players/:playerId/lastTrophy/:lastTrophyId")
   .put(trophyController.addTrophy)
   .delete(trophyController.DeleteTrophy);


module.exports = router;
