// BANCO DE DADOS DOS SUSPEITOS, PERGUNTAS E ANOTAÇÕES
const dadosSuspeitos = {
    thomas: {
        nome: "THOMAS RAVENWOOD",
        cargo: "SOBRINHO",
        imagemFundo: "img/thomasinterrogatorio.jpg",
        falaInicial: "Com licença, detetive. Espero que isso seja rápido, não tenho muito tempo a perder.",
        perguntas: [
            {
                id: 1,
                texto: "Me conte Thomas, o que você estava fazendo na noite do crime?",
                resposta: "Eu... Estava bebendo whiskey na sala de estar porém por volta das 23:30 da noite,  meu tio me chamou para discutir sobre dinheiro. Ele cortou a mesada que me dava e tivemos uma discussão acalorada, talvez eu tenha deixado o relógio dele cair no chão, mas eu não o matei.",
                pista: "Thomas discutiu com o tio por dinheiro pouco antes do crime e derrubou o relógio."
            },
            {
                id: 2,
                texto: "O que voce sabe do testamento do seu tio? Ele estava alterando o testamento recentemente?",
                resposta: "Você acha que eu matei meu tio por dinheiro? Eu não faria isso, mas sim, ele estava alterando o testamento recentemente, e que eu saiba Vanessa estava preocupada com isso. Não sabia o que ia mudar no testamento, pelo o que eu sabia não havia motivos para mudar o testamento.",
                pista: "Thomas afirma que sabia sobre as alterações no testamento."
            },
            {
                id: 3,
                texto: "Você viu uma movimentação estranha nos últimos dias? Algum comportamento suspeito de alguém da família?",
                resposta: "Pode parecer bobagem, mas vi Edmund olhando constantemente pra Elena... Não sei se deveria dizer isso mas, uma vez vi Edmund na cozinha com ela e eles pareciam bastante próximos, pode também ser apenas uma interpretação minha.",
                pista: "Thomas apontou que Edmund e Elena tinham um relacionamento suspeito."
            }
        ]
    },
    advogado: {
        nome: "DR. VALENTINE",
        cargo: "ADVOGADO",
        imagemFundo: "img/advogadointerrogatorio.jpg",
        falaInicial: "Detetive. Exijo que conduza este procedimento com total discrição profissional.",
        perguntas: [
            {
                id: 1,
                texto: "Qual era o assunto da sua reunião com Edmund?",
                resposta: "Estávamos alterando o testamento. Edmund planejava adicionar mais uma pessoa ao testamento, pretendia anúnciar a mudança em breve, mas não posso dizer seu nome.",
                pista: "O Dr. Valentine confirmou que o testamento estava sendo alterado para adicionar um herdeiro."
            },
            {
                id: 2,
                texto: "Por que você dormiu na mansão na noite do crime?",
                resposta: "Após nossa reunião, Edmund comecou a falar sobre o sobrinho que estava viciado em apostas.. Não sei se deveria dizer isso. De qualquer forma bebemos whisky, fumamos charutos juntos, no final estava muito tarde para eu voltar para casa, ele falou para eu dormir em sua mansão e falou que ia dar um jeito no sobrinho.",
                pista: "Dr. Valentine afirma que Thomas estava viciado em apostas e que o Edmundo estava irritado com isso."
            },
            {
                id: 3,
                texto: "Qual era a mudança do testamento que Edmund estava fazendo? Ele mencionou algum nome?",
                resposta: "Talvez eu ferre... quer dizer condene alguém por isso, mas ele estava adicionando Elena Austen em seu testamento, ele pretendia pedir ela em casamento, mas com a morte do Sr. Ravenwood o processo foi interrompido e o testamento continua com apenas um herdeiro.",
                pista: "Dr. Valentine afirma Edmundo estava adiconando Elena Austen ao testamento, mas foi interrompido com sua morte."
            }
        ]
    },
    empregada: {
        nome: "ELENA AUSTEN",
        cargo: "EMPREGADA",
        imagemFundo: "img/empregadainterrogatorio.jpg",
        falaInicial: "S-sim, detetive? Eu juro que não sei de nada... Por favor...",
        perguntas: [
            {
                id: 1,
                texto: "O que aconteceu naquela noite?",
                resposta: "Ele estava conversando com  o Dr. Valentine quando me chamou para o servir uma xícara de café. Eu achei estranho por que o médico do Sr. Ravenwood pediu que ele não tomasse café a noite, mas ele disse que ia ser uma noite longa e que precisava de cafeína. Eu fui preparar o café... E eu lembro de já ter uma xícara lá na cozinha, mas pode ter sido de alguém que tinha preparado e... As xícaras eram iguais e talvez eu tenha me confundido... SERÁ QUE HAVIA ALGO NAQUELE COPO? Não poderia ser o Ed era tão bom.",
                pista: "Já havia uma xícara na cozinha antes de Elena preparar o café."
            },
            {
                id: 2,
                texto: "Qual é a sua relação com o Sr. Edmund? Ele confiava em você?",
                resposta: "Minha relação com Ed? Quer dizer Senhor Ravenwood? Ele era um homem adorável cheio de paixão eu o ama... Eu gostava muito dele e estou de coração partido pela sua morte - comeca a chorar - Nossa relação era muito próxima. Mas sinto que Vanessa não gostava de mim, ela me olhava com ódio nos olhos, nunca entendi o motivo",
                pista: "Vanessa não gostava de Elena."
            },
            {
                id: 3,
                texto: "Você sabia que Edmund estava alterando o testamento para adicionar o SEU NOME?",
                resposta: "Ed estava adicionando meu nome ao testamento? Eu não sabia disso... Eu admito, eu e Ed... Sr. Ravenwood estavamos muito apaixonados, aconteceu devagar mas nós nos apaixonamos e um dia vi no seu escritório uma caixinha com uma aliança de noivado e ele me pediu em casamento... Eu não sabia que ele ia adicionar meu nome ao testamento. Ele pretendia contar as outras pessoas logo, estava muito ansioso com o casamento, seria um recomeço - comecar a chorar - Não acredito que o meu amor partiu... Se eu soubesse que Dr. Valentine estava lá para a mudança do testamento, teria proibido Ed de mudar o testamento. Ele fez aquele dinheiro com muito suor!",
                pista: "Elena tinha um caso com Sr. Ravenwood e ele pretendia se casar com ela, mas a mudança no testamento foi interrompida com sua morte."
            }
        ]
    },
    vanessa: {
        nome: "VANESSA RAVENWOOD",
        cargo: "FILHA",
        imagemFundo: "img/vanessainterrogatorio.jpg",
        falaInicial: "Detetive... diga que isso é um pesadelo. Isso era para jamais ter acontecido. Isso é um pesadelo total.",
        perguntas: [
            {
                id: 1,
                texto: "O que aconteceu naquela noite?",
                resposta: "Eu fui em uma loja de roupas com minha amiga, foi ótimo! Quando eu cheguei encontrei a nossa empregada fazendo as coisas de sempre... Nunca entendi dele ter contratado ela, sempre achei ela uma emprestável. Eu jantei sozinha, pois meu pai estava conversando com Dr. Valentine, depois disso eu fui para o meu quarto e fiquei lá ate a hora de dormir. Eu não ouvi nada, mas quando acordei descobri a notícia! EU NÃO ACREDITO QUE ISSO ACONTECEU!",
                pista: "Vanessa disse que estava dormindo na hora do crime"
            },
            {
                id: 2,
                texto: "Você sabia das alterações no testamento?",
                resposta: "ALTERÇÃO NO TESTAMENTO? Eu sabia que ele queria aquela louca... Mas eu nunca imaginei que ele colocaria o nome dela no testamento! Como eu sabia que Elena e meu pai estavam juntos? Eu vi ele beijando ela na cozinha - comeca a ficar com raiva- EU QUERIA AQUELA MULHER MORTA!",
                pista: "Vanessa não sabia das alterações no testamento, mas sabia que seu pai tinha um caso com Elena. Vanessa ficou com raiva de Elena por isso."
            },
            {
                id: 3,
                texto: "Por que no seu quarto tinha um livro de ervas medicinais?",
                resposta: "UM LIVRO DE ERVAS MEDICINAIS? Eu jamais teria um livro de ervas medicinais. O que você esta querendo dizer? QUE EU MATEI MEU PRÓPRIO PAI? Estão querendo me incriminar com certeza eu jamais faria isso com MEU PAI- comecar a ficar nervosa- MAS COM TODA CERTEZA AQUELA ELENA PODERIA TER FEITO ALGO!! EU ODEIO AQUELA MULHER.",
                pista: "Vanessa parece ter ficado nervosa ao ser questionada sobre o livro de ervas medicinais."
            }
        ]
    }
};

