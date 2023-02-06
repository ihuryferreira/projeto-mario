const modal = document.querySelector(".modal");
const btnAbrirModal = document.querySelector(".botao-trailer");
const btnfecharModal = document.querySelector(".fechar-modal");
const frameSource = document.getElementById("video");
const linkDoVideo = document.querySelector("#video").src;

function alternarModal(click) {
    modal.classList.toggle("aberto");

    if (true === click) {
        console.clear();
        console.log("Clicou no botão para abrir modal.");
    } else {
        console.clear();
        console.log("Clicou no botao para fechar modal.");
    }
}

let click = true;

btnAbrirModal.addEventListener("click", () => {
    frameSource.setAttribute("src", linkDoVideo);
    alternarModal(click);
});

btnfecharModal.addEventListener("click", () => {
    frameSource.setAttribute("src", "");
    click = false;
    alternarModal(click);
});
