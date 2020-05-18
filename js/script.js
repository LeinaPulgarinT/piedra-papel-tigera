const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const getCpuChoice = () => {
  const choices = ["r", "p", "s"];
  let ramdomChoices = Math.floor(Math.random() * 3);
  //   console.log(ramdomChoices);
  let cpuChoices = choices[ramdomChoices];
  //   console.log(cpuChoices);
  return cpuChoices;
};
