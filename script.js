const choices = ["rock", "paper", "scissors"];
let winners = [];


function computerPlay() {
    return choices[Math.floor(Math.random() *3)];
}


function playRound(round) {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  const winner = declareWinner(playerSelection, computerSelection);
  winners.push(winner);
  saveRound(playerSelection, computerSelection, winner, round);
}

function playerPlay() {
  let playerInput = prompt("Play your Hand Player Rock, Paper, or Scissors");
  playerInput = playerInput.toLowerCase();
  let check = validateInput(playerInput);
  while (check == false) {
    playerInput = prompt("Please Input correct text");
    while (playerInput == null) {
      playerInput = prompt("Play your Hand Playe Rock, Paper, or Scissors");
    }
    playerInput = playerInput.toLowerCase();
    check = validateInput(playerInput);
  }
  return playerInput;
}

function validateInput(choice) {
  return choices.includes(choice);
}

function declareWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function saveWins(){
    console.log(winners);
}


function saveRound(playerPlay, computerPlay, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerPlay);
  console.log("Computer Chose:", computerPlay);
  console.log(winner, "Won the Round");
  console.log("Theee End");
}

function game() {
    for (let i = 0; i < 5; i++) {
      playRound(i);
    }
    saveWins();
  }
game();