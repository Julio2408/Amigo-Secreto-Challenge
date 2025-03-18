// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById(`amigo`);
    const nombreAmigo = inputAmigo.Value.trim();

    if(nombre===""){
        alert("Por favor inserte un nombre");
        return;
    }

    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista` );
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.Value = "";

    actualizarLista();
}

function actualizarLista(){

    const listaAmigos = document.getElementById(`listaAmigos`);

    listaAmigos.innerHTML="";

    for (let i=0;i<amigos.length;i++){
        const li= document.createElement('li');
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){

    if (amigos.length===0){

        alert("No hay amigos disponibles para sortear");
        return;
    }

    const indiceAleatorio=Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos(indiceAleatorio);
    
    const resultado= document.getElementById('resultado');
    
    resultado.innerHTML= `Amigos sorteado: <strong>${amigoSorteado}</strong>`;
}