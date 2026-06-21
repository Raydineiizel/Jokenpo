const result = document.querySelector('.result');
 
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber =Math.floor(Math.random() * 3)
    
    return choices[randomNumber];
}
const playTheGame = (human, machine) => {
    console.log('human: ' + human + 'Maquina: ' + machine)
}
if(human === machine) {
    result.innerHTML = 'Deu empate!'
} else if ((human === 'rock' && machine === 'scissors') ||
           (human === 'paper' && machine === 'rock') ||
           (human === 'scissors' && machine === 'paper')) {
    result.innerHTML = 'Você ganhou!'
} else {
    result.innerHTML = 'Você perdeu!'

    
}