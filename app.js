let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let inputAmigo = document.getElementById('amigo');

function agregarAmigo() {
    let amigo = inputAmigo.value.trim(); // Eliminar espacios en blanco
    if (amigo !== "" && !amigos.includes(amigo)) {
        amigos.push(amigo);
        actualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    } else if (amigo === "") {
        alert("⚠️ Por favor escribe un nombre.");
    } else {
        alert("⚠️ Este amigo ya está en la lista.");
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    if (amigos.length === 0) {
        listaAmigos.innerHTML = "<p style='color: #888; text-align: center;'>No hay amigos en la lista aún</p>";
        return;
    }
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `<span style="font-weight: bold;">📝 ${amigos[i]}</span>`;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>🚫 No hay amigos para sortear. ¡Agrega algunos!</li>";
        return;
    } else if (amigos.length === 1) {
        resultado.innerHTML = "<li>⚠️ Necesitas al menos dos amigos para realizar el sorteo.</li>";
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>🎉 ¡El ganador es: <span style="font-size: 24px; color: #FF6B6B;">${amigoSorteado}</span>! 🎊</li>`;
}

window.onload = actualizarLista;

inputAmigo.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});