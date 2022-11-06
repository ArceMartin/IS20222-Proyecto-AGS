const chai = window.chai
const expect = chai.expect

describe('wordCount', ()=>{
    it('Debe contar la frecuencia de las palabras de una cadena',()=>{
        expect(wordCount('Un circulo es una figura de forma redonda')).to.deep.equal({Un: 1, circulo: 1, es: 1, una: 1, figura: 1, de: 1, forma: 1, redonda: 1})
        expect(wordCount('Un circulo es una figura esferica')).to.deep.equal({Un: 1, circulo: 1, es: 1, una: 1, figura: 1, esferica: 1})
    })
})

describe('mapPalabrasAVector',()=>{
    it('debe convertir a vector la frecuencia de las palabras de una cadena',()=>{
        expect(mapPalabrasAVector({Un: 1, circulo: 1, es: 1, una: 1, figura: 1, de: 1, forma: 1, redonda: 1},{Un: true, circulo: true, es: true, una: true, figura: true, de: true, forma: true, redonda: true})).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1])
        expect(mapPalabrasAVector({Un: 1, circulo: 1, es: 1, una: 1, figura: 1, esferica: 1},{Un: true, circulo: true, es: true, una: true, figura: true, esferica: true})).to.deep.equal([1, 1, 1, 1, 1, 1])
    })
})



describe('textCosineSimilarity',()=>{
    it('Debe retornar un valor de 0 y 1 decimal',()=>{
        expect(textCosineSimilarity('Un circulo es una figura de forma redonda', "Un circulo es una figura esferica")).to.deep.equal(0.7216878364870323)
        expect(textCosineSimilarity("Un gato es de la familia de los felinos","Un gato es de la familia de los mininos")).to.deep.equal(0.78)
    })
})

