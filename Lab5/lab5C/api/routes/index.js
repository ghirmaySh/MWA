const express = require("express");
const controllersGames = require("../controllers/games.controller");

const controllersPublisher = require("../controllers/publisher.controller");
const reviewController = require("../controllers/reviewController")
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

  router.route("/games/:gameId/review").
  get(reviewController.getOneReview).
  post(reviewController.reviewAddOne)
  

module.exports = router;
