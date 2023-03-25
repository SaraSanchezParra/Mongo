const mongoose = require("mongoose");
const subjectsSchema = require("./subjectsSchema");

const marksSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  subject: subjectsSchema
});


module.exports = mongoose.model('Marks', marksSchema);