function getComputerChoice() {
    // Initialize a variable to store a floating point number
    let number = Math.random();

    // Based on the number, decide whether to return rock, paper, or scissors
    if (number <= 0.33) return "rock";
    else if (number <= 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let humanChoice = prompt("Choose: 'rock,' 'paper,' or 'scissors'");
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Draw");
    } 
    // rock beats scissors
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats paper. Human gets a point.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Rock beats paper. Computer gets a point.");
        computerScore++;
    }
    // paper beats rock
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Paper beats rock. Human gets a point.");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Paper beats rock. Computer gets a point.");
        computerScore++;
    }
    // scissors beat paper
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Scissors beat paper. Human gets a point.");
        humanScore++;
    } else {
        console.log("Scissors beat paper. Computer gets a point.");
        computerScore++;
    }

}

function playGame() {
    
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice().toLowerCase();
        playRound(humanChoice, computerChoice);
    }
}

playGame();