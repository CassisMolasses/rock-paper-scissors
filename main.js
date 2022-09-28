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

  