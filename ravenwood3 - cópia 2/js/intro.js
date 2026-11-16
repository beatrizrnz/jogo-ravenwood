const cenas = document.querySelectorAll(".cena");
const musica = document.getElementById("musica");
const botaoSom = document.getElementById("botaoSom");
const botaoComecar = document.getElementById("comecar");

const btnSuspeitos = document.getElementById("btnSuspeitos");
const btnMansao = document.getElementById("btnMansao");

let cenaAtual = 0;

/* MÚSICA */

botaoSom.addEventListener("click", function () {
    if (musica.paused) {
        musica.play();
        botaoSom.textContent = "🔊";
    } else {
        musica.pause();
        botaoSom.textContent = "🔇";
    }
});

/* TROCAR CENA */

function trocarCena() {
    cenas[cenaAtual].classList.remove("ativa");
    cenaAtual++;

    if (cenaAtual < cenas.length) {
        cenas[cenaAtual].classList.add("ativa");
        programarProximaCena();
    }
}

/* TEMPO DAS CENAS */

function programarProximaCena() {
    let tempo;

    switch (cenaAtual) {
        case 0:
            // Mansão
            tempo = 6500;
            break;

        case 1:
            // Biblioteca
            tempo = 6500;
            break;

        case 2:
            // Algo terrível
            tempo = 5000;
            break;

        case 3:
            // Jornal
            tempo = 9000;
            break;

        case 4:
            // Relógio
            tempo = 6500;
            break;

        case 5:
            // Tela final de intro (espera o botão "COMEÇAR INVESTIGAÇÃO")
            tempo = null;
            break;

        case 6:
            // Ficha de Autópsia (Fica visível por 7 segundos e depois avança para a escolha)
            tempo = 7000;
            break;

        case 7:
            // Menu de Escolhas (Investigar Mansão / Suspeitos)
            tempo = null;
            break;
    }

    if (tempo !== null) {
        setTimeout(trocarCena, tempo);
    }
}

/* INICIAR INVESTIGAÇÃO (FICHA DE AUTÓPSIA + MÚSICA)*/

botaoComecar.addEventListener("click", function () {
    const estavaTocando = !musica.paused;

    // Troca para a música tema da mansão
    musica.src = "audio/mansao.mp3";

    if (estavaTocando) {
        musica.play();
    }

    // Avança para a Cena 6 (Ficha de Autópsia) com efeito de fade-in suave
    trocarCena();
});

/* AÇÕES DAS ESCOLHAS */

btnSuspeitos.addEventListener("click", function () {
    window.location.href = "interrogatorio.html";
});

btnMansao.addEventListener("click", function () {
    window.location.href = "investigacao_casa.html";
});

/* INICIAR */

programarProximaCena();
// VERIFICA SE O JOGADOR VEIO DO INTERROGATÓRIO
window.addEventListener("DOMContentLoaded", () => {
    // Se a URL terminar com #cena8
    if (window.location.hash === "#cena8") {
        
        // 1. Esconde a cena inicial
        const cenaInicial = document.querySelector(".cena.ativa") || document.getElementById("cena1");
        if (cenaInicial) {
            cenaInicial.classList.remove("ativa");
            cenaInicial.classList.add("oculto");
        }

        // 2. Esconde todas as outras cenas para garantir
        document.querySelectorAll(".cena").forEach(cena => {
            cena.classList.remove("ativa");
        });

        // 3. Ativa diretamente a Cena 8 (Ajuste o ID se o container tiver outro nome)
        const cena8 = document.getElementById("cena8");
        if (cena8) {
            cena8.classList.remove("oculto");
            cena8.classList.add("ativa");
        }
    }
   // 1. Ação do botão JUNTAR PROVAS
const btnJuntarProvas = document.getElementById("btnJuntarProvas");
if (btnJuntarProvas) {
    btnJuntarProvas.addEventListener("click", () => {
        window.location.href = "juntar_provas.html";
    });
}

// 2. Abrir direto na Cena 8 quando o jogador voltar de outra página
window.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#cena8") {
        document.querySelectorAll(".cena").forEach(cena => {
            cena.classList.remove("ativa");
        });
        const cena8 = document.getElementById("cena8");
        if (cena8) {
            cena8.classList.add("ativa");
        }
    }
});
});