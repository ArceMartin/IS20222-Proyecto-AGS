//El coeficiente de dice mide que tan similares son dos set. Se usa para poder medir que tan similares son dos textos
//En terminos del numero de biagramas en comun (Un biagrama es un par de letras adjacentes en el string).

//El coeficiente se calcula para dos strings x y.

//d=(2nt)/(nx+ny)

//donde nt es el numero de biagramas encontrado en ambos strings 

function getBigrams(str) {
    const bigrams = new Set();
    for (let i = 0; i < str.length - 1; i += 1) {
      bigrams.add(str.substring(i, i + 2));
    }
    return bigrams;
  }
  let a=getBigrams("Hola esto es un ejemplo");
  console.log(a);
  let b=getBigrams("Hola esto es una broma");
  console.log(b);
  function intersect(set1, set2) {
    return new Set([...set1].filter((x) => set2.has(x)));
  }
  c=intersect(a,b);
  console.log(c)
  function diceCoefficient(str1, str2) {
    const bigrams1 = getBigrams(str1);
    const bigrams2 = getBigrams(str2);
    return (2 * intersect(bigrams1, bigrams2).size) / (bigrams1.size + bigrams2.size);
  }

d=diceCoefficient("Un triangulo es una figura de tres lados", "Un triangulo tiene 3 lados");
console.log(d);