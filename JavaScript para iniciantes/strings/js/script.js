// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numeroAleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const novoNumero = numeros.split(',')
const numeroMax = Math.max(...novoNumero);
console.log(numeroMax)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let precoLista = 0                
listaPrecos.forEach(function(item){
    let preco = Math.round(+item.toUpperCase().replace('R$', '').trim().replace(',', '.'));
    precoLista += preco
})
console.log(precoLista.toFixed(2))