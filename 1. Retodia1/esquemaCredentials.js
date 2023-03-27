const mongoose = require("mongoose");

const credentialsSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  }
});


module.exports = mongoose.model('Credentials', credentialsSchema);//para que me lo cree en la base de datos