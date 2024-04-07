import naipes from './naipes.js'
import { reverso } from './naipes.js';
console.log(reverso)

// cargamos los elementos del DOM del index 
const tablero = document.querySelector(".tablero");
const puntuacionElement = document.getElementById("puntuacion");
function jugar() {
    mostrarNaipes(naipes, reverso);
    
}
//jugar();
document.getElementById('btn-play').addEventListener('click', jugar)
// mostrar naipes - mostrará el doble de naipes de los naipes dados 
function mostrarNaipes(naipes, reverso) {
     // Barajar las naipes
    naipes = naipes.sort(() => Math.random() - 0.5);
    
    // creamos en html y ocultamos los naipes colocando encima el reverso
    naipes.map(naipe => {
        //creamos un template accediendo al nombre y al url de cada imagen
        let templateImg = `
        <figure class='naipe'>
        <img class='frente' alt ='${naipe.title}'src='${naipe.url}'/>
        <img  class='reverso'src='${reverso}'/>
        <figcaption class='nombre'>${naipe.title}</figcaption>
        </figure>
        `
        // se lo agragamos al tablero
        tablero.innerHTML += templateImg
    
    }
     )
    
}
// los naipes se muestran durante un tiempo x
function mostrarNaipesInicio(naipes, time) {
  
}
// ocultar naipes
// encontrar parejas y se almacena en localstorage
// si se encuentra pareja y no se oculta 
// si no se encuentra no se oculta
// todas encontradas se gana
