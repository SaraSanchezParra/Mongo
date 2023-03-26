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


let usuarios = [
    { 
        usuario: "Juan",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Juan_Darth%C3%A9s_.png",
        titulo: "Sonriendo",
        descripcion: "Foto de perfil"
    },
    { 
        usuario: "María",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Maria_Perez.jpg",
        titulo: "En la playa",
        descripcion: "Vacaciones de verano"
    },
    { 
        usuario: "Pedro",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Pedro_Rodriguez.jpg",
        titulo: "Con mi mascota",
        descripcion: "Mi perro favorito"
    }
];

Photos.insertMany(usuarios)
.then(function(docs) {
    console.log("Usuarios insertados:", docs.length);
})
.catch(function(err) {
    console.error(err);
});


// • Obtener fotos:
// Dado un usuario obtener todas sus fotos.

// const findPhotos = () => {
//     return Photos.find({ usuario: "Juan" }).exec();
//   };
  
//   findPhotos()
//     .then((photos) => {
//       console.log(photos);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  

//Modificar fotos:
//Dado el titulo de una foto y una descripción modificar su descripción.



// const nuevaDescripcion = 'Nueva descripción de la foto';

// Photos.updateOne({ titulo: 'Sonriendo' }, { descripcion: nuevaDescripcion })
//   .then(result => {
//     console.log(`Se ha modificado la descripción de la foto con título '${titulo}'`);
//   })
//   .catch(error => {
//     console.error('Error al modificar la descripción de la foto:', error);
//   });


//Borrar una foto

// Photos.deleteOne({ usuario: 'Juan', titulo: 'Sonriendo' })
//   .then(function(result) {
//     console.log('Foto eliminada:', result);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

//Borrar todas

//   Photos.deleteMany({ usuario: 'Juan' })
//   .then(function(result) {
//     console.log('Fotos eliminadas:', result);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });