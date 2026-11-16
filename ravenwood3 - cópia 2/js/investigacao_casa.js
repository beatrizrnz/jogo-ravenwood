// BANCO DE DADOS DOS CÔMMODOS COM 3 PONTOS DE INTERESSE EXCLUSIVOS CADA
const dadosLocais = {
    biblioteca: {
        nome: "BIBLIOTECA / ESCRITÓRIO",
        imagemGeral: "img/biblioteca_geral.jpg",
        descricaoGeral: "A cena do crime. A luz do abajur ilumina papéis espalhados e uma xícara caída no chão. O que você quer examinar mais de perto?",
        pontosInteresse: [
            {
                id: "mesa",
                nomePonto: "🔍 Examinar Mesa de Trabalho",
                imagemDetalhe: "img/biblioteca_mesa.jpg",
                descricaoDetalhe: "Na mesa há rascunhos da alteração do testamento. O documento confirma que o Sr. Edmund pretendia adicionar Elena Austen como herdeira.",
                pista: "Biblioteca: Rascunhos do testamento indicam a inclusão de Elena Austen como herdeira."
            },
            {
                id: "xicara",
                nomePonto: "🔍 Checar Xícara no Chão",
                imagemDetalhe: "img/biblioteca_xicara.jpg",
                descricaoDetalhe: "No tapete, próximo à poltrona, há uma xícara quebrada com resíduos de café frio e um odor químico forte e incomum.",
                pista: "Biblioteca: A xícara de café continha um forte odor de substância química venenosa."
            },
            {
                id: "estante",
                nomePonto: "🔍 Inspecionar Livros Antigos",
                imagemDetalhe: "img/biblioteca_estante.jpg",
                descricaoDetalhe: "Um dos livros de capa de couro está deslocado. Atrás dele há um cofre de parede, mas ele foi aberto e esvaziado recentemente.",
                pista: "Biblioteca: O cofre pessoal de Edmund foi aberto à força ou com chave mestra."
            }
        ]
    },
    cozinha: {
        nome: "COZINHA",
        imagemGeral: "img/cozinha_geral.jpg",
        descricaoGeral: "O ambiente cheira a café frio e cera de piso. A bancada parece ter sido usada recentemente. Onde quer procurar?",
        pontosInteresse: [
            {
                id: "bancada",
                nomePonto: "🔍 Olhar Bancada de Café",
                imagemDetalhe: "img/cozinha_bancada.jpg",
                descricaoDetalhe: "Sobre o balcão há duas xícaras idênticas de porcelana. Uma está limpa e secando; a outra tem gotas de café espalhadas na borda.",
                pista: "Cozinha: Duas xícaras idênticas foram usadas na mesma noite na cozinha."
            },
            {
                id: "lixo",
                nomePonto: "🔍 Vasculhar Lixeira",
                imagemDetalhe: "img/cozinha_lixo.jpg",
                descricaoDetalhe: "No fundo do lixo, sob papéis rasgados, há um frasco de vidro escuro sem rótulo, limpo por dentro, mas com leves traços de veneno.",
                pista: "Cozinha: Um frasco de vidro sem rótulo de substância tóxica foi descartado no lixo."
            },
            {
                id: "despensa",
                nomePonto: "🔍 Inspecionar Prateleira de Mantimentos",
                imagemDetalhe: "img/cozinha_despensa.jpg",
                descricaoDetalhe: "Entre os mantimentos, o sachê de um chá especial importado está aberto e com o lacre rompido de forma brusca.",
                pista: "Cozinha: O lacre do chá especial consumido por Edmund foi violado."
            }
        ]
    },
    sala_reuniao: {
        nome: "SALA DE REUNIÃO",
        imagemGeral: "img/sala_reuniao_geral.jpg",
        descricaoGeral: "A mesa de carvalho ainda guarda cinzas de charuto e copos. Onde deseja focar a investigação?",
        pontosInteresse: [
            {
                id: "mesa_reuniao",
                nomePonto: "🔍 Olhar Cinzeiro e Copos",
                imagemDetalhe: "img/sala_reuniao_mesa.jpg",
                descricaoDetalhe: "Cinzas de dois charutos importados no cinzeiro de cristal e dois copos pesados de uísque, confirmando uma longa reunião secreta.",
                pista: "Sala de Reunião: O Dr. Valentine e Edmund beberam e fumaram juntos por horas."
            },
            {
                id: "documentos",
                nomePonto: "🔍 cadeira e copo quebrados",
                imagemDetalhe: "img/sala_reuniao_documentos.jpg",
                descricaoDetalhe: "Uma cadeira fora do lugar e um copo quebrado parece que alguem saiu com muita raiva possivelmente depois de uma discussao acalorada.",
                pista: "Sala de Reunião: Dr. Valentine pressionava Edmund sobre litígios financeiros."
            },
            {
                id: "cadeira",
                nomePonto: "🔍 Relógio Quebrado",
                imagemDetalhe: "img/sala_reuniao_cadeira.jpg",
                descricaoDetalhe: "O relogio que foi estampado por todos os jornais apos a morte de Edmund, esta quebrado exatamente de 23:47, os medicos nao sabem que horas Edmund morreu, mas os policiais sabem que entrou na sala de reuniao.",
                pista: "Relogio da Sala de Reunião: O relógio parou às 23:47."
            }
        ]
    },
    quarto_thomas: {
        nome: "QUARTO DO THOMAS",
        imagemGeral: "img/quarto_thomas_geral.jpg",
        descricaoGeral: "Um quarto bagunçado com cheiro forte de bebida e tabaco. O que você quer examinar?",
        pontosInteresse: [
            {
                id: "escrivaninha",
                nomePonto: "🔍 Examinar Escrivaninha",
                imagemDetalhe: "img/quarto_thomas_escrivaninha.jpg",
                descricaoDetalhe: "Cartas cobrando dívidas altíssimas de jogo, com ameaças graves e prazo de pagamento vencido exatamente no dia do assassinato.",
                pista: "Quarto do Thomas: Dívidas de jogo altíssimas com ameaças de morte vencidas no dia do crime."
            },
            {
                id: "armario",
                nomePonto: "🔍 Checar Armário",
                imagemDetalhe: "img/quarto_thomas_armario.jpg",
                descricaoDetalhe: "No fundo do guarda-roupa, há um sobretudo escuro ainda úmido e com respingos frescos de lama na barra.",
                pista: "Quarto do Thomas: Sobretudo úmido e sujo de lama encontrado escondido no armário."
            },
            {
                id: "bolso",
                nomePonto: "🔍 Vasculhar Casaco Jogado na Cama",
                imagemDetalhe: "img/quarto_thomas_bolso.jpg",
                descricaoDetalhe: "No bolso do casaco há uma pequena chave antiga que parece abrir alguma gaveta ou porta secreta da mansão.",
                pista: "Quarto do Thomas: Uma chave mestre desconhecida foi achada no bolso do sobrinho."
            }
        ]
    },
    quarto_vanessa: {
        nome: "QUARTO DA VANESSA",
        imagemGeral: "img/quarto_vanessa_geral.jpg",
        descricaoGeral: "Quarto elegante e impecavelmente arrumado. Onde deseja procurar pistas?",
        pontosInteresse: [
            {
                id: "penteadeira",
                nomePonto: "🔍 Olhar Penteadeira",
                imagemDetalhe: "img/quarto_vanessa_penteadeira.jpg",
                descricaoDetalhe: "Entre os frascos de perfume e maquiagem, há um pequeno pote de porcelana e um frasco com conta-gotas rotulado 'Extrato de Beladona'. Ao lado, um recibo da Farmácia Botânica confirma a compra da substância altamente tóxica.",
                pista: "Quarto da Vanessa: Pote de Beladona e recibo da farmácia confirmam a compra da substância venenosa."
            },
            
            {
                id: "livro_secreto",
                nomePonto: "🔍 Inspecionar Livro de Botânica na Estante",
                imagemDetalhe: "img/quarto_vanessa_livro.jpg", // Nome da foto do livro aberto se quiser
                descricaoDetalhe: "Um pesado tratado de botânica e ervas venenosas. Ao abrir a capa, cai de dentro um pequeno cartão amassado de uma floricultura local, com a compra de sementes de Beladona (planta altamente tóxica).",
                pista: "Quarto da Vanessa: Recibo de uma floricultura revela a compra de sementes de Beladona, a mesma substância achada na xícara."
            },
            {
                id: "gaveta",
                nomePonto: "🔍 Checar Gavetas da Escrivaninha",
                imagemDetalhe: "img/quarto_vanessa_gaveta.jpg",
                descricaoDetalhe: "Documentos e correspondências com advogados discutindo como anular qualquer testamento em favor de terceiros.",
                pista: "Quarto da Vanessa: Vanessa tentava juridicamente bloquear a alteração da herança."
            }
        ]
    },
    quarto_elena: {
        nome: "QUARTO DA ELENA",
        imagemGeral: "img/quarto_elena_geral.jpg",
        descricaoGeral: "O quarto da empregada é modesto e extremamente limpo. Onde prefere investigar?",
        pontosInteresse: [
            {
                id: "criado",
                nomePonto: "🔍 Olhar Criado-Mudo",
                imagemDetalhe: "img/quarto_elena_criado.jpg",
                descricaoDetalhe: "Dentro do criado-mudo há uma caixinha de veludo aberta com uma aliança de noivado de diamantes dada por Edmund.",
                pista: "Quarto da Elena: Uma aliança de noivado valiosa guardada no gaveteiro."
            },
            {
                id: "armario_elena",
                nomePonto: "🔍 Examinar Armário",
                imagemDetalhe: "img/quarto_elena_armario.jpg",
                descricaoDetalhe: "Aventais limpos e uma carta romântica guardada cuidadosamente, assinada carinhosamente com a letra de Edmund.",
                pista: "Quarto da Elena: Cartas confirmam um romance sério e duradouro com o patrão."
            },
            {
                id: "bilhete",
                nomePonto: "🔍 Inspecionar Debaixo do Travesseiro",
                imagemDetalhe: "img/quarto_elena_bilhete.jpg",
                descricaoDetalhe: "Um bilhete anônimo com letras recortadas de jornal: 'Afaste-se do testamento ou você pagará com a vida esta noite'.",
                pista: "Quarto da Elena: Elena recebeu ameaças de morte anônimas para desistir da herança."
            }
        ]
    }
};

