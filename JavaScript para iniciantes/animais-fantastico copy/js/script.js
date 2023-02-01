// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(function(item){
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const itensMenuRemove = document.querySelectorAll('.menu a');

itensMenuRemove.forEach(function(item, index){
    if (item.classList.contains('ativo') && index >= 1){
    item.classList.remove('ativo');}
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
    const textoAlt = item.getAttribute('alt');
    if(textoAlt){
        console.log('Tem');
    } else{
        console.log('Não tem');
    }
});

// Modifique o href do link externo no menu

