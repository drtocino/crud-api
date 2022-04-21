const express = require("express");
const app = express()
const mongoose = require("./database/mongoose")

const Persona = mongoose.model("Persona");

app.get("/hola",(req,res) => {
    res.send(Persona.find({}));
    console.log("GET /hola")
})

app.listen(3001,() => {
    console.log("Escuchando en puerto 3001")
});