// ESTADO DO JOGO
let suspeitoAtual = null;
let perguntasRespondidas = new Set();
let interrogatoriosFinalizados = new Set();
let cadernoAnotacoes = [];
let intervaloTexto = null;

// ELEMENTOS DOM
const musica = document.getElementById("musicaInterrogatorio");
const botaoSom = document.getElementById("botaoSom");
const overlayTransicao = document.getElementById("overlayTransicao");

const telaSelecao = document.getElementById("telaSelecao");
const telaInterrogatorio = document.getElementById("telaInterrogatorio");
const bgPersonagem = document.getElementById("bgPersonagem");

const nomePersonagem = document.getElementById("nomePersonagem");
const falaPersonagem = document.getElementById("falaPersonagem");
const containerPerguntas = document.getElementById("containerPerguntas");

const btnCaderno = document.getElementById("btnCaderno");
const modalCaderno = document.getElementById("modalCaderno");
const fecharCaderno = document.getElementById("fecharCaderno");
const listaAnotacoes = document.getElementById("listaAnotacoes");
const btnVoltarInicio = document.getElementById("btnVoltarInicio");

// INICIALIZAÇÃO DA PÁGINA
window.addEventListener("DOMContentLoaded", () => {
    if (telaSelecao) {
        telaSelecao.classList.add("ativa");
    }
});

