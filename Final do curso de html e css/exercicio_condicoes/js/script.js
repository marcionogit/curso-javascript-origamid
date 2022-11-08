const botao = document.querySelector('button');


function somar(){
    const div = document.querySelector('div')
    let total = Number(div.innerText) + 1
    console.log(total)
    if (total < 10){
    div.innerText = total}
    else{
    div.innerText = total + ' passou de 10'
    }
}


if(botao){
botao.addEventListener('click', somar);
}

