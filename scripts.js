// Captura dos IDs corretos presentes no HTML
const result = document.getElementById('result');
const humanScoreSpan = document.getElementById('score');
const machineScoreSpan = document.getElementById('computer-score');

// Contadores numéricos persistentes da aplicação
let humanScoreNumber = 0;
let machineScoreNumber = 0;
 
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' | Máquina: ' + machine);

    // Mapeamento dos termos internos para emojis legíveis no resultado final
    const emojiMap = { 'rock': '👊', 'paper': '✋', 'scissors': '✌️' };

    if (human === machine) {
        result.innerHTML = `Deu empate! 🤝 <br><small>Ambos escolheram ${emojiMap[human]}</small>`;
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        result.innerHTML = `Você ganhou! 🎉 <br><small>${emojiMap[human]} vence ${emojiMap[machine]}</small>`;
        humanScoreNumber++;
        humanScoreSpan.innerHTML = humanScoreNumber;
    } else {
        result.innerHTML = `Você perdeu! 😢 <br><small>${emojiMap[machine]} vence ${emojiMap[human]}</small>`;
        machineScoreNumber++;
        machineScoreSpan.innerHTML = machineScoreNumber;
    }
}
