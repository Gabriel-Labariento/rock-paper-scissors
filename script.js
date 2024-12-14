let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Initialize a variable to store a floating point number
    let number = Math.random();

    // Based on the number, decide whether to return rock, paper, or scissors
    if (number <= 0.33) return "rock";
    else if (number <= 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.className !== "startBtn") playRound(e.target.className, getComputerChoice());
        })
    })

}
    let results = document.querySelector(".results");
    let score = document.querySelector(".score");
    let winner = document.querySelector(".winner");

    function playRound(humanChoice, computerChoice) {
    
    results.style.padding = "10px"; 
    score.style.padding = "10px";
    winner.style.padding = "10px";   

    if (humanChoice === computerChoice){
        results.textContent = "Draw";
    } 
    // rock beats scissors
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.textContent = "Rock beats paper. Human gets a point.";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        results.textContent = "Rock beats paper. Computer gets a point.";
        computerScore++;
    }
    // paper beats rock
    else if (humanChoice === "paper" && computerChoice === "rock"){
        results.textContent = "Paper beats rock. Human gets a point.";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        results.textContent = "Paper beats rock. Computer gets a point.";
        computerScore++;
    }
    // scissors beat paper
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        results.textContent = "Scissors beat paper. Human gets a point.";
        humanScore++;
    } else {
        results.textContent = "Scissors beat paper. Computer gets a point.";
        computerScore++;
    }

    score.textContent = `Human: ${humanScore}\nComputer: ${computerScore}`

    if (humanScore === 5){
        winner.textContent = "Human wins!"
    } else if (computerScore === 5) {
        winner.textContent = "Computer wins, you lose!";
    }
}


function playGame() {
    if (humanScore !== 0 || computerScore !== 0){
        humanScore = 0;
        computerScore = 0;
        results.textContent = "";
        winner.textContent = "";
        score.textContent = "Game restart.\nHuman: 0\n Computer: 0";
    } else getHumanChoice()
}

let startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", playGame);