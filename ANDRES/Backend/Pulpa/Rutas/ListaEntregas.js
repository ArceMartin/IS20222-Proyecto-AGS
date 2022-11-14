const express=require("express");
const router=express.Router();
const ListaEntregas=require("../Controlador/ListaEntregas");
//Llamadas de las rutas correspondientes

router.get("/:Grupo/:Actividad",ListaEntregas.mostrarEntregas);

//Exportacion de metodos
module.exports=router;