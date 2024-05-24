// Ejercicio 1: Contador de clicks
function aumentarContador() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.textContent);
    contador++;
    contadorElemento.textContent = contador;
}

var boton = document.getElementById("boton");
boton.addEventListener("click", aumentarContador);

// Ejercicio 2: Cambio de Estilos Dinámico
function cambiarEstilo(event) {
    var elementoClicado = event.target;
    elementoClicado.style.backgroundColor = "lightblue";
    elementoClicado.style.color = "white";
    elementoClicado.style.padding = "10px";
}

var elementosLista = document.querySelectorAll("#lista li");
elementosLista.forEach(function(elemento) {
    elemento.addEventListener("click", cambiarEstilo);
});

// Ejercicio 3: Validación de Formulario Simple
function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    if (nombre === "" || email === "" || contrasena === "") {
        alert("Por favor completa todos los campos del formulario.");
    } else {
        alert("Formulario enviado correctamente!");
        // Aquí puedes agregar la lógica para enviar el formulario
    }
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

// Ejercicio 4: Galería de Imágenes con Botones de Navegación
var imagenes = document.querySelectorAll(".galeria img");
var anteriorBtn = document.getElementById("anterior");
var siguienteBtn = document.getElementById("siguiente");
var indiceImagenActual = 0;

function mostrarImagen(indice) {
    imagenes.forEach(function(imagen) {
        imagen.style.display = "none";
    });
    imagenes[indice].style.display = "block";
}

function mostrarImagenSiguiente() {
    indiceImagenActual++;
    if (indiceImagenActual >= imagenes.length) {
        indiceImagenActual = 0;
    }
    mostrarImagen(indiceImagenActual);
}

function mostrarImagenAnterior() {
    indiceImagenActual--;
    if (indiceImagenActual < 0) {
        indiceImagenActual = imagenes.length - 1;
    }
    mostrarImagen(indiceImagenActual);
}

mostrarImagen(indiceImagenActual);

anteriorBtn.addEventListener("click", mostrarImagenAnterior);
siguienteBtn.addEventListener("click", mostrarImagenSiguiente);

// Ejercicio 5: Lista de Tareas con Agregar y Eliminar
var inputNuevaTarea = document.getElementById("nuevaTarea");
var botonAgregarTarea = document.getElementById("agregarTarea");
var listaTareas = document.getElementById("listaTareasExist");

function agregarTarea() {
    var tareaTexto = inputNuevaTarea.value.trim();

    if (tareaTexto !== "") {
        // Crear elemento de lista y botón de eliminar
        var nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tareaTexto;

        var botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        // Agregar evento de click al botón de eliminar
        botonEliminar.addEventListener("click", function() {
            nuevaTarea.remove();
        });

        // Agregar botón de eliminar a la tarea
        nuevaTarea.appendChild(botonEliminar);

        // Agregar tarea a la lista
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el campo de texto después de agregar la tarea
        inputNuevaTarea.value = "";
    }
}
botonAgregarTarea.addEventListener("click", agregarTarea);

// Ejercicio 6: Reloj
function actualizarReloj() {
    var reloj = document.getElementById("reloj");
    var fechaActual = new Date();
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    // Formatear las horas, minutos y segundos para que tengan dos dígitos
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Mostrar la hora actual en el formato HH:MM:SS
    reloj.textContent = horas + ":" + minutos + ":" + segundos;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
// Actualizar el reloj por primera vez al cargar la página
actualizarReloj();

// Crear una lista con los nombres de las imágenes
// Crear una lista con los nombres de las imágenes
var imagenes = [
    "imagenes/Imagen1.jpg",
    "imagenes/Imagen2.jpg",
    "imagenes/Imagen3.jpg",
    "imagenes/Imagen4.jpg",
    "imagenes/Imagen5.jpg",
    "imagenes/Imagen6.jpg",
    "imagenes/Imagen1.jpg",
    "imagenes/Imagen2.jpg",
    "imagenes/Imagen3.jpg",
    "imagenes/Imagen4.jpg",
    "imagenes/Imagen5.jpg",
    "imagenes/Imagen6.jpg"
];

// Función para barajar el array de imágenes
function barajar(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Variable para almacenar la primera tarjeta volteada
var primeraTarjetaVolteada = null;

// Función para generar la cuadrícula de tarjetas
function generarCuadricula() {
    var juego = document.querySelector('.juego');

    // Barajar las imágenes
    var imagenesBarajadas = barajar(imagenes);

    // Crear y añadir tarjetas al juego
    imagenesBarajadas.forEach(function(imagen) {
        var tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        tarjeta.innerHTML = `<img src="${imagen}" alt="Tarjeta">`;
        tarjeta.addEventListener('click', function() {
            voltearTarjeta(this);
        });
        juego.appendChild(tarjeta);
    });
}

// Función para voltear una tarjeta
function voltearTarjeta(tarjeta) {
    if (!tarjeta.classList.contains('volteada')) {
        tarjeta.classList.add('volteada');

        // Verificar si esta es la primera tarjeta volteada
        if (primeraTarjetaVolteada === null) {
            primeraTarjetaVolteada = tarjeta;
        } else {
            // Si esta es la segunda tarjeta volteada, comprobar si coinciden
            if (tarjeta.innerHTML === primeraTarjetaVolteada.innerHTML) {
                // Si coinciden, dejarlas volteadas
                setTimeout(function() {
                    tarjeta.classList.remove('volteada');
                    primeraTarjetaVolteada.classList.remove('volteada');
                    primeraTarjetaVolteada = null; // Reiniciar la variable
                }, 1000); // Tiempo en milisegundos antes de voltear las tarjetas de nuevo
            } else {
                // Si no coinciden, voltearlas de nuevo después de un breve período de tiempo
                setTimeout(function() {
                    tarjeta.classList.remove('volteada');
                    primeraTarjetaVolteada.classList.remove('volteada');
                    primeraTarjetaVolteada = null; // Reiniciar la variable
                }, 1000); // Tiempo en milisegundos antes de voltear las tarjetas de nuevo
            }
        }
    }
}

// Generar la cuadrícula de tarjetas al cargar la página
window.addEventListener('load', generarCuadricula);

//Ejercicio 8
// Función para agregar dígitos y operadores a la pantalla
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

// Función para calcular el resultado de la expresión matemática mostrada
function calcular() {
    var expresion = document.getElementById("pantalla").value;
    var resultado = eval(expresion);
    document.getElementById("pantalla").value = resultado;
}

// Función para limpiar la pantalla
function limpiar() {
    document.getElementById("pantalla").value = "";
}

