const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age:{
      type: Number  
    },
    grade:{
    grade: Number
    }
});

module.exports = Student = mongoose.model("student", studentSchema);
