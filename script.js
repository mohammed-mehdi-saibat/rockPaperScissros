"use strict";

const humanScoreEl = document.getElementById('humanScore');
const computerScoreEl = document.getElementById('computerScore');
const roundCountEl = document.getElementById('roundCount');
const statusText = document.getElementById('statusText');
const resetBtn = document.getElementById('resetBtn');
const choiceButtons = document.querySelectorAll('.choice-btn');

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
    if (humanScore === 5 || computerScore === 5) return;

    const cpuChoice = getComputerChoice();
    rounds++;
    let resultMsg = "";

    if (playerChoice === cpuChoice) {
        resultMsg = `TIE! BOTH CHOSE ${playerChoice.toUpperCase()}`;
    } else if (
        (playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        humanScore++;
        resultMsg = `POINT FOR YOU! ${playerChoice.toUpperCase()} BEATS ${cpuChoice.toUpperCase()}`;
    } else {
        computerScore++;
        resultMsg = `CPU SCORES! ${cpuChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}`;
    }

    updateDisplay(resultMsg);
    checkWinner();
}

function updateDisplay(msg) {
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
    roundCountEl.textContent = rounds;
    statusText.textContent = msg;
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const finalMsg = humanScore === 5 ? "YOU WON THE TOURNAMENT! 🎉" : "SYSTEM FAILURE: CPU WINS! 💀";
        statusText.innerHTML = `<span style="color:white">${finalMsg}</span>`;
        choiceButtons.forEach(btn => btn.style.display = 'none');
    }
}

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.getAttribute('data-choice');
        playRound(choice);
    });
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});
