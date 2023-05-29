const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift();
console.log(primeiraComida)
// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();
console.log(ultimaComida)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort())
// Inverta a ordem dos estudantes
console.log(estudantes.reverse())
// Verifique se Joana faz parte dos estudantes
if(estudantes.includes('Joana')){
    console.log('Está inclusa na lista');
} else{
    console.log('Não está na lista');
}
// Verifique se Juliana faz parte dos estudantes
if(estudantes.includes('Juliana')){
    console.log('Está inclusa na lista');
} else{
    console.log('Não está na lista');
}

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const ul = html.split('section').join('ul').split('div').join('li');
console.log(ul)
 


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
const carrosCopy = carros.slice()
carros.pop()
// salve a array original em outra variável
console.log(carros)
console.log(carrosCopy)
