//En todo el archivo cambie Var por Const o let segun 
const formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  e.preventDefault(); // 

  // Seleccionamos los campos del formulario
  const n = formulario.elements["name"]; // En vez de usar numeros, use el nombre del campo
  const eEdad = formulario.elements["age"]; // Habia un conflicto con e
  const na = formulario.elements["nationality"];

 
  const nombre = n.value.trim(); // Use trim para quitar los espacios vacios
  const edad = parseInt(eEdad.value); // Convertir la edad a número entero

  const i = na.selectedIndex; 
  const nacionalidad = na.options[i].value; // Obtenemos el valor de la opción seleccionada

  console.log(nombre, edad);
  console.log(nacionalidad);

 
  if (nombre.length === 0) {
    n.classList.add("error"); // Añadimos la clase "error" si no hay nombre
  } else {
    n.classList.remove("error"); // Removemos la clase "error" si todo está bien
  }
  
  if (isNaN(edad) || edad < 18 || edad > 120) {
    eEdad.classList.add("error"); // Añadimos la clase "error" si la edad no es válida
  } else {
    eEdad.classList.remove("error"); // Removemos la clase "error" si todo está bien
  }


  if (nombre.length > 0 && !isNaN(edad) && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad); // Llamamos a la función agregarInvitado
  }
};

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);


function agregarInvitado(nombre, edad, nacionalidad) {
  // Convertimos la nacionalidad a texto más descriptivo
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

 
  let lista = document.getElementById("lista-de-invitados");
  if (!lista) {
    lista = document.createElement("div"); // Creamos la lista si no existe
    lista.id = "lista-de-invitados";
    document.body.appendChild(lista); // La añadimos al body del html
  }

 
  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");

  
  function crearElemento(descripcion, valor) {
    const spanDescripcion = document.createElement("span");
    const inputValor = document.createElement("input");
    const espacio = document.createElement("br");
    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    inputValor.readOnly = true; // Aseguramos que los inputs sean de solo lectura
    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }

  // Agregamos cada campo (nombre, edad, nacionalidad) al invitado
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  lista.appendChild(elementoLista); // Añadir el invitado a la lista

 
  botonBorrar.onclick = function() {
    elementoLista.remove(); // Eliminamos el invitado de la lista
  };
}
