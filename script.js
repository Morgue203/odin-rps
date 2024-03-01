//function to randomly get a value either rock, paper or scissors
function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * weapons.length); 
    let computerChoice = weapons[randomNumber];
    return computerChoice;
}

//function to get user input, bypass case sensitive inputs and uppercase them 
function getPlayerChoice () {
    let playerChoice = prompt("What is your move?").toLowerCase();
    return playerChoice;
}

let playerScore = 0
let computerScore = 0

//function to play a r-p-s round
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
    }
    else if (playerSelection == computerSelection) {
        return "Draw";
    }
    else {
        return "Please replay!"
    }
}

//show one round result
//console.log(playRound(playerSelection, computerSelection))

//function to play a game of rock, paper, scissors
function playGame() {
    //play a game of 5 rounds and calculate final score
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice()
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }

    //determine who is the winner
    if (playerScore > computerScore) {
        return "You win!, The score is " + playerScore + " to " + computerScore 
    }
    else if (playerScore < computerScore) {
        return "You lose!, The score is " + playerScore + " to " + computerScore 
    }
}

//play the game
console.log(playGame())