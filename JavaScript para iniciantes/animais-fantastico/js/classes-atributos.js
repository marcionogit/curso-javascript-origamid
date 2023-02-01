// Adicione a classe ativo a todos os itens do menu
const adicioneAtivo = document.querySelectorAll('.menu a')

adicioneAtivo.forEach((item) =>{
    item.classList.add('ativo');
});


console.log(adicioneAtivo);


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro


adicioneAtivo.forEach((item) =>{
    item.classList.remove('ativo')
});

console.log(adicioneAtivo);



// Verifique se as imagens possuem o atributo alt
// Modifique o href do link externo no menu