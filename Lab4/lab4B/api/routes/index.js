const express = require("express");
const controllerStudents = require("../controllers/studentController");
const controllerCourse = require("../controllers/courseController");


const router = express.Router();

router
  .route("/students")
  .get(controllerStudents.studentsGetAll)


router
  .route("/students/: getStudentId").get(controllerStudents.studentsGetAll);
  router.route("/students/:studentId/courses").get(controllerCourse.courseGetAll);
  router .route("/students/:studentId/courses/:courseCode")
  .get(controllerCourse.courseGetOne);


module.exports = router;



