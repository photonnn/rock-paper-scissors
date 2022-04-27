/*


*/


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function makeCaseInsensitive(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = makeCaseInsensitive(playerSelection);

    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Rock") {

        if (playerSelection === "Rock" && computerSelection === "Rock" ||
            playerSelection === "Paper" && computerSelection === "Paper" ||
            playerSelection === "Scissors" && computerSelection === "Scissors") {
            return `You Tie! You both chose ${playerSelection}.`;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Paper" ||
            playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } else {
        return `You chose ${playerSelection}, but the only available weapons are Rock, Paper and Scissors!`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your weapon!");
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        console.log("Player score: " + playerScore + " | Computer score: " + computerScore);
    }

    console.log("GAME OVER");
    if (playerScore > computerScore) {
        console.log("YOU WIN POGGERS");
    } else if (playerScore < computerScore) {
        console.log("YOU LOST SADGE");
    } else {
        console.log("YOU TIED");
    }

}

let playerScore = 0;
let computerScore = 0;


alert("Make sure open console in your DevTools!!!")
game();