var dataFinal = new Date(2024, 0, 0, 23, 59, 59);

function atualizarContador() {
    var agora = new Date();
    var diferenca = dataFinal - agora;

    if (diferenca > 0) {
        var tempoRestante = new Date(diferenca);

        var dias = tempoRestante.getUTCDate() - 1;
        var horas = tempoRestante.getUTCHours();
        var minutos = tempoRestante.getUTCMinutes();
        var segundos = tempoRestante.getUTCSeconds();

        document.getElementById("contador").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
    } else {
        document.getElementById("contador").innerHTML = "A promoção acabou!";
    }
}


setInterval(atualizarContador, 1000);


atualizarContador();