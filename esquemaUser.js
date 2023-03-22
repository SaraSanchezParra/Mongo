const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: {
    type: String,

  },
  password: {
    type: String,
    require: true,
    validate: [
      function (password){
        return password.length >= 6;
      },
      'El password necesita tener 6 caracteres mínimo'],
      select: false //para que no se vea el password
  }
});


module.exports = mongoose.model('User', userSchema);



