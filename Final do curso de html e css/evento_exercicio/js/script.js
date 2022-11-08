

function mouse(event){
    const coordenadaX = event.x;
    
    const coordenadaY = event.y;


    const circulo = document.querySelector('.circulo');


    circulo.style.left = coordenadaX + 'px';
    circulo.style.top = coordenadaY + 'px';
}

window.addEventListener('mousemove', mouse);



