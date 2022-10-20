
class Curso {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
let Cursos=[new Curso("Algebra"),new Curso("Calculo diferencial"),new Curso("Quimica"),new Curso("Español")]

async function mostrarCursos(req, res){
    res.send(Cursos);
}

module.exports={mostrarCursos}