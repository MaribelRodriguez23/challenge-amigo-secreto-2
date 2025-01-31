// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let amigos = [];
let sorteoRealizado = false; // Bandera para controlar si ya se hizo el sorteo

// Detectar tecla "Enter" para agregar nombres
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el envío del formulario
        agregarAmigo();
    }
});

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Evitar agregar nombres después del sorteo
    if (sorteoRealizado) {
        alert("No puedes agregar más amigos después del sorteo. Presiona 'Nuevo Juego' para reiniciar.");
        return;
    }

    limpiarResultado(); // Borra el resultado cuando se agrega un nuevo nombre
    
    let nombreAmigo = document.getElementById("amigo").value.trim();
    
    // Verificar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Verificar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";  // Limpiar el campo de entrada
    document.getElementById("amigo").focus(); // Mantener el cursor en el input
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la pantalla
function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpiar la lista actual

    // Crear un nuevo elemento para cada amigo
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos dos amigos en la lista
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Obtener un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Marcar que el sorteo ya se realizó
    sorteoRealizado = true;

    // Limpiar la lista de amigos después del sorteo
    amigos = [];
    mostrarListaAmigos();  // Actualizar la lista vacía
}

// Función para limpiar el resultado del sorteo
function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}

// Función para reiniciar el juego
function nuevoJuego() {
    document.getElementById("amigo").value = "";  // Limpiar el campo de entrada
    amigos = []; // Vaciar la lista de amigos
    sorteoRealizado = false; // Permitir agregar nuevos nombres
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en pantalla
    limpiarResultado(); // También borra el resultado
}
