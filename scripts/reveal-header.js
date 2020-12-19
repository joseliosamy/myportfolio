const btnHamburguer = document.getElementById("hamburguer");
const headerToHamburguer = document.getElementById("header-hamburguer");
const headerRevealHamburguer = document.getElementById("header");

function reveal(){
    if(headerRevealHamburguer){
        headerRevealHamburguer.classList.toggle("header-hamburguer-on")
    } 
}