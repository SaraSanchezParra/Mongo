
const mongoose = require("mongoose");


const photosSchema = new mongoose.Schema({
  usuario: {
    type: String,
  },
  url: {
    type: String,
  },
  titulo: {
    type: String,
  },
  descripcion: {
    type: String,
  }
});

module.exports = mongoose.model('Photos', photosSchema);//para que me lo cree en la base de datos
