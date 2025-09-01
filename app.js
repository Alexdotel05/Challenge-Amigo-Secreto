//Array para almacenar lista de amigos.
let listaDeAmigos = [];



function agregarAmigo() { //Función para agregar amigo a la lista a través del imput.
    document.getElementById('resultado').innerHTML = ""; 

    let nombre = document.querySelector('#amigo').value;

    if (nombre.trim() === "") {   //Validar que el imput no esté vacío y agregar nombre a la lista.
        alert("Por favor, inserte un nombre."); 
    } else if (listaDeAmigos.includes(nombre)) { // Validar que el nombre no esté incluido en la lista.
        alert("El nombre ingresado ya existe, por favor ingrese otro nombre válido.");}
            else {listaDeAmigos.push(nombre);

        console.log(listaDeAmigos); // Verificar la lista de amigos en la consola.
       document.getElementById('amigo').value = ""; // Limpiar el imput después de agregar nombre a la lista.
       actualizarListaDeAmigos();
    }
}

function actualizarListaDeAmigos() { // Función para actualizar la lista de amigos en el HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";  // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < listaDeAmigos.length; i++) { // Recorrer la lista y crear elementos de lista para cada nombre.
        let li= document.createElement('li');

        li.textContent = `${i + 1} - ${listaDeAmigos[i]}`; // Enumerar la lista de nombres inicianto en 1.
        lista.appendChild(li);
        
    }

}

function sortearAmigo() { // Función para sortear el amigo secreto de manera aleatoria.
    if (listaDeAmigos.length === 0) { // Validar que la lista no esté vacía y hay nombre disponibles e lalista.
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length); 
    let amigoSorteado = listaDeAmigos[indiceAleatorio]; // Seleccionar amigo secreto aleatoriamente
    document.getElementById('resultado').innerHTML = "El amigo secreto es: " + `"${amigoSorteado}"`; // Mostrar resultado del amigo secreto sorteado.
    reiniciarJuego();
}
  
function reiniciarJuego() { // Función para generar las condiciones iniciales luego de obtener el amigo sorteado.
    listaDeAmigos = []; // Declarar la lista de nombres agregados vacía.

    document.getElementById('listaAmigos').innerHTML = ""; // Vaciar lista en el HTML
    document.getElementById('amigo').value = ""; // Limpiar el imput
     
}   
 