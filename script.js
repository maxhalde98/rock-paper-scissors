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

alert(game());
