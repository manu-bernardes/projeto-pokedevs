const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        escondercartaoPokedev();
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);
        esconderPokedevnaListagem();
        ativarPokedevnaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevnaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNalistagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNalistagem.classList.add("ativo");
}

function esconderPokedevnaListagem() {
    const pokedevAtivonaListagem = document.querySelector(".ativo");
    pokedevAtivonaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    CartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function escondercartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