// SISTEMA DE ÁUDIO
let musicaTocando = false;
function iniciarMusica() {
    if (!musica) return;
    musica.play().then(() => {
        musicaTocando = true;
        if (botaoSom) botaoSom.textContent = "🔊";
    }).catch(() => {
        if (botaoSom) botaoSom.textContent = "🔇";
    });
}

if (botaoSom) {
    botaoSom.addEventListener("click", () => {
        if (!musica) return;
        if (musica.paused) {
            musica.play();
            botaoSom.textContent = "🔊";
        } else {
            musica.pause();
            botaoSom.textContent = "🔇";
        }
    });
}

// ANIMAÇÃO DE TEXTO (DIGITAÇÃO/TYPEWRITER)
function digitarTexto(elemento, texto, velocidade = 35) {
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
    }, 800);
}

// NAVEGAÇÃO E INTERROGATÓRIO
document.querySelectorAll(".card-suspeito").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        if (interrogatoriosFinalizados.has(id)) return;

        executarTransicao(() => {
            abrirInterrogatorio(id);
        });
    });
});

function abrirInterrogatorio(id) {
    suspeitoAtual = dadosSuspeitos[id];
    suspeitoAtual.id = id;
    perguntasRespondidas.clear();

    if (bgPersonagem) {
        bgPersonagem.style.backgroundImage = `url('${suspeitoAtual.imagemFundo}')`;
    }
    
    if (nomePersonagem) {
        nomePersonagem.textContent = `${suspeitoAtual.nome} — ${suspeitoAtual.cargo}`;
    }

    digitarTexto(falaPersonagem, `"${suspeitoAtual.falaInicial}"`, 35);

    renderizarPerguntas();

    if (telaSelecao) telaSelecao.classList.remove("ativa");
    if (telaInterrogatorio) telaInterrogatorio.classList.add("ativa");
}

