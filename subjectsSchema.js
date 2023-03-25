const mongoose = require("mongoose");
const teachersSchema = require("./teachersSchema");

const subjectsSchema = new mongoose.Schema({
  title: String,
  teachers: [teachersSchema]
});



module.exports = mongoose.model('Subjects', subjectsSchema);