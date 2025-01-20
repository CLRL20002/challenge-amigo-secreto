var amigos = document.getElementById('listaAmigos');
var listaAmigos = []
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() === '') {
        alert('Ingrese un nombre válido');
        return;
    }
    listaAmigos.push(nombre); // Agregar el nombre al array para sortear
    let nuevoAmigo = document.createElement('li'); // Crear un nuevo elemento de lista
    nuevoAmigo.textContent = nombre; // Asignar el nombre al elemento
    amigos.appendChild(nuevoAmigo); // Agregar el elemento a la lista
    
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
}


function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Ingrese al menos dos amigos');
        return;
    }
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById('resultado').textContent = 'El amigo secreto es: ' + amigoSecreto;
    
}