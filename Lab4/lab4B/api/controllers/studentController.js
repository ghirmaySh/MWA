

const Student = require("../data/studentModel");
module.exports.studentsGetAll = function (req, res) {
  console.log("Here are the students");
  // let count = 4;
  // let offset = 0;

  // if (req.query && req.query.count) {
  //   count = parseInt(req.query.count, 10);
  // }
  // if (req.query && req.query.offset) {
  //   offset = parseInt(req.query.offset, 10);
  // }

  //We are Using mongoose here
  Student.find().exec(function (err, students) {
    console.log("students are Found ", students);
    res.status(200).json(students);
  });

};
module.exports.addOne = function (req, res) {

  res.status(201).send(req.body);
};

module.exports.getStudentsById = function (req, res) {
  const studentId = req.params.studentId;
  Student.findById(studentId).exec(function (err, student) {
    res.status(200).json(student);
  });
};
