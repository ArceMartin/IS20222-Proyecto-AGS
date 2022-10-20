


class Alumno {
    constructor(nombre) {
        this.nombre = nombre;
        
    }
}
let Alumnos=[new Alumno("Archivos en C"),new Alumno("Administracion de procesos"),new Alumno("Calendarización"),new Alumno("Oxido nitroso")]


async function mostrarTareas(req, res){
    res.send(Alumnos);
}
module.exports={mostrarTareas}