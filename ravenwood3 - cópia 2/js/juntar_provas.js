document.addEventListener('DOMContentLoaded', function() {
    const btnAcusar = document.getElementById('btnAcusar');
    const btnVoltar = document.getElementById('btnVoltar');

    if (btnAcusar) {
        btnAcusar.addEventListener('click', function() {
            window.location.href = 'acusao.html';
        });
    }

    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            window.location.href = 'intro.html#cena8';
        });
    }
    // CONTROLE DE ÁUDIO
    const musica = document.getElementById("musicaProvas");
    const botaoSom = document.getElementById("botaoSom");

    if (musica && botaoSom) {
        // Tenta tocar automaticamente ao entrar na página
        musica.play().then(() => {
            botaoSom.textContent = "🔊";
        }).catch(() => {
            // Se o navegador bloquear o autoplay, espera o clique no botão
            botaoSom.textContent = "🔇";
        });

        botaoSom.addEventListener("click", () => {
            if (musica.paused) {
                musica.play();
                botaoSom.textContent = "🔊";
            } else {
                musica.pause();
                botaoSom.textContent = "🔇";
            }
        });
    }
});