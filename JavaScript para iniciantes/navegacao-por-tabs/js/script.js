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