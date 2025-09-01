let listaDeAmigos = [];



function agregarAmigo() {
    let nombre = document.querySelector('#amigo').value;

    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre."); 
    } else if (listaDeAmigos.includes(nombre)) {
        alert("El nombre ingresado ya existe, por favor ingrese otro nombre válido.");}
            else {listaDeAmigos.push(nombre);

        console.log(listaDeAmigos);
       document.getElementById('amigo').value = "";
       actualizarListaDeAmigos();
    }
}

function actualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";  // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li= document.createElement('li');

        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
        
    }

}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = "El amigo secreto es:" + amigoSorteado; 
}
  

function reiniciarJuego() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('amigo').value = "";
}