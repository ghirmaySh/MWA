const { ReplSet } = require("mongodb");
const mongoose = require("mongoose");
const Job = mongoose.model("Job");

const _addLocation = function (req, res, job) {
  console.log("inside _addLocation");
  console.log(req.body.address);
  console.log(req.body.lng);
  console.log(req.body.lat);
  job.location.address = req.body.address;
  console.log(job.location.coordinates);

  job.save(function (err, job) {
    console.log("upadated job ", job); 
    const response = {
      status: 200,
      message: job,
    };
    if (err) {
      console.log("Error saving location");
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.locationAddOne = function (req, res) {
  console.log("POST new Location");
  console.log(req.body);
  const jobId = req.params.jobId;
  Job.findById(jobId).exec(function (err, job) {
    const response = {
      status: 200,
      message: job,
    };
    if (err) {
      console.log("Error creating job");
      response.status = 500;
      response.message = err;
    } else if (!job) {
      console.log("Error creating location");
      response.status = 404;
      response.message = { message: "Job id not found" };
    }
    if (job) {
      console.log("Job is ", job);
      _addLocation(req, res, job);
    } else {
      res.status(response.status).json(response.message);
    }
  });
};

