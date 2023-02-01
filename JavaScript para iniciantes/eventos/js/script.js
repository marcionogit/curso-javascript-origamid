
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const link = document.querySelectorAll('a[href^="#"]');

console.log(link);

function clique(event){
    event.preventDefault();
    link.forEach(function(link){
        link.classList.remove('ativo');
    })

    event.target.classList.toggle('ativo');
}


link.forEach(function(link){
    link.addEventListener('click', clique);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementosDoBody = document.querySelectorAll('body *');

function clique (item){
    let itemEscolhido = item.target;
    console.log(itemEscolhido);
    remove(itemEscolhido)
}

elementosDoBody.forEach(function(item){
    item.addEventListener('click', clique);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function remove(event){
    event.remove()  
};


// Se o usuário clicar na tecla (f), aumente todo o texto do site. 


const adicionar = document.querySelector('body')
window.addEventListener('keydown', teclaF);

function teclaF(event){
    if(event.key === 'f')
    adicionar.classList.toggle('aumentar');
}
