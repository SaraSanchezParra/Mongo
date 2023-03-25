const mongoose = require("mongoose");

const teachersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  groups: [String],
});

module.exports = mongoose.model('Teachers', teachersSchema);