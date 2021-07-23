const express = require("express");
const controllerStudents = require("../controllers/studentController");
// const controllersPublisher = require("../controllers/publisher.controller");
const router = express.Router();

router
  .route("/students")
  .get(controllerStudents.studentsGetAll)
//.post(controllersGames.addOne);

router
  .route("/students/: getStudentId")
  .get(controllerStudents.studentsGetAll);

// router
//   .route("/games/:gameId/publisher")
//   .get(controllersPublisher.publisherGetOne);

module.exports = router;
