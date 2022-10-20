//Importación de metodos 
const express = require("express");
const app = express();
const fs=require("fs");
const https=require("https");
process.env.port=3001;
const Alumnos=require("./Rutas/Alumnos");
const Cursos=require("./Rutas/Cursos");
const Tareas=require("./Rutas/Tareas");
app.use(express.json());
const cors=require('cors');
app.use(cors());
app.use(express.json());

//Declaracion de certificado
const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales = {
 key: llavePrivada,
 cert: certificado,
 passphrase: "contraseña" //passwd de la llave privada usado en la creación del certificado
};

const httpsServer = https.createServer(credenciales, app);

//Mensaje principal del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido al servicio web");
});

//Llamada de rutas

app.use("/Alumnos", Alumnos);

app.use("/Cursos", Cursos);

app.use("/Tareas", Tareas);


httpsServer.listen(process.env.port, () => {
    console.log('Servidor https escuchando por el puerto:', process.env.port);
   }).on('error', err => {
    console.log('Error al inciar el servidor:', err);
   });
/*
app.listen(puerto, () => {
    console.log("Todo bien en el puerto ", puerto);
}).on("error", (error) => {
    console.log("Error ", error);
});*/