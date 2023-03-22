let mongoose = require ("mongoose");
let User = require ("./esquemaUser");
let Profile = require ("./esquemaProfile.js");
let Credentials = require ("./esquemaCredentials.js");

mongoose.connect('mongodb+srv://saravsanchezparra:SaraSanchez@sarasanchez.db6gdbx.mongodb.net/Codenotch', {useNewUrlParser: false, useUnifiedTopology: false})


let userDocument = new User({
    login: "juan@gmail.com",
    password: "12345678"
});


userDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})


let profileDocument = new Profile({
    name: "Juan",
    surname: "Rodriguez",
    dateOfBirth: "1989-04-12",
    comments: "Codenotch es muy interesante",
    rol: "estudiante"
});

profileDocument.save()
.then ((data)=>{
    console.log(data);

})
.catch((err)=>{
    console.log(err)
})



let credentialsDocument = new Credentials({
    address: "Calle Juan de Dios, 15",
    phone: 675432143,
    email: "juan@gmail.com"
});

credentialsDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})