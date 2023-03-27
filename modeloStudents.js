const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://saravsanchezparra:SaraSanchez@sarasanchez.db6gdbx.mongodb.net/estudiantesTronos', {useNewUrlParser: false, useUnifiedTopology: false});


//SCHEMAS

const TeacherSchema = new mongoose.Schema({

    teacher_first_name: String,
    teacher_last_name: String,
})

const MarksSchema = new mongoose.Schema({   
    
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers : [TeacherSchema]
})

let Teacher = mongoose.model("Teacher", TeacherSchema);
let Marks = mongoose.model("Marks", MarksSchema);





// //TEACHERS DATOS

//     let teacher1 = new Teacher({teacher_first_name: "Robb", teacher_last_name: "Stark"})
//     let teacher2 = new Teacher({teacher_first_name: "Petyr", teacher_last_name: "Baelish"})
//     let teacher3 = new Teacher({teacher_first_name: "Melisandre", teacher_last_name: "R'hllor"})
//     let teacher4 = new Teacher({teacher_first_name: "Maestro", teacher_last_name: "Aemon"})
//     let teacher5 = new Teacher({teacher_first_name: "Maestro", teacher_last_name: "Pycelle"})
//     let teacher6 = new Teacher({teacher_first_name: "Gilly", teacher_last_name: "None"})
//     let teacher7 = new Teacher({teacher_first_name: "Maestre", teacher_last_name: "Aemon"})
//     let teacher8 = new Teacher({teacher_first_name: "Tywin", teacher_last_name: "Lannister"})
//     let teacher9 = new Teacher({teacher_first_name: "Arya", teacher_last_name: "Stark"})
//     let teacher10 = new Teacher({teacher_first_name: "Tyrion", teacher_last_name: "Lannister"})

// // //MARKS DATOS

//     let marks1 = new Marks({date:("2020-06-12"), mark: 6, student_first_name: "Jon", student_last_name: "Snow", group_name: "Casa Stark", subject_name: "Arte de la Guerra", teachers: [teacher1, teacher2]})
//     let marks2 = new Marks({date:("2021-07-13"), mark: 8, student_first_name: "Samwell", student_last_name: "Tarly", group_name: "Casa Tarly", subject_name: "Heráldica", teachers: [teacher2]})
//     let marks3 = new Marks({date:("2022-08-14"), mark: 10, student_first_name: "Daenerys", student_last_name: "Targaryen", group_name: "Casa Targaryen", subject_name: "Magia y Dragones", teachers: [teacher3, teacher4]})
//     let marks4 = new Marks({date:("2019-09-15"), mark: 4, student_first_name: "Oberyn", student_last_name: "Martell", group_name: "Casa Martell", subject_name: "Lengua Alta Valyria", teachers: [teacher4]})
//     let marks5 = new Marks({date:("2018-10-16"), mark: 3, student_first_name: "Orenna", student_last_name: "Tyrell", group_name: "Casa Tyrell", subject_name: "Alquimia", teachers: [teacher5]})
//     let marks6 = new Marks({date:("2020-11-17"), mark: 5, student_first_name: "Viserys", student_last_name: "Targaryen", group_name: "Casa Targaryen", subject_name: "Supervivencia", teachers: [teacher6]})
//     let marks7 = new Marks({date:("2021-12-18"), mark: 8, student_first_name: "Renly", student_last_name: "Baratheon", group_name: "Casa Baratheon", subject_name: "Anatomía y Medicina", teachers: [teacher7, teacher8]})
//     let marks8 = new Marks({date:("2022-01-19"), mark: 9, student_first_name: "Davos", student_last_name: "Seaworth", group_name: "Casa Seaworth", subject_name: "Estrategia Militar", teachers: [teacher8, teacher10]})
//     let marks9 = new Marks({date:("2020-02-20"), mark: 6, student_first_name: "Olena", student_last_name: "Tyrell", group_name: "Casa Tyrell", subject_name: "Historia de Poniente", teachers: [teacher9]})
//     let marks10 = new Marks({date:("2019-03-21"), mark: 8, student_first_name: "Roose", student_last_name: "Bolton", group_name: "Casa Bolton", subject_name: "Anatomía y Medicina", teachers: [teacher10]})





//     //INSERTMANY TEACHERS

// Teacher.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10])
//   .then(function(docs) {
//     console.log("Teachers insertados:", docs.length);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });


// // INSERTMANY MARKS


