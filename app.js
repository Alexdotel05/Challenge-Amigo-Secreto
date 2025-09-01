let listaDeAmigos = [];
let nombre = "";


function agregarAmigo() {
    let imputAmigo = document.querySelector('#amigo').value;
    nombre = imputAmigo;
    if (nombre === " ") {
        alert ("Por favor, inserte un nombre.");
      
    }
}


