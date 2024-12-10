//Credenciales
const express = require("express");

const{
    crearCredencial
} = require("./routes/crecenciales.js")

// Configurar
const app = express();
app.use(express.json());

//EDPOINTS PARA CREDENCIALES
app.post("/register", crearCredencial)

//ENDPOINTS PARA USUARIOS

//ENDPOINTS PARA LIBROS

//ENDPOINT DE PRUEBA
app.get("/", function (req,res) {
    console.log("Hello");
    res.send("Hola mundo");
})

//CONEXION
const port = process.env.PORT || 3001;
return app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });

module.exports = { app, startServer };