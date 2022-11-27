// Crie uma função para verificar se um valor é Truthy
function verdadeiroFalso(num){
    if(!!num){
        return 'verdadeiro';
    } else{
        return 'falso';
    }   
}

console.log(verdadeiroFalso());

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calc(num1){
    const soma = num1 * 4;
    return console.log(soma);
}

calc(1)


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return console.log(`Olá! Meu nome é ${nome}, meu sobrenome é ${sobrenome}`);
}

nomeCompleto('Márcio', 'César Dias da Silva')


// Crie uma função que verifica se um número é par
function ePar(par){
    if(par % 2 === 0){
    return 'é par'
    }else return 'é impar';
} 
console.log(ePar(7));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(type){
    console.log(typeof type);
}

tipo('efadfs')//string
tipo(2)//number
tipo(true)//boolean
tipo()//undefined

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
    console.log('Márcio César')
});





// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));