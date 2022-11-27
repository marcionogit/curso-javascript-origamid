// nomeie 3 propriedades ou métodos de strings
const nome = 'MáRCIo';
const sobrenome = 'césar';
console.log(nome.toLowerCase());
console.log(sobrenome.toUpperCase());
console.log(sobrenome.length);


// nomeie 5 propriedades ou métodos de elementos do DOM

function clicar(){
    console.log('clicou');
}

function scrolar(){
    console.log('Rolou');
}

const botao = document.querySelector('.botao');
const corpo = document.querySelector('.corpo');

botao.addEventListener('click', clicar);
corpo.addEventListener('scroll', scrolar);
botao.append
botao.appendChild
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function adicionar(){
    const copiado = document.querySelector('.text')
    copiado.select();
    document.execCommand('copy');
}


const copy = document.querySelector('#copy')
copy.addEventListener('click', adicionar)
