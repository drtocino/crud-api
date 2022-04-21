const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Persona")
.then(() => console.log("Mongoose funnciona"))
.catch((error) => console.log(error));
module.exports = mongoose;