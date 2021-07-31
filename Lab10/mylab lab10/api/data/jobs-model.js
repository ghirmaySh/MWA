var mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  address: String,
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

const jobSeachingSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  salary: Number,
  description: String,
  experience: String,
  postDate: String,
  skills: [String],
  location: locationSchema,
});

mongoose.model("Job", jobSeachingSchema, "jobSearch");
