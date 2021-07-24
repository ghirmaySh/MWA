const express = require("express");
const controllersGames = require("../controllers/games.controller");
const controllersPublisher = require("../controllers/publisher.controller");
const router = express.Router();

router
  .route("/games")
  .get(controllersGames.gamesGetAll)
  .post(controllersGames.addOne);

router
  .route("/games/:gameId")
  .get(controllersGames.gamesGetGameById);

router
  .route("/games/:gameId/publisher")
  .get(controllersPublisher.publisherGetOne)
  .post(controllersPublisher.addOnePublisher);
  

module.exports = router;
