const mongoose = require("mongoose");
const marksSchema = require("./marksSchema");


const studentsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  marks: [marksSchema]
});

module.exports = mongoose.model('Students', studentsSchema);