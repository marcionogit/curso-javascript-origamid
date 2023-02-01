// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeirodt = document.querySelector('#faq dt');
console.log(primeirodt);

// Selecione o DD referente ao primeiro DT
const primeirodd = primeirodt.nextElementSibling;
console.log(primeirodd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('#faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML

// faq.replaceChild( animaisTextos, faqTextos)
