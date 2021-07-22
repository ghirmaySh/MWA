const express = require("express");
const gameController = require("../controller/controller.js");
const router = express.Router();

router.route("/games").get(gameController.getAllgames);
module.exports = router;