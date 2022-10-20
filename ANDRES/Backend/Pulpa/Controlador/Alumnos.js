let Alumnos = ["Panfilo filomeno","Madas Ledesma","Juan Camaney"];

async function mostrarAlumnos(req, res){
    res.send(Alumnos);
}
module.exports={mostrarAlumnos}