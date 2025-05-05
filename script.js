"use strict";

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Ready to play? Type rock, paper, or scissors!");
  humanChoice = humanChoice.toLowerCase();

  const validChoices = ["rock", "paper", "scissors"];

  if (validChoices.includes(humanChoice)) {
    return humanChoice;
  } else {
    alert("Invalid choice! Please type rock, paper, or scissors.");
    return getHumanChoice();
  }
}

function playRound(computerSelection, humanSelection) {
  if (humanSelection === computerSelection) {
    return "Draw! 🤝";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! ✅";
  } else {
    return "Computer wins! ❌";
  }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

console.log(`Computer chose: ${computerSelection}`);
console.log(`You chose: ${humanSelection}`);
console.log(playRound(computerSelection, humanSelection));

// The game is done
