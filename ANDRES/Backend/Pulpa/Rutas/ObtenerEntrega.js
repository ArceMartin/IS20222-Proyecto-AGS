const express=require("express");
const router=express.Router();
const ObtenerEntrega=require("../Controlador/ObtenerEntrega");
//Llamadas de las rutas correspondientes

router.get("/",ObtenerEntrega.obtenerEntrega);

//Exportacion de metodos
module.exports=router;