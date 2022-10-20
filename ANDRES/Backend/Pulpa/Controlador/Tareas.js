let Tareas = ["Tarea 1","Tarea 2","Tarea 3"];

async function mostrarTareas(req, res){
    res.send(Tareas);
}
module.exports={mostrarTareas}