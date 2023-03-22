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

  profileSchema.pre('save', function(next){
    console.log("Middleware de entrada");
    if (this.dateOfBirth < 2005-01-01){
      console.log("Tu edad es menor de 18 años.")
      next()
    }
    else
    console.log("Edad mayor de 18.")
  })
  
  module.exports = mongoose.model('Profile', profileSchema);
  