// ESTADO DO JOGO
let locaisExplorados = new Set();
let cadernoAnotacoes = [];
let localAtual = null;
let intervaloTexto = null;

// ELEMENTOS DOM
const telaPlanta = document.getElementById("telaPlanta");
const telaCommodo = document.getElementById("telaCommodo");
const fundoCommodo = document.getElementById("fundoCommodo");

const nomeLocal = document.getElementById("nomeLocal");
const descricaoLocal = document.getElementById("descricaoLocal");
const containerPistas = document.getElementById("containerPistas");

const btnVoltarPlanta = document.getElementById("btnVoltarPlanta");
const btnVoltarEscolhas = document.getElementById("btnVoltarEscolhas");
const overlayTransicao = document.getElementById("overlayTransicao");

const btnCaderno = document.getElementById("btnCaderno");
const modalCaderno = document.getElementById("modalCaderno");
const fecharCaderno = document.getElementById("fecharCaderno");
const listaAnotacoes = document.getElementById("listaAnotacoes");

// INICIALIZAÇÃO
window.addEventListener("DOMContentLoaded", () => {
    if (telaPlanta) telaPlanta.classList.add("ativa");
});

// ANIMAÇÃO DE TEXTO (DIGITAÇÃO)
function digitarTexto(elemento, texto, velocidade = 30) {
    if (!elemento) return;
    if (intervaloTexto) clearInterval(intervaloTexto);

    elemento.textContent = "";
    let index = 0;

    intervaloTexto = setInterval(() => {
        if (index < texto.length) {
            elemento.textContent += texto.charAt(index);
            index++;
        } else {
            clearInterval(intervaloTexto);
            intervaloTexto = null;
        }
    }, velocidade);
}

