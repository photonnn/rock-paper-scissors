/*
    TO DO:
    1) Figure out a way to make playRound function more clean!

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


// To assign score after a round we need a to keep a reference, hence call.
// Other 2 arguments are self-explanatory in the code.
function playRound() {
    playerSelection = this.textContent;
    let computerSelection = computerPlay();


    if (playerSelection === "Rock" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Scissors") {
        assignScore.call(this, "Tie", computerSelection);
    } else if (playerSelection === "Rock" &&
        computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
        assignScore.call(this, "Player", computerSelection);
    } else {
        this.style.backgroundColor = "Red";
        const compChoice = document.querySelector(`#${computerSelection}`);
        compChoice.style.backgroundColor = "Green";
        assignScore.call(this, "Computer", computerSelection);
    }

}

function assignScore(winnerSelection, computerSelection) {

    // previous colored buttons are return to initial background color!
    resetButtonStyle();

    switch (winnerSelection) {
        case "Player":
            const playerScore = document.querySelector("#player-score");
            +playerScore.textContent++;
            endingCheck();
            changeColor.call(this, winnerSelection, computerSelection);
            break;
        case "Computer":
            const computerScore = document.querySelector("#computer-score");
            +computerScore.textContent++;
            endingCheck();
            changeColor.call(this, winnerSelection, computerSelection);
            break;
        case "Tie":
            changeColor.call(this, winnerSelection, computerSelection);
    }
}

function resetButtonStyle() {
    const btn = document.querySelectorAll("button");
    btn.forEach(button => button.style.backgroundColor = "rgb(239, 239, 239)");
}

function endingCheck() {
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    const score = document.querySelector("#result-box");

    if (+playerScore.textContent == 5) {
        score.textContent = "YOU WIN";
        endingScreen();
    } else if (+computerScore.textContent == 5) {
        score.textContent = "YOU LOSE";
        endingScreen();
    }
}

function endingScreen() {
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => btn.remove());

    setTimeout(() => {
        const para = document.querySelector("#result-box");
        para.textContent = "RESTARTING";
        setTimeout(() => {
            location.reload();
        }, "2000")
    }, "1000")

}

function changeColor(winnerSelection, computerSelection) {

    switch (winnerSelection) {
        case "Tie":
            this.style.backgroundColor = "Gray";
            compChoice = document.querySelector(`#${computerSelection}`);
            compChoice.style.backgroundColor = "Gray";
            break;
        case "Computer":
            this.style.backgroundColor = "Red";
            compChoice = document.querySelector(`#${computerSelection}`);
            compChoice.style.backgroundColor = "Green";
        case "Player":
            this.style.backgroundColor = "Green";
            compChoice = document.querySelector(`#${computerSelection}`);
            compChoice.style.backgroundColor = "Red";
    }
}

function game() {
    const pbtns = document.querySelectorAll(".P");

    pbtns.forEach(btn => btn.addEventListener('click', playRound));
}

game();