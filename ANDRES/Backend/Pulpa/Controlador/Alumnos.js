

class Alumno {
    constructor(nombre,calificacion) {
        this.nombre = nombre;
        this.calificacion=calificacion;
    }
}
let Alumnos=[new Alumno("Panfilo filomeno",55),new Alumno("Madas Ledesma",89),new Alumno("Juan Camaney",100),new Alumno("Oxiono",63)]

async function mostrarAlumnos(req, res){
    res.send(Alumnos);
}
module.exports={mostrarAlumnos}