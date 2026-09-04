let pontos = {
    Steven: 0,
    Amethyst: 0,
    Lapis: 0,
    Pearl: 0,
    Garnet: 0
};

let perguntasRespondidas = 0;

function responder(personagem, numeroPergunta, botao) {

    // Evita responder a mesma pergunta duas vezes
    if (botao.parentElement.classList.contains("respondida")) {
        return;
    }

    pontos[personagem]++;
    perguntasRespondidas++;

    // Marca a pergunta como respondida
    botao.parentElement.classList.add("respondida");

    // Destaca a resposta escolhida
    botao.classList.add("selecionado");

    // Se respondeu todas as perguntas
    if (perguntasRespondidas === 10) {
        mostrarResultado();
    }
}

function mostrarResultado() {

    let personagem = Object.keys(pontos).reduce(function(a, b) {
        return pontos[a] > pontos[b] ? a : b;
    });

    let resultado = document.getElementById("resultado");

    let mensagens = {

        Steven: `
            <img src="img/1.png" alt="Steven Universe" style="width: 200px; height: auto;">'
            <h2>💗 Você é o Steven!</h2>
            <p>Você é carinhoso, empático e sempre tenta ajudar quem está ao seu redor. 
            Você acredita que as pessoas podem resolver seus problemas juntas!</p>
        `,

        Amethyst: `
            <img src="img/2.png" alt="Amethyst" style="width: 200px; height: auto;">            
            <h2>💜 Você é a Amethyst!</h2>
            <p>Você é divertido, espontâneo e não tem medo de ser você mesmo. 
            Adora se divertir e transformar qualquer situação em uma aventura.</p>
        `,

        Lapis: `
         <img src="img/lapis.png" alt="Lapis Lazuli" style="width: 200px; height: auto;">
            <h2>💙 Você é a Lapis Lazuli!</h2>
            <p>Você é independente, sensível e valoriza muito sua liberdade. 
            Às vezes prefere ficar sozinho, mas se importa profundamente com quem ama.</p>
        `,

        Pearl: `
        <img src="img/perola.png" alt="Pearl" style="width: 200px; height: auto;">
            <h2>🤍 Você é a Pearl!</h2>
            <p>Você é responsável, cuidadoso e perfeccionista. 
            Quando alguém precisa de ajuda, você sempre tenta encontrar a melhor solução.</p>
        `,

        Garnet: `
            <img src="img/garnet.png" alt="Garnet" style="width: 200px; height: auto;">
            <h2>❤️ Você é a Garnet!</h2>
            <p>Você é confiante, determinado e sabe exatamente quem é. 
            É uma pessoa forte que valoriza a confiança, o amor e a união.</p>
        `
    };

    resultado.innerHTML = mensagens[personagem];

    resultado.scrollIntoView({
        behavior: "smooth"
    });
}