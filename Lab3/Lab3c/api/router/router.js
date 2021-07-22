const express = require("express");
const gameController = require("../controller/controller");
const router = express.Router();

router.route("/games").get(gameController.getAllgames);
module.exports = router;