const {Schema, model} = require("mongoose");


const photosSchema = new Schema({
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

module.exports = model('Photos', photosSchema, "photos");//para que me lo cree en la base de datos
