const express=require("express");
const router=express.Router();
const Tareas=require("../Controlador/Tareas");
//Llamadas de las rutas correspondientes

router.get("/:Grupo",Tareas.mostrarTareas);



//Exportacion de metodos
module.exports=router;