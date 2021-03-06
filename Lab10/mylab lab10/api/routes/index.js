const express = require("express");
const controllerJobs = require("../controllers/jobs.controller");
const controllerLocations = require("../controllers/location.controller");

const router = express.Router();

router
  .route("/jobs")
  .get(controllerJobs.jobGetAll)
  .post(controllerJobs.jobsAddOne);

router
  .route("/jobs/:jobId")
  .get(controllerJobs.jobsGetOne)
  .put(controllerJobs.jobsFullUpdateOne)
  .patch(controllerJobs.jobsPartialUpdateOne)
  .delete(controllerJobs.jobsDeleteOne);

router.route("/jobs/:jobId/locations").post(controllerLocations.locationAddOne);


module.exports = router;
