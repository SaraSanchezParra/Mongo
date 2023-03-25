let mongoose = require ("mongoose");
let Students = require ("./studentsSchema.js");
let Marks = require ("./marksSchema.js");
let Subjects = require ("./subjectsSchema.js");
let Teachers = require ("./teachersSchema.js");



mongoose.connect('mongodb+srv://saravsanchezparra:SaraSanchez@sarasanchez.db6gdbx.mongodb.net/Colegio', {useNewUrlParser: false, useUnifiedTopology: false})

//NUEVOS STUDENTS

    let student1 = new Students({ firstName: "Juan", lastName: "García" })
    let student2 = new Students({ firstName: "María", lastName: "Pérez" })
    let student3 = new Students({ firstName: "Pedro", lastName: "Sánchez" })
    let student4 = new Students({ firstName: "Ana", lastName: "López" })

//NUEVAS MARKS

    let mark1 = new Marks({ date: "2022-12-01", mark: 7, subjects: subject1 })
    let mark2 = new Marks({ date: "2022-11-15", mark: 8, subjects: subject2 })
    let mark3 = new Marks({ date: "2022-10-30", mark: 6, subjects: subject3 })
    let mark4 = new Marks({ date: "2022-10-15", mark: 9, subjects: subject4 })
  
//NUEVOS TEACHERS

let teacher1 =  new Teachers({
    firstName: "Ángeles",
    lastName: "Díaz",
    groups: ["a"]
  })
  let teacher2 = new Teachers({
    firstName: "Juan",
    lastName: "Gómez",
    groups: ["b"]
  })
  let teacher3 = new Teachers({
    firstName: "María",
    lastName: "López",
    groups: ["c"]
  })
  let teacher4 = new Teachers({
    firstName: "Pedro",
    lastName: "Martínez",
    groups: ["d"]
  })

//NUEVOS SUBJECTS

let teachersModel = mongoose.model("teachersArbol", teachersSchema);

let subject1 = new Subjects({ title: "Matemáticas", teachers: [teacher1] })
let subject2 = new Subjects({ title: "Historia", teachers: [teacher2] })
let subject3 = new Subjects({ title: "Ciencias", teachers: [teacher3] })
let subject4 = new Subjects({ title: "Inglés", teachers: [teacher4] })

//INSERTAR OBJETOS NUEVOS

Subjects.insertMany([subject1, subject2, subject3, subject4])
  .then(function(docs) {
    console.log("Documentos insertados:", docs.length);
  })
  .catch(function(err) {
    console.error(err);
  });

Teachers.insertMany([teacher1, teacher2, teacher3, teacher4])
  .then(function(docs) {
    console.log("Teachers insertados:", docs.length);
  })
  .catch(function(err) {
    console.error(err);
  });

  Marks.insertMany([mark1, mark2, mark3, mark4])
    .then((docs) => {
      console.log(`Se han insertado ${docs.length} docs`);
    })
    .catch((err) => {
      console.error(err);
    });

    Students.insertMany([student1, student2, student3, student4])
    .then(function(docs) {
      console.log("Estudiantes insertados:", docs.length);
    })
    .catch(function(err) {
      console.error(err);
    });

//Mostrar por consola todas las notas de un alumno



// Todos las asignaturas de un alumno.


// Todos los profesores de un alumno.

