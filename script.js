const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const CHOICES = [ROCK,PAPER,SCISSORS];

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    let result = ``;
    if (playerSelection.toLowerCase() === ROCK.toLowerCase()) {
        if (computerSelection === ROCK) {
            result = `Tie! You both used ${ROCK}`;
        }
        else if (computerSelection === PAPER) {
            result = `You Lose! ${PAPER} beats ${ROCK}`;
        }
        else {
            result = `You Win! ${ROCK} beats ${SCISSORS}`;
        }
    }
    else if (playerSelection.toLowerCase() === PAPER.toLowerCase()) {
        if (computerSelection === ROCK) {
            result = `You Win! ${PAPER} beats ${ROCK}`;
        }
        else if (computerSelection === PAPER) {
            result = `Tie! You both used ${PAPER}`;
        }
        else {
            result = `You Lose! ${SCISSORS} beats ${PAPER}`;
        }
    }
    else {
        if (computerSelection === ROCK) {
            result = `You Lose! ${ROCK} beats ${SCISSORS}`;
        }
        else if (computerSelection === PAPER) {
            result = `You Win! ${SCISSORS} beats ${PAPER}`;
        }
        else {
            result = `Tie! You both used ${SCISSORS}`;
        }
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("Lose")) {
            computerScore ++;
        }
        else if (roundResult.includes("Win")) {
            playerScore ++;
        }
    }
    if (playerScore > computerScore) {
        return `Congratulations! You win the game by a score of ${playerScore} vs ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        return `Oh no! You lose the game by a score of ${playerScore} vs ${computerScore}`;
    }
    else {
        return `It's a tie! You both won ${playerScore} rounds.`;
    }
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
    let roundResult = playRound(ROCK, computerPlay());
    const result = document.createElement('div');
    result.setAttribute('style', 'white-space: pre;');
    if (roundResult.includes("Lose")) {
        computerScore ++;
    }
    else if (roundResult.includes("Win")) {
        playerScore ++;
    }
    if (playerScore === 5) {
        result.textContent = roundResult + "! The score is Player: " + playerScore + ", Computer: " + computerScore + "\r\n";
        result.textContent += `The game is over! You win by a score of ${playerScore} vs ${computerScore}`;
    }
    else if (computerScore === 5) {
        result.textContent = roundResult + "! The score is Player: " + playerScore + ", Computer: " + computerScore + "\r\n";
        result.textContent += `The game is over! You lose by a score of ${playerScore} vs ${computerScore}`;
    }
    else {
        result.textContent = roundResult + '! The score is ' + 'Player: ' + playerScore + ', Computer: ' + computerScore;
    }
    results.appendChild(result);});

paperBtn.addEventListener('click', () => {
    let roundResult = playRound(PAPER, computerPlay());
    const result = document.createElement('div');
    result.setAttribute('style', 'white-space: pre;');
    if (roundResult.includes("Lose")) {
        computerScore ++;
    }
    else if (roundResult.includes("Win")) {
        playerScore ++;
    }
    if (playerScore === 5) {
        result.textContent = roundResult + "! The score is Player: " + playerScore + ", Computer: " + computerScore + "\r\n";
        result.textContent += `The game is over! You win by a score of ${playerScore} vs ${computerScore}`;
    }
    else if (computerScore === 5) {
        result.textContent = roundResult + "! The score is Player: " + playerScore + ", Computer: " + computerScore + "\r\n";
        result.textContent += `The game is over! You lose by a score of ${playerScore} vs ${computerScore}`;
    }
    else {
        result.textContent = roundResult + '! The score is ' + 'Player: ' + playerScore + ', Computer: ' + computerScore;
    }
    results.appendChild(result);});

scissorsBtn.addEventListener('click', () => {
    let roundResult = playRound(SCISSORS, computerPlay());
    const result = document.createElement('div');
    result.setAttribute('style', 'white-space: pre;');
    if (roundResult.includes("Lose")) {
        computerScore ++;
    }
    else if (roundResult.includes("Win")) {
        playerScore ++;
    }
    if (playerScore === 5) {
        result.textContent = roundResult + "! The score is Player: " + playerScore + ", Computer: " + computerScore + "\r\n";
        result.textContent += `The game is over! You win by a score of ${playerScore} vs ${computerScore}`;
    }
    else if (computerScore === 5) {
        result.textContent = roundResult + "! The score is Player: " + playerScore + ", Computer: " + computerScore + "\r\n";
        result.textContent += `The game is over! You lose by a score of ${playerScore} vs ${computerScore}`;
    }
    else {
        result.textContent = roundResult + '! The score is ' + 'Player: ' + playerScore + ', Computer: ' + computerScore;
    }
    results.appendChild(result);});

const results = document.createElement('div');
const container = document.querySelector('body');

container.appendChild(results);

