let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return 'rock';
    } else if (computerChoice == 1) {
        return 'paper';
    } else if (computerChoice == 2) {
        return 'scissors';
    } else {
        console.log('oops, somethings gone wrong');
    }

}

function getHumanChoice() {
    
    let humanChoice = prompt("Choose the following attack: rock, paper, scissors").toLowerCase();
    if (humanChoice === 'rock') {
        return 'rock';
    } else if (humanChoice === 'paper') {
        return 'paper';
    } else if (humanChoice === 'scissors') {
        return 'scissors';
    } else {
        console.log('oops, somethings gone wrong');
    }
}

function playRound(humanChoice, computerChoice) {

    console.log(`player: ${humanChoice}, computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        return 'draw!'
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) { 
        humanScore++;
        return 'you win!';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        computerScore++; 
        return 'you lose :('
    }

}


// console.log("computer: " + getComputerChoice());
// console.log("player: " + getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(`player: ${humanScore} | computer: ${computerScore}`);