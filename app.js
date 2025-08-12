let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor ingrese un nombre.");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, ingrese al menos dos nombres para iniciar el sorteo.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let mostrarAmigo = document.getElementById("resultado");
    mostrarAmigo.textContent = "El amigo secreto es:" +amigoSecreto;
        document.getElementById("nuevoSorteo").removeAttribute("disabled");

    // amigos.sort(() => Math.random() - 0.5);

    // const resultado = document.getElementById("resultado");
    // resultado.innerHTML = "";

    // for (let i = 0; i < amigos.length; i++) {
    //     const li = document.createElement("li");
    //     li.innerHTML = `${amigos[i]} -> ${amigos[(i + 1) % amigos.length]}`;
    //     resultado.appendChild(li);
    // }
}

function nuevoSorteo() {
    amigos = [];
    document.getElementById("amigo").value = "";
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}