var imagens = ["img/diversidads.JPG", "img/diversidade.JPG", "img/divers.JPG", "img/ddssaddas.JPG"];
var imagematual = 0;

function trocaimagem() {
    imagematual = (imagematual + 1) % 4;
    document.querySelector('.JPG img').src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);