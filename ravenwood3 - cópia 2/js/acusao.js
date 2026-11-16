const finais = {
    vanessa: {
        correto: true,
        badge: "CASO RESOLVIDO — JUSTIÇA FEITA",
        titulo: "A QUEDA DE VANESSA RAVENWOOD",
        imagem: "img/final_vanessa.jpg",
        texto: "Ao confrontar Vanessa com o frasco de extrato de beladona, o recibo da farmácia e o livro de botânica escondido em seu quarto, sua fachada fria desmorona. Enfurecida ao descobrir que o pai pretendia casar-se com Elena Austen e incluí-la no testamento, Vanessa preparou uma xícara de café envenenado na cozinha antes que Elena servisse Edmund. A Scotland Yard prendeu Vanessa ainda na biblioteca, e a fortuna dos Ravenwood foi protegida."
    },
    thomas: {
        correto: false,
        badge: "FINAL FALSO — INOCENTE PRESO",
        titulo: "O BODE EXPIATÓRIO",
        imagem: "img/final_thomas.jpg",
        texto: "As dívidas de jogo e a discussão acalorada antes do crime pareciam provas suficientes contra Thomas. Ele foi algemado pela polícia gritando sua inocência. Dias depois, a perícia concluiu que o veneno usado no café era extrato raro de beladona — algo que Thomas jamais teve acesso. Enquanto o sobrinho apodrece na prisão, o verdadeiro assassino permanece livre na mansão."
    },
    advogado: {
        correto: false,
        badge: "FINAL FALSO — ERRO DE JULGAMENTO",
        titulo: "UM ÁLIBI INQUEBRÁVEL",
        imagem: "img/final_advogado.jpg",
        texto: "Você acusou o Dr. Valentine de assassinar seu próprio cliente por disputas contratuais. Contudo, no tribunal, o advogado provou facilmente que a alteração do testamento beneficiava Elena e não a ele, além de não ter qualquer ligação com a substância venenosa encontrada na cozinha. O caso foi arquivado por falta de provas e o verdadeiro culpado escapou impune."
    },
    elena: {
        correto: false,
        badge: "FINAL FALSO — UMA ARMADILHA PERFEITA",
        titulo: "A VÍTIMA SILENCIOSA",
        imagem: "img/final_elena.jpg",
        texto: "Por ter servido a xícara de café e estar prestes a entrar no testamento, Elena Austen foi condenada pelo crime. Ela chorou até o último instante jurando amar Edmund. Do alto da escadaria da mansão, Vanessa Ravenwood observou a viatura policial partir com um sorriso discreto nos lábios — seu plano para incriminar a empregada funcionou perfeitamente."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const telaEscolha = document.getElementById("telaEscolha");
    const telaDesfecho = document.getElementById("telaDesfecho");
    const fundoDesfecho = document.getElementById("fundoDesfecho");
    const badgeResultado = document.getElementById("badgeResultado");
    const tituloDesfecho = document.getElementById("tituloDesfecho");
    const textoDesfecho = document.getElementById("textoDesfecho");
    const btnTentarNovamente = document.getElementById("btnTentarNovamente");
    const btnReiniciarJogo = document.getElementById("btnReiniciarJogo");
    const btnVoltarProvas = document.getElementById("btnVoltarProvas");
    const overlayTransicao = document.getElementById("overlayTransicao");

    // Controle de áudio
    const musica = document.getElementById("musicaAcusacao");
    const botaoSom = document.getElementById("botaoSom");

    if (botaoSom && musica) {
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

    function trocarTela(callback) {
        overlayTransicao.classList.add("ativo");
        setTimeout(() => {
            callback();
            setTimeout(() => {
                overlayTransicao.classList.remove("ativo");
            }, 300);
        }, 600);
    }

    // Clique nos cartões de acusação
    document.querySelectorAll(".card-acusar").forEach(card => {
        card.addEventListener("click", () => {
            const suspeito = card.getAttribute("data-suspeito");
            const dadosFinal = finais[suspeito];

            if (!dadosFinal) return;

            trocarTela(() => {
                fundoDesfecho.style.backgroundImage = `url('${dadosFinal.imagem}')`;
                badgeResultado.textContent = dadosFinal.badge;
                badgeResultado.className = dadosFinal.correto ? "badge vitoria" : "badge derrota";
                tituloDesfecho.textContent = dadosFinal.titulo;
                textoDesfecho.textContent = dadosFinal.texto;

                if (dadosFinal.correto) {
                    btnTentarNovamente.classList.add("oculto");
                } else {
                    btnTentarNovamente.classList.remove("oculto");
                }

                telaEscolha.classList.remove("ativa");
                telaDesfecho.classList.add("ativa");
            });
        });
    });

    // Tentar novamente (caso erre o culpado)
    if (btnTentarNovamente) {
        btnTentarNovamente.addEventListener("click", () => {
            trocarTela(() => {
                telaDesfecho.classList.remove("ativa");
                telaEscolha.classList.add("ativa");
            });
        });
    }

    // Voltar para a parede de provas
    if (btnVoltarProvas) {
        btnVoltarProvas.addEventListener("click", () => {
            window.location.href = "juntar_provas.html";
        });
    }

    // Reiniciar do zero (Cena 1)
    if (btnReiniciarJogo) {
        btnReiniciarJogo.addEventListener("click", () => {
            window.location.href = "intro.html";
        });
    }
});