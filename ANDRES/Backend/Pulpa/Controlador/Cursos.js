let Cursos = ["Algebra","Quimica","Español"];

async function mostrarCursos(req, res){
    res.send(Cursos);
}

module.exports={mostrarCursos}