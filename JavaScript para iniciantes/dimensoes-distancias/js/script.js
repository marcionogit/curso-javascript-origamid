// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
const primeiraImgAltura = primeiraImg.offsetTop;

console.log(`A distância entre a primeira imagem até o topo da página é de ${primeiraImgAltura}px`);


// Retorne a soma da largura de todas as imagens

const animaisLista = document.querySelectorAll('img');

let soma = 0;
function somaImagens(){
animaisLista.forEach(function(item){
    let itemLista = item.offsetWidth;
    soma += itemLista
    console.log(`A largura das imagens é ${itemLista}`)
})
console.log(soma)
}

window.onload = function(){
    somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

console.log(links)
links.forEach(function(link){
    const altura = link.offsetHeight;
    const largura = link.offsetWidth;
    if(altura >= 48 && largura >= 48){
        console.log(`${link}Esse link possui o minimo de px recomendado pelo google`)
    }else{
        console.log(`${link} esse não possui o minimo`)
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');

const larguraJanela = window.innerWidth;
console.log(larguraJanela)

if(larguraJanela < 720){
    menu.classList.add('menu-mobile');
}