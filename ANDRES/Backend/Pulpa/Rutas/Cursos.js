const express=require("express");
const router=express.Router();
const Cursos=require("../Controlador/Cursos");
//Llamadas de las rutas correspondientes

router.get("/",Cursos.mostrarCursos);

//Exportacion de metodos
module.exports=router;