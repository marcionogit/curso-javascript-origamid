function iniciarAnimacaoAnimais(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    function activeTab(index){
        tabContent.forEach(function(section){
            section.classList.remove('ativo');
        })
        tabContent[index].classList.add('ativo');
    };


    tabMenu.forEach(function(itemMenu, index){
        itemMenu.addEventListener('click', function(){
            activeTab(index);
        })
    })
}

iniciarAnimacaoAnimais();



function initAcordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');

    function ativarAcordion(){
        this.classList.add('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach(function(itemLista){
        itemLista.addEventListener('click', ativarAcordion);
    })
}

initAcordion();


const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

console.log(linksInternos)

function scrollSuave(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const destinoScroll = document.querySelector(href);

    destinoScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}


linksInternos.forEach(function(item){
    item.addEventListener('click', scrollSuave);
})