function renderizarPerguntas() {
    if (!containerPerguntas) return;
    containerPerguntas.innerHTML = "";

    suspeitoAtual.perguntas.forEach(p => {
        if (!perguntasRespondidas.has(p.id)) {
            const btn = document.createElement("button");
            btn.className = "btn-pergunta";
            btn.textContent = p.texto;
            btn.onclick = () => responderPergunta(p);
            containerPerguntas.appendChild(btn);
        }
    });

    if (perguntasRespondidas.size === suspeitoAtual.perguntas.length) {
        const btnFim = document.createElement("button");
        btnFim.className = "btn-pergunta fim-btn";
        btnFim.textContent = `FIM DO INTERROGATÓRIO DE ${suspeitoAtual.nome}`;
        btnFim.onclick = concluirInterrogatorio;
        containerPerguntas.appendChild(btnFim);
    }
}

function responderPergunta(pergunta) {
    digitarTexto(falaPersonagem, `"${pergunta.resposta}"`, 35);
    perguntasRespondidas.add(pergunta.id);

    adicionarCaderno(suspeitoAtual.nome, pergunta.pista);
    renderizarPerguntas();
}

function concluirInterrogatorio() {
    interrogatoriosFinalizados.add(suspeitoAtual.id);

    const card = document.querySelector(`.card-suspeito[data-id="${suspeitoAtual.id}"]`);
    if (card) card.classList.add("concluido");

    executarTransicao(() => {
        if (telaInterrogatorio) telaInterrogatorio.classList.remove("ativa");
        if (telaSelecao) telaSelecao.classList.add("ativa");

        if (interrogatoriosFinalizados.size === 4 && btnVoltarInicio) {
            btnVoltarInicio.classList.remove("oculto");
        }
    });
}

// SISTEMA DE CADERNO DE ANOTAÇÕES
function adicionarCaderno(nome, pista) {
    cadernoAnotacoes.push({ nome, pista });
    atualizarCadernoUI();
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

if (btnCaderno) btnCaderno.addEventListener("click", () => modalCaderno && modalCaderno.classList.remove("oculto"));
if (fecharCaderno) fecharCaderno.addEventListener("click", () => modalCaderno && modalCaderno.classList.add("oculto"));

if (btnVoltarInicio) {
    btnVoltarInicio.addEventListener("click", () => {
        executarTransicao(() => {
            window.location.href = "intro.html#cena8";
        });
    });
}

// AUTOSTART ÁUDIO
document.body.addEventListener("click", function autostartMusica() {
    if (!musicaTocando) {
        iniciarMusica();
    }
    document.body.removeEventListener("click", autostartMusica);
});
function abrirInterrogatorio(id) {
    suspeitoAtual = dadosSuspeitos[id];
    suspeitoAtual.id = id;
    perguntasRespondidas.clear();

    const bgPersonagem = document.getElementById("bgPersonagem");
    if (bgPersonagem) {
        // Aplica o caminho da imagem exatamente como definido no objeto
        bgPersonagem.style.backgroundImage = `url('${suspeitoAtual.imagemFundo}')`;
    }

    if (nomePersonagem) {
        nomePersonagem.textContent = `${suspeitoAtual.nome} — ${suspeitoAtual.cargo}`;
    }

    digitarTexto(falaPersonagem, `"${suspeitoAtual.falaInicial}"`, 35);
    renderizarPerguntas();

    telaSelecao.classList.remove("ativa");
    telaInterrogatorio.classList.add("ativa");
}