// TRANSIÇÕES FADE
function executarTransicao(callback) {
    if (!overlayTransicao) {
        callback();
        return;
    }
    overlayTransicao.classList.add("ativo");
    setTimeout(() => {
        callback();
        setTimeout(() => {
            overlayTransicao.classList.remove("ativo");
        }, 300);
    }, 600);
}

// SELEÇÃO DOS CÔMMODOS NA PLANTA
document.querySelectorAll(".ponto-commodo").forEach(btn => {
    btn.addEventListener("click", () => {
        const idLocal = btn.getAttribute("data-local");
        executarTransicao(() => {
            abrirCommodo(idLocal, btn);
        });
    });
});

function abrirCommodo(id, elementoBtn) {
    localAtual = dadosLocais[id];
    localAtual.id = id;

    // Carrega a imagem GERAL do cômodo
    if (fundoCommodo) {
        fundoCommodo.style.backgroundImage = `url('${localAtual.imagemGeral}')`;
    }

    if (nomeLocal) nomeLocal.textContent = localAtual.nome;
    digitarTexto(descricaoLocal, localAtual.descricaoGeral, 30);

    renderizarPontosInteresse(localAtual.pontosInteresse);

    locaisExplorados.add(id);
    if (elementoBtn) elementoBtn.classList.add("explorado");

    if (telaPlanta) telaPlanta.classList.remove("ativa");
    if (telaCommodo) telaCommodo.classList.add("ativa");
}

