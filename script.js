"use strict";

// --------------------------------------------------COMPUTER-----------------------------------------
function computer() {
  let validChoices = ["rock", "paper", "scissors"];
  let computerChoice = validChoices[Math.floor(Math.random() * 3)];
  // SCREEN DISPLAY
  const computerChoiceDisplay = document.querySelector(".computerChoice");
  computerChoiceDisplay.textContent = `The computer chose: ${computerChoice}`;
  return computerChoice;
}

const playButton = document.querySelector(".reload");
playButton.addEventListener("click", () => {
  location.reload();
});

// --------------------------------------------------COMPUTER-----------------------------------------
//_+_+_+_+_+_+_+_+_+_+_+_+_+_+_++_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
// --------------------------------------------------HUMAN--------------------------------------------

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const humanChoiceDisplay = document.querySelector(".humanChoice");

let humanChoice = "";

rock.addEventListener("click", () => {
  humanChoice = "rock";
  humanChoiceDisplay.textContent = `You chose: ${humanChoice}`;
  playRound();
});

paper.addEventListener("click", () => {
  humanChoice = "paper";
  humanChoiceDisplay.textContent = `You chose: ${humanChoice}`;
  playRound();
});

scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  humanChoiceDisplay.textContent = `You chose: ${humanChoice}`;
  playRound();
});

function human() {
  return humanChoice;
}

// --------------------------------------------------HUMAN---------------------------------------------
//_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
// --------------------------------------------------RESULTS-------------------------------------------

const roundCount = document.querySelector(".roundCount");
const computerScoreDisplay = document.querySelector(".computerScore");
const humanScoreDisplay = document.querySelector(".humanScore");
const result = document.querySelector(".result");

let computerScore = 0;
let humanScore = 0;
let roundsCount = 0;

function playRound() {
  if (computerScore >= 5 || humanScore >= 5) return;

  const computerChoice = computer();
  const humanChoice = human();

  if (humanChoice === computerChoice) {
    result.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  roundsCount++;
  roundCount.textContent = `Round: ${roundsCount}`;
  humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

  if (computerScore === 5 || humanScore === 5) {
    result.textContent +=
      humanScore === 5 ? " 🎉 You won the game!" : " 😞 Computer won the game!";
  }
}

// --------------------------------------------------RESULTS-------------------------------------------

// Done
