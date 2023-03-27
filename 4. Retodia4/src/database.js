let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://saravsanchezparra:SaraSanchez@sarasanchez.db6gdbx.mongodb.net/Photos', {useNewUrlParser: true, useUnifiedTopology: true})


.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) =>{
    console.log(error)
})