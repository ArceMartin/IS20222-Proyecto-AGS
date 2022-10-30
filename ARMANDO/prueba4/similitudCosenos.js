//primero mapeamos las palabras en un texto a su contador de frecuencia.
//para hacerlo solamente separamos el texto en palabras e iterar a traves de cada palabra
//y contar cuantas veces la palabra aparece en el texto.
function wordCount(str)
{
    let palabras = str.split(' ');
    let contadorPalabras = {};
    palabras.forEach((w)=>{
        contadorPalabras[w] = (contadorPalabras[w] || 0) +1;
    });
return contadorPalabras;
}

let a=wordCount("hola");
console.log(a)

//al final retorna un objeto con el mapeon entre una palabra y su frecuencia

//Posteriormente necesitamos crear un diccionario de todas las palabras que estan presentes en ambos textos que revisamos para similitud.
//despues se utilizara el diccionario para formar una representacion vectorial de los conteos de palabras. Para simplificar la creacion 
//del diccionario, se agrega una funcion para extraer las palabras de nuestro contador de frecuencia de palabras y agregarlo a nuestro diccionario.

function agregarPalabrasADiccionario(contadorPalabras, dict)
{
    for(let key in contadorPalabras)
    {
        dict[key]=true;
    }
}

//ahora podemos cambiar nuestro map de conteo de palabras a un vector usando nuestro diccionario.
//las dimensiones de los vectores dependeran del numero de palabras que tengamos en nuestro diccionario.

function mapPalabrasAVector(map, dict)
{
    let vectorCuentaPalabras = [];
    for(let term in dict)
    {
        vectorCuentaPalabras.push(map[term]||0);
    }
    return vectorCuentaPalabras;
}

//Ahora que ya tenemos la funcion para cambiar cadenas de texto a vectores podemos empezar a trabajar en calcular la similitud de coseno. 
//La similitud de cosenos es el producto punto de los 2 vectores dividido entre el producto de su magnitud. Agregamos 3 funciones para calcular su similitud de cosenos.

function productoPunto(vecA, vecB){
    let producto = 0;
    for(let i=0;i<vecA.length;i++){
        producto += vecA[i] * vecB[i];
    }
    return producto;
}

function magnitud(vec){
    let sum = 0;
    for (let i = 0;i<vec.length;i++){
        sum += vec[i] * vec[i];
    }
    return Math.sqrt(sum);
}

function cosineSimilarity(vecA,vecB){
    return productoPunto(vecA,vecB)/ (magnitud(vecA) * magnitud(vecB));
}

//Ahora que ya tenemos todo lo que necesitamos agregamos una funcion para tomar 2 cadenas en vez de 2 vectores

function textCosineSimilarity(txtA, txtB)
{
    const contadorPalabrasA = wordCount(txtA);
    const contadorPalabrasB = wordCount(txtB);
    let dict = {};
    agregarPalabrasADiccionario(contadorPalabrasA,dict);
    agregarPalabrasADiccionario(contadorPalabrasB, dict);
    const vectorA = mapPalabrasAVector(contadorPalabrasA,dict);
    const vectorB = mapPalabrasAVector(contadorPalabrasB,dict);
    return cosineSimilarity(vectorA, vectorB);
}
let b=textCosineSimilarity("Este es un ejemplo de que tan similares son dos textos","Este es un ejemplo de que no tan similares son dos textos");
console.log(b);

function obtenerValorSimilitud(val){
    return Math.round(val * 100)
}
//esta funcion es solo para redondear los resultados y cambiarlos a porcentajes, para hacerlo mas entendible.

let c = obtenerValorSimilitud(b);
console.log(c)