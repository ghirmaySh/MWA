const express = require("express");
const controllerStudents = require("../controllers/studentController");

const router = express.Router();

router
  .route("/students")
  .get(controllerStudents.studentsGetAll)
  .post(controllerStudents.addOne);

router
  .route("/students/: getStudentId")
  .get(controllerStudents.getStudentsById);



module.exports = router;
