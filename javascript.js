console.log('Hello World!')

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
    // if (computerChoice == 0) {
    //     return 'rock';
    // } else if (computerChoice == 1) {
    //     return 'paper';
    // } else if (computerChoice == 2) {
    //     return 'scissors';
    // } else {
    //     console.log('oops, somethings gone wrong');
    // }

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
    // console.log(`player: ${humanChoice}, computer: ${computerChoice}`);
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

    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();

    //     console.log(playRound(humanSelection, computerSelection));
    //     console.log(`player: ${humanScore} | computer: ${computerScore}`);
    // }


    // console.log("computer: " + getComputerChoice());
    // console.log("player: " + getHumanChoice());

const buttons = document.querySelector(".buttons");
const comp = document.querySelector(".comp");
const you = document.querySelector(".you");
const compScore = document.querySelector(".comp-score");
const youScore = document.querySelector(".you-score")
const h2 = document.querySelector("h2");

buttons.addEventListener("click", (e) => {
    let target = e.target;
    let computerChoice = getComputerChoice()
    playRound(target.id, computerChoice);
    
    if(humanScore === 5){
        h2.textContent = "You Won!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        h2.textContent = "You Lost!";
        humanScore = 0;
        computerScore = 0;
    }
    comp.textContent = `The computer chose: ${computerChoice}`;
    you.textContent = `You chose: ${target.id}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    youScore.textContent = `Your Score: ${humanScore}`;
})
