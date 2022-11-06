module.exports = function wordCount(str)
{
    //convierte el objeto de argumentos en un array
    //var args=Array.prototype.slice.call(arguments);
    arg=arguments;


    //arroja error si no se le manda ningun parametro
    if(arguments.length==0)
    {
        throw new Error("No le has enviado ningun parametro")
    }

    //arroja error si el dato no es una cadena
    if(typeof arg !== 'string')
    {
        throw new Error('El argumento debe ser una cadena')
    }
    

    let palabras = str.split(' ');
    let contadorPalabras = {};
    palabras.forEach((w)=>{
        contadorPalabras[w] = (contadorPalabras[w] || 0) +1;
    });
return contadorPalabras;
}