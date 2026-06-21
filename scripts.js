// Mapeia e captura os elementos do HTML usando seus IDs para podermos manipulá-los
const result = document.getElementById('result');
const humanScoreSpan = document.getElementById('score');
const machineScoreSpan = document.getElementById('computer-score');

// Variáveis de controle para armazenar as pontuações (começam em zero)
let humanScoreNumber = 0;
let machineScoreNumber = 0;

// ENUM - Centraliza as opções do jogo para evitar erros de digitação
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
 
// Função principal acionada pelo clique do usuário no HTML
const playHuman = (humanChoice) => {
    // Inicia o jogo passando a escolha do humano e chamando a função da máquina
    playTheGame(humanChoice, playMachine());
}

// Função responsável por gerar a jogada aleatória do computador
const playMachine = () => {
    // Usa as propriedades do ENUM para montar o array de opções
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]; 
    
    // Gera um índice aleatório inteiro entre 0 e 2
    const randomNumber = Math.floor(Math.random() * 3); 
    
    return choices[randomNumber]; 
}

// Função que processa as regras do jogo e decide o vencedor
const playTheGame = (human, machine) => {
    // Exibe no console do navegador para fins de debug e testes
    console.log('Humano: ' + human + ' | Máquina: ' + machine);

    // Objeto auxiliar usando as chaves do ENUM para transformar o texto interno em emojis
    const emojiMap = { 
        [GAME_OPTIONS.ROCK]: '👊', 
        [GAME_OPTIONS.PAPER]: '✋', 
        [GAME_OPTIONS.SCISSORS]: '✌️' 
    };

    // Regra 1: Se ambos escolherem a mesma coisa, é Empate
    if (human === machine) {
        result.innerHTML = `Deu empate! 🤝 <br><small>Ambos escolheram ${emojiMap[human]}</small>`;
    
    // Regra 2: Condições onde o Humano ganha da Máquina (todas comparadas usando o ENUM)
    } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || // Pedra quebra Tesoura
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||    // Papel embrulha Pedra
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)   // Tesoura corta Papel
    ) {
        result.innerHTML = `Você ganhou! 🎉 <br><small>${emojiMap[human]} vence ${emojiMap[machine]}</small>`;
        humanScoreNumber++; // Incrementa 1 ponto na variável do humano
        humanScoreSpan.innerHTML = humanScoreNumber; // Atualiza o novo valor na tela
    
    // Regra 3: Se não empatou e o humano não ganhou, a Máquina venceu
    } else {
        result.innerHTML = `Você perdeu! 😢 <br><small>${emojiMap[machine]} vence ${emojiMap[human]}</small>`;
        machineScoreNumber++; // Incrementa 1 ponto na variável da máquina
        machineScoreSpan.innerHTML = machineScoreNumber; // Atualiza o novo valor na tela
    }
}
