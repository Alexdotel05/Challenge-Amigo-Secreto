//Array para almacenar lista de amigos.
let listaDeAmigos = [];

//Función para agregar amigo a la lista.
function agregarAmigo() { 
    // Si hay un resultado de sorteo previo, se borra al agregar un nuevo amigo
    document.getElementById('resultado').innerHTML = ""; 

    let nombre = document.querySelector('#amigo').value;

    if (nombre.trim() === "") {   //Validar que el imput no esté vacío.
        alert("Por favor, inserte un nombre."); 
    } else if (listaDeAmigos.includes(nombre)) { // Validar que el nombre no esté incluido en la lista.
        alert("El nombre ingresado ya existe, por favor ingrese otro nombre válido.");}
            else {listaDeAmigos.push(nombre);

        console.log(listaDeAmigos); // Verificar la lista de amigos en la consola.
       document.getElementById('amigo').value = ""; // Limpiar el imput.
       actualizarListaDeAmigos();
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaDeAmigos() { 
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";  // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < listaDeAmigos.length; i++) { 
        let li= document.createElement('li');

        li.textContent = `${i + 1} - ${listaDeAmigos[i]}`; // Enumerar nombres en la lista.
        lista.appendChild(li);
        
    }

}

// Función para sortear un amigo secreto aleatoriamente.
function sortearAmigo() { 
    if (listaDeAmigos.length < 2) { // Validar que la lista no esté vacía y hay nombre disponibles en la lista.
        alert("No hay amigos suficientes para sortear!");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length); 
    let amigoSorteado = listaDeAmigos[indiceAleatorio]; // Seleccionar amigo secreto aleatoriamente
    document.getElementById('resultado').innerHTML = `<li>El amigo secreto es:${amigoSorteado}"`; // Mostrar resultado del amigo secreto sorteado.
    reiniciarJuego();
}
  
//Función para reiniciar la lista y el imput
function reiniciarJuego() { 
    listaDeAmigos = []; // Vaciar array interno

    document.getElementById('listaAmigos').innerHTML = ""; // Vaciar lista visual
    document.getElementById('amigo').value = ""; // Limpiar imput
     
}   
 