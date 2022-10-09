var natural = require("natural");

// tokenization 

var tokenizer = new natural.WordTokenizer();

console.log(tokenizer.tokenize("Me gusta programar en JS,Python,Java,C y C++"));

//tokenization con split
var example = "Me gusta programar en JS,Python,Java,C y C++"

console.log(example.split(" "))

//tokenization con un patron especificado
var regTokenizer = new natural.RegexpTokenizer({pattern:/\-/});
console.log(regTokenizer.tokenize("NLP-with-javascript in Emotion A-I"));

//tokenization con un arbol
var treetokenizer = new natural.TreebankWordTokenizer();
console.log(treetokenizer.tokenize("Me gusta programar en JS,Python,Java,C y C++"));