function renderizarPontosInteresse(pontos) {
    if (!containerPistas) return;
    containerPistas.innerHTML = "";

    pontos.forEach(ponto => {
        const btn = document.createElement("button");
        btn.className = "btn-pergunta";
        btn.textContent = ponto.nomePonto;
        btn.onclick = () => investigarPonto(ponto, btn);
        containerPistas.appendChild(btn);
    });
}

// AÇÃO DE DAR ZOOM E EXAMINAR UM PONTO ESPECÍFICO
function investigarPonto(ponto, elementoBtn) {
    // Altera a imagem do fundo para a imagem de DETALHE/ZOOM
    if (fundoCommodo) {
        fundoCommodo.style.backgroundImage = `url('${ponto.imagemDetalhe}')`;
    }

    // Exibe o texto de detalhe e grava a pista
    digitarTexto(descricaoLocal, ponto.descricaoDetalhe, 30);
    adicionarCaderno(localAtual.nome, ponto.pista);

    // Desabilita o botão para indicar que já foi investigado
    elementoBtn.disabled = true;
    elementoBtn.style.opacity = "0.5";
    elementoBtn.textContent += " ✓ (EXAMINADO)";
}

// BOTÃO VOLTAR À PLANTA DA MANSÃO
if (btnVoltarPlanta) {
    btnVoltarPlanta.addEventListener("click", () => {
        executarTransicao(() => {
            if (telaCommodo) telaCommodo.classList.remove("ativa");
            if (telaPlanta) telaPlanta.classList.add("ativa");

            // Exibe o botão de conclusão quando os 6 cômodos forem explorados
            if (locaisExplorados.size === 6 && btnVoltarEscolhas) {
                btnVoltarEscolhas.classList.remove("oculto");
            }
        });
    });
}


// CADERNO DE ANOTAÇÕES
function adicionarCaderno(nome, pista) {
    // Evita duplicar a mesma pista no caderno
    const jaExiste = cadernoAnotacoes.some(a => a.pista === pista);
    if (!jaExiste) {
        cadernoAnotacoes.push({ nome, pista });
        atualizarCadernoUI();
    }
}

function atualizarCadernoUI() {
    if (!listaAnotacoes) return;

    if (cadernoAnotacoes.length === 0) {
        listaAnotacoes.innerHTML = `<p class="caderno-vazio">Nenhuma anotação registrada ainda.</p>`;
        return;
    }

    listaAnotacoes.innerHTML = "";
    cadernoAnotacoes.forEach(item => {
        const div = document.createElement("div");
        div.className = "item-anotacao";
        div.innerHTML = `<strong>${item.nome}:</strong> ${item.pista}`;
        listaAnotacoes.appendChild(div);
    });
}

// ÁUDIO E MÚSICA DE FUNDO
const musica = document.getElementById("musicaInvestigacao");
const botaoSom = document.getElementById("botaoSom");

let musicaTocando = false;

if (botaoSom) {
    botaoSom.addEventListener("click", () => {
        if (!musica) return;

        if (musica.paused) {
            musica.play().then(() => {
                musicaTocando = true;
                botaoSom.textContent = "🔊";
            }).catch(err => console.log("Erro ao reproduzir:", err));
        } else {
            musica.pause();
            musicaTocando = false;
            botaoSom.textContent = "🔇";
        }
    });
}

if (btnCaderno) btnCaderno.addEventListener("click", () => modalCaderno && modalCaderno.classList.remove("oculto"));
if (fecharCaderno) fecharCaderno.addEventListener("click", () => modalCaderno && modalCaderno.classList.add("oculto"));
// Substitui 'idDoTeuBotao' pelo ID exato que está no teu HTML
const btnVoltarMenu = document.getElementById('btnVoltarMenu'); 
if (btnVoltarMenu) {
    btnVoltarMenu.addEventListener('click', () => {
        window.location.href = 'intro.html#cena8';
    });
}