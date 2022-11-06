//test sim.js

var sim=require('../sim2.js');
var expect=require('chai').expect;

 describe('#wordCount()',function wordCount(str){
    context('no recibe parametros',function wordCount(str){
        it('retorna error', function(){
            expect(function(){
                sim()
            }).to.throw(TypeError, 'No le has enviado ningun parametro')
        })
    })
    
    context('no recibe string',function wordCount(str){
        it('retorna error', function(){
            expect(function(){
                sim(5)
            }).to.throw(TypeError, 'El argumento debe ser una cadena')
        })
    })
    

    context('recibe una cadena',function wordCount(str){
        it('retorna el numero de palabras en el string',function(){
            expect(sim("Hola mundo mundial")).to.equal(3)
        })
    })
 })