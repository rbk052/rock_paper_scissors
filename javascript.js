// console.log("hello world");

function getComputerChoice() {

    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else if (num == 2) {
        return 'scissors';
    } else {
        console.log('oops, somethings gone wrong');
    }

}

function getHumanChoice() {
    
    let choice = prompt("Choose the following attack: rock, paper, scissors");
    if (choice === 'rock') {
        return 'rock';
    } else if (choice === 'paper') {
        return 'paper';
    } else if (choice === 'scissors') {
        return 'scissors';
    } else {
        console.log('oops, somethings gone wrong');
    }
}


console.log("computer: " + getComputerChoice());
console.log("player: " + getHumanChoice());