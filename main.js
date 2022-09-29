function getComChoice(min, max) {
min = Math.ceil(1);
max = Math.floor(3);
const output = (Math.floor(Math.random() * (max - min + 1) + min));
if (output === 1) {
    return("ROCK");
} else if (output === 2) {
  return("PAPER");
} else {
    return("SCISSORS");
}
}

function getPlayerChoice() {
let input = prompt("PICK");
input = input.toUpperCase();
return(input);
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const comChoice = getComChoice();
  if (playerChoice === "ROCK" && comChoice === "PAPER") {
    return("You lose, PAPER beats ROCK!");
  } else if (playerChoice === "ROCK" && comChoice === "SCISSORS") {
    return("You win, ROCK beats SCISSORS!");
  } else if (playerChoice === "PAPER" && comChoice === "ROCK") {
    return("You win, PAPER beats ROCK!");
  } else if (playerChoice === "PAPER" && comChoice === "SCISSORS") {
    return("You lose, SCISSORS beats PAPER!");
  } else if (playerChoice === "SCISSORS" && comChoice === "ROCK") {
    return("You lose, ROCK beats SCISSORS");
  }else if (playerChoice === "SCISSORS" && comChoice === "PAPER") {
    return("You win, SCISSORS beats PAPER!");
  } else {
    return("It\'s a tie!")
  }
  }  

  let PlayerScore = 0;
  let ComScore = 0;

  