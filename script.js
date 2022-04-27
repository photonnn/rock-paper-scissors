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

}