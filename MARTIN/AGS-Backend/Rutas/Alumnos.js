const express=require("express");
const router=express.Router();
const Alumnos=require("../Controlador/Alumnos");
//Llamadas de las rutas correspondientes

router.get("/",Alumnos.mostrarAlumnos);



//Exportacion de metodos
module.exports=router;