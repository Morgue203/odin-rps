//function to randomly get a value either rock, paper or scissors
function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * weapons.length); 
    let computerChoice = weapons[randomNumber];
    console.log("Computer's choice: " +computerChoice);
    return computerChoice;
}

//function to get user input, bypass case sensitive inputs and uppercase them 
function getPlayerChoice () {
    let playerChoice = prompt("What is your move?");
    console.log("Player's choice: " + playerChoice.toLowerCase());
    return playerChoice;
}

//values that is used in the game round that is empty for now  
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

//function to play a r-p-s round
function playGround (playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        return console.log("You win!, " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return console.log("You lose!, " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return console.log("You win!, " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return console.log("You lose!, " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return console.log("You win!, " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return console.log("You lose!, " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection == computerSelection) {
        return console.log("Draw!")
    }
    else {
        return console.log("Please replay!")
    }
}

//show one round result
playGround(playerSelection, computerSelection)

//function to play a game of rock, paper, scissors
function playGame() {

}