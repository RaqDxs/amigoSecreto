let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let inputAmigo = document.getElementById('amigo');

function agregarAmigo() {
    let amigo = inputAmigo.value;
    if (amigo !== "" && !amigos.includes(amigo)) {
        amigos.push(amigo);
        actualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    } else {
        alert("⚠️ Nombre inválido o ya ingresado.");
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = `📝 ${amigos[i]}`;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>🚫 No hay amigos para sortear.</li>";
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>🎯 ¡El ganador es: ${amigoSorteado}! 🎉</li>`;
}

