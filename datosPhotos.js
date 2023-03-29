// • Subida de fotos:
// Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.

// • Modificar fotos:
// Dado el titulo de una foto y una descripción modificar su descripción.
// • Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto.
// • Eliminar todas las Fotos:
// Dado un usuario eliminar todas sus fotos.


let mongoose = require ("mongoose");
let Photos = require ("./photosSquema");


mongoose.connect('mongodb+srv://saravsanchezparra:SaraSanchez@sarasanchez.db6gdbx.mongodb.net/Photos', {useNewUrlParser: false, useUnifiedTopology: false})


// let usuarios = [
//     { 
//         usuario: "Juan",
//         url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Juan_Darth%C3%A9s_.png",
//         titulo: "Sonriendo",
//         descripcion: "Foto de perfil"
//     },
//     { 
//         usuario: "María",
//         url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Maria_Perez.jpg",
//         titulo: "En la playa",
//         descripcion: "Vacaciones de verano"
//     },
//     { 
//         usuario: "Pedro",
//         url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Pedro_Rodriguez.jpg",
//         titulo: "Con mi mascota",
//         descripcion: "Mi perro favorito"
//     }
// ];

// Photos.insertMany(usuarios)
// .then(function(docs) {
//     console.log("Usuarios insertados:", docs.length);
// })
// .catch(function(err) {
//     console.error(err);
// });

//Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.

// function guardarFotoEnColeccion(usuario, url, titulo, descripcion) {
//     const nuevaFoto = new Photos({
//       usuario: usuario,
//       url: url,
//       titulo: titulo,
//       descripcion: descripcion
//     });
  
//     return nuevaFoto.save()
//       .then(function(resultado) {
//         console.log(`Se ha guardado la foto con el ID: ${resultado._id}`);
//         return resultado._id;
//       })
//       .catch(function(error) {
//         console.error(`Error al guardar la foto: ${error}`);
//         throw error;
//       });
//   }
  
// guardarFotoEnColeccion('Estefanía', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Belén_Darth%C3%A9s_…', 'En Codenotch', 'Con el portátil')

  

// • Obtener fotos:
// Dado un usuario obtener todas sus fotos.

// function obtenerFotosDeUsuario(usuario) {
//     return Photos.find({ usuario: usuario })
//       .then(function(fotos) {
//         console.log(`Se han encontrado ${fotos.length} fotos para el usuario ${usuario}`);
//         return fotos;
//       })
//       .catch(function(error) {
//         console.error(error);
//         throw error;
//       });
//   }
// obtenerFotosDeUsuario('Belén')

//Modificar fotos:
//Dado el titulo de una foto y una descripción modificar su descripción.


// function modificarDescripcion(tituloActual, nuevaDescripcion){

// Photos.updateOne({titulo: tituloActual}, {descripcion: nuevaDescripcion})
//   .then(result => {
//     console.log(`Se ha modificado la descripción de la foto con título '${tituloActual}'`);
//   })
//   .catch(error => {
//     console.error('Error al modificar la descripción de la foto:', error);
//   })
// }
//  modificarDescripcion("Sonriendo", "Me he ido a Asturias")

//Borrar una foto

function borrarFoto(descripcion) {
     return Photos.deleteOne()
      .then(function(result) {
        console.log('Foto eliminada:', result);
      })
      .catch(function(err) {
        console.error(err);
      })
}

borrarFoto('sonriendo')

//Borrar todas

//   Photos.deleteMany({ usuario: 'Juan' })
//   .then(function(result) {
//     console.log('Fotos eliminadas:', result);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });