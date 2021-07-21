const express = require("express");
const game = require("../controller/game");
const router = express.Router();

router.route("/games").get(game.getAllGames)

module.exports = router;