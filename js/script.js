const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userPoints_span = document.getElementById("userpoints");
const cpuPoints_span = document.getElementById("cpupoints");
const creator_p = document.getElementById("creator");
const winner_p = document.getElementById("winner");
const userChoice_span = document.getElementById("userChoice");
const cpuChoice_span = document.getElementById("cpuChoice");
const won_span = document.getElementById("won");
let userPoints = 0;
let cpuPoints = 0;

const getCpuChoice = () => {
  const choices = ["r", "p", "s"];
  let ramdomChoices = Math.floor(Math.random() * 3);
  //   console.log(ramdomChoices);
  let cpuChoices = choices[ramdomChoices];
  //   console.log(cpuChoices);
  return cpuChoices;
};

const won = () => {
  userPoints++;
  userPoints_span.textContent = userPoints;
};
const lost = () => {
  cpuPoints++;
  cpuPoints_span.textContent = cpuPoints;
};

const winnerShow = () => {
  creator_p.style.display = "none";
  winner_p.style.display = "block";
};

const updateData = (userElection, cpuElection, finalWinner) => {
  userChoice_span.textContent = userElection;
  cpuChoice_span.textContent = cpuElection;
  won_span.textContent = finalWinner;
};

const checkWinner = (userChoice, cpuChoices) => {
  switch (userChoice + cpuChoices) {
    case "rr":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, TIE`
      );
      updateData("Rock", "Rock", "Nobody");
      break;
    case "rp":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, YOU LOST`
      );
      lost();
      updateData("Rock", "Paper", "CPU");
      break;
    case "rs":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, YOU WON`
      );
      updateData("Rock", "Scissors", "USER");
      break;
      won();
    case "pr":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, YOU WON`
      );
      won();
      updateData("Paper", "Rock", "USER");
      break;
    case "pp":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, TIE`
      );
      break;
      updateData("Paper", "Paper", "Nobody");
    case "ps":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, YOU LOST`
      );
      lost();
      updateData("Paper", "Scissors", "CPU");
      break;
    case "sr":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, YOU LOST`
      );
      lost();
      updateData("Scissors", "Rock", "CPU");
      break;
    case "sp":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, YOU WON`
      );
      won();
      updateData("Scissors", "Paper", "USER");
      break;
    case "ss":
      console.log(
        `userChoice is ${userChoice}, cpuChoices is ${cpuChoices}, TIE`
      );
      break;
      updateData("Scissors", "Scissorss", "Nobody");

    default:
      break;
  }
};

let userChoice;
rock.addEventListener("click", () => {
  //   console.log("Piedra");
  userChoice = "r";
  let cpuJugada = getCpuChoice();
  checkWinner(userChoice, cpuJugada);
  winnerShow();
});

paper.addEventListener("click", () => {
  //   console.log("Papel");
  userChoice = "p";
  let cpuJugada = getCpuChoice();
  checkWinner(userChoice, cpuJugada);
  winnerShow();
});

scissors.addEventListener("click", () => {
  //   console.log("Tijera");
  userChoice = "s";
  let cpuJugada = getCpuChoice();
  checkWinner(userChoice, cpuJugada);
  winnerShow();
});
