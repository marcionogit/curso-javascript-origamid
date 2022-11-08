// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(`O total é ${total}`);

// Crie duas expressões que retornem NaN
const exp1 = 'trinta' - 10;
const exp2 = 'exp2 30' / 10;
console.log(exp1, exp2);


// Somar a string '200' com o número 50 e retornar 250
const somaStrings = '200' + 50;
const soma = +'200' + 50;
console.log(`Soma da string ${somaStrings}, Soma da String convertida para numero ${soma}`)

// Incremente o número 5 e retorne o seu valor incrementado
let cinco = 5;
console.log(cinco);

let incrementado = ++cinco;
console.log(incrementado);


// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)


var numero = +'80';
var unidade = 'kg';
var unidade = 0;
var peso = numero + unidade;
var pesoPorDois = peso / 2;
console.log(`O peso é de ${pesoPorDois}kg`);