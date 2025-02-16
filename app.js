// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Agrega el nombre ingresado en el input con id="amigo" a la lista de amigos
 */
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombre = inputAmigo.value.trim();

  // Verificamos que el usuario haya ingresado un nombre
  if (nombre !== '') {
    amigos.push(nombre);
    mostrarListaAmigos();
    // Limpiamos el campo y volvemos a darle foco
    inputAmigo.value = '';
    inputAmigo.focus();
  }
}

/**
 * Muestra la lista de amigos en el <ul> con id="listaAmigos"
 */
function mostrarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  // Limpiamos el contenido previo de la lista
  lista.innerHTML = '';

  // Recorremos el array "amigos" y creamos un <li> por cada elemento
  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

/**
 * Selecciona aleatoriamente uno de los amigos de la lista y lo muestra
 */
function sortearAmigo() {
  // Si no hay amigos en la lista, no podemos sortear
  if (amigos.length === 0) {
    alert('No hay nombres en la lista para sortear.');
    return;
  }

  // Obtenemos un índice aleatorio según la cantidad de amigos
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoElegido = amigos[indiceAleatorio];

  // Mostramos el resultado en la UL con id="resultado"
  const listaResultado = document.getElementById('resultado');
  // Limpiamos el resultado anterior (si lo hubiera)
  listaResultado.innerHTML = '';

  const li = document.createElement('li');
  li.textContent = `El amigo secreto es: ${amigoElegido}`;
  listaResultado.appendChild(li);
}
