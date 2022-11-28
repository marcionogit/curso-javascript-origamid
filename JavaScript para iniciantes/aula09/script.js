// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500;
console.log(`A soma é ${scroll}`)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCasa = true;
var possuiCarro = true;

const darCredito = (possuiCarro && possuiCasa) ? 'Crédito disponivel' : 'Crédito indisponivel';
console.log(darCredito)