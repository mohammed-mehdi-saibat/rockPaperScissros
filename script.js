"use strict";

const computerChoiceDisplay = document.querySelector(".computerChoice");
const roundCountDisplay = document.querySelector(".roundCount");
const computerScoreDisplay = document.querySelector(".computerScore");
const humanScoreDisplay = document.querySelector(".humanScore");
const resultDisplay = document.querySelector(".result");
const reloadBtn = document.querySelector(".reload");
const choiceButtons = document.querySelectorAll(".choice");

let computerScore = 0;
let humanScore = 0;
let roundsCount = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    computerChoiceDisplay.textContent = randomChoice.toUpperCase();
    return randomChoice;
}

function playRound(humanChoice) {
    if (computerScore >= 5 || humanScore >= 5) return;

    const computerChoice = getComputerChoice();
    roundsCount++;
    
    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = `TIE! BOTH CHOSE ${humanChoice.toUpperCase()}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult = `POINT FOR YOU! ${humanChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}.`;
    } else {
        computerScore++;
        roundResult = `CPU SCORES! ${computerChoice.toUpperCase()} BEATS ${humanChoice.toUpperCase()}.`;
    }

    updateUI(roundResult);
    checkWinner();
}

function updateUI(message) {
    roundCountDisplay.textContent = `ROUND ${roundsCount}`;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = message;
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const finalMessage = humanScore === 5 ? "GAME OVER: YOU WIN! 🏆" : "GAME OVER: CPU WINS! 🤖";
        resultDisplay.textContent = finalMessage;
        resultDisplay.style.background = "#fff";
        resultDisplay.style.color = "#1d1127";
        choiceButtons.forEach(btn => {
            btn.style.opacity = "0.5";
            btn.style.cursor = "not-allowed";
        });
    }
}

choiceButtons.forEach(button => {
    button.addEventListener("click", function() {
        // This looks at the text inside the button to decide the move
        const userMove = this.textContent.toLowerCase().trim();
        playRound(userMove);
    });
});

reloadBtn.addEventListener("click", () => {
    window.location.reload();
});
