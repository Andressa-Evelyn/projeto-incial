const chocolate = document.getElementById('chocolate');
const morango = document.getElementById('morango');
const inicio = document.getElementById('inicio');

function achocolatar() {
    if(!lisaAlive()){
        inicio.src = './images/donuts chocolate.jpg'
    }
   
}

function morangar() {
   
    if(!lisaAlive()){
        inicio.src = './images/donuts morango.png'
    }
}

function lisa(){
    inicio.src = './images/lisa.png'
}

function lisaAlive(){
    return inicio.src.indexOf('lisa') > -1;
}

chocolate.addEventListener('click', achocolatar);
morango.addEventListener('click', morangar);
inicio.addEventListener('mouseover', achocolatar)
inicio.addEventListener('mouseleave',morangar);
inicio.addEventListener('dblclick', lisa)



