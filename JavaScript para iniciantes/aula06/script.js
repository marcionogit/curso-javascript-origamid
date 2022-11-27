// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome


const eu = {
    nome: 'Márcio',
    sobrenome: 'César',
    idade: 24,
};

console.log(eu)


// Crie um método no objeto anterior, que mostre o seu nome completo
eu.meusDados = function(){
    return `Meu é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`};

console.log(eu.meusDados())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;
  console.log(carro)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  const cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    caracteristica(pessoa){
        if(pessoa  === 'homem'){
            return 'Au Au!!'
        } else if(pessoa === 'mulher'){
            return 'Cachorro safado! Não late para mulheres'
        }else{
            return 'sem parâmetro nenhum'
        }
    }};

  console.log(cachorro)
 cachorro.caracteristica('')