//   Marks.insertMany([marks1, marks2, marks3, marks4, marks5, marks6, marks7, marks8, marks9, marks10])
//     .then((docs) => {
//       console.log(`Se han insertado ${docs.length} notas`);
//     })
//     .catch((err) => {
//       console.error(err);
//     });



//Calcular la nota media de los alumnos de una asignatura concreta.

// Marks.aggregate([
//     { $match: { subject_name: "Heráldica" } }, // filtramos las notas de la asignatura "Heráldica"
//     { $group: { _id: null, avgMark: { $avg: "$mark" } } } // calculamos la media de las notas
//   ])
//   .then(result => {
//     const avgMark = result[0].avgMark; //la función de agregación será una fila, por eso necesit ponerla a 0, para ir a la primera posición
//     console.log(`La nota media de Heráldica es: ${avgMark}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.

// Marks.aggregate([
//     { $group: { _id: null, count: { $sum: 1 } } }
//   ])
//   .then(result => {
//     console.log("Número total de alumnos: " + result[0].count); // Imprime el número de estudiantes
//   })
//   .catch(err => {
//     console.log(err);
//   });


//   • Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
// Marks.aggregate([
//     {
//         $group: {
//             _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             _id: 0, student_first_name: "$_id.student_first_name", student_last_name: "$_id.student_last_name",
//             count: 1  //hago que vaya contando cuántos hay
//         }
//     }
// ]).then((result) => {
//     console.log(result); 
// }).catch((err) => {
//     console.log(err);
// });


//   • Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
// Teacher.aggregate([
//     {
//         $group: {
//             _id: { teacher_first_name: "$teacher_first_name", teacher_last_name: "$teacher_last_name" },
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             teacher_first_name: "$_id.teacher_first_name", teacher_last_name: "$_id.teacher_last_name", count: 1
//         }
//     }
// ]).then((result) => {
//     console.log(result); // Imprime los nombres y apellidos de todos los profesores, incluyendo repetidos
// }).catch((err) => {
//     console.log(err);
// });


//   • Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.


// Marks.aggregate([
//     {
//       $group: {
//         _id: "$group_name", totalStudents: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { _id: -1 }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });
  
//   • Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.



// Marks.aggregate([
//     {
//       $group: {
//         _id: "$subject_name", avgGrade: { $avg: "$mark" }
//       }
//     },
//     {
//       $match: {
//         avgGrade: { $gt: 5 }
//       }
//     },
//     {
//       $sort: {
//         avgGrade: -1
//       }
//     },
//     {
//       $limit: 5
//     },
//     {
//       $project: {
//         _id: 0, subject: "$_id", avgGrade: 1
//       }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });
  
  

//   • Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.
// Marks.aggregate([
//     {
//       $unwind: "$teachers" // descomponemos el array de "teachers"
//     },
//     {
//       $group: {
//         _id: { subject_name: "$subject_name", teacher: { $concat: [ "$teachers.teacher_first_name", " ", "$teachers.teacher_last_name" ] } },
//         count: { $sum: 1 } // contamos la cantidad de documentos que se agrupan
//       }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });
// Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
// tenga fecha del año pasado o anterior.
// Marks.find({
//     $or: [
//       { mark: { $gt: 8 } },
//       { date: { $lt: new Date("2022-01-01") } }
//     ]
//   }, {
//     student_first_name: 1, student_last_name: 1, mark: 1, _id: 0
//   }).then((result) => {
//     console.log(result);
//   }).catch((err) => {
//     console.log(err);
//   });
  


// • Obtén la media de las notas que se han dado en el último año por asignatura.
// Marks.aggregate([
//     {
//       $match: {
//         date: { $gte: new Date("2022-01-01") }
//       }
//     },
//     {
//       $group: {
//         _id: "$subject_name", avgMark: { $avg: "$mark" } 
//       }
//     },
//     {
//       $project: {
//         _id: 0, subject_name: "$_id", avgMark: 1
//       }
//     }
//   ])
//   .then(result => {
//     console.log("Media de notas por asignatura en el último año:" );
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });
  
  

// • Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.
// Marks.aggregate([
//     {
//       $match: {
//         date: {
//             $gte: new Date("2022-01-01") // fecha del primer día del año pasado
//         }
//       }
//     },
//     {
//       $group: {
//         _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
//         avgMark: { $avg: "$mark" }
//       }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });
  
// • Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
// sea uno que elijáis.

Marks.aggregate([
    {
      $unwind: "$teachers" 
    },
    {
      $match: {
        "teachers.teacher_first_name": "Melisandre" 
      }
    },
    {
      $group: {
        _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" }, count: { $sum: 1 } 
      }
    }
  ]).then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  });
  