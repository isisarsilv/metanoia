var imagens = ["img/banner2.JPG", "img/banner3.JPG", "img/banner4.JPG", "img/banner5.JPG"];
var imagematual = 0;

function trocaimagem() {
    imagematual = (imagematual + 1) % 4;
    document.querySelector('.JPG img').src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);