// • Subida de fotos:
// Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.
// • Obtener fotos:
// Dado un usuario obtener todas sus fotos.
// • Modificar fotos:
// Dado el titulo de una foto y una descripción modificar su descripción.
// • Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto.
// • Eliminar todas las Fotos:
// Dado un usuario eliminar todas sus fotos.

let mongoose = require ("mongoose");
let Photos = require ("./photosSquema");


mongoose.connect('mongodb+srv://saravsanchezparra:SaraSanchez@sarasanchez.db6gdbx.mongodb.net/Photos', {useNewUrlParser: false, useUnifiedTopology: false})

