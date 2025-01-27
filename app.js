// Reemplaza todo el contenido del archivo app.js con lo siguiente:

const amigos = []

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo")
  const nombre = inputAmigo.value.trim()

  if (nombre !== "") {
    amigos.push(nombre)
    actualizarListaAmigos()
    inputAmigo.value = ""
  }
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos")
  listaAmigos.innerHTML = ""
  amigos.forEach((amigo) => {
    const li = document.createElement("li")
    li.textContent = amigo
    listaAmigos.appendChild(li)
  })
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Se necesitan al menos 2 amigos para realizar el sorteo.")
    return
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length)
  const amigoSorteado = amigos[indiceAleatorio]

  const resultado = document.getElementById("resultado")
  resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`
}

// Agregar evento de escucha para la tecla Enter en el campo de entrada
document.getElementById("amigo").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    agregarAmigo()
  }
})

