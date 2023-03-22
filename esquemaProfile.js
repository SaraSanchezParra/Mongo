const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: {
      type: String,
      enum : ["Juan", "Maria", "Belen", "Cristina", "Lorena"]
    },
    surname: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    comments: {
      type: String,
    },
    rol: {
      type: String,
    }
  });


  
  module.exports = mongoose.model('Profile', profileSchema);
  