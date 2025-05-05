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
