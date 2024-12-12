// Global variables to track game state
const choices = ["Bear", "Ninja", "Hunter"];
let playerWins = 0;
let computerWins = 0;

// Random choice generator for the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine the winner of the game
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "Bear" && computerChoice === "Ninja") ||
    (playerChoice === "Ninja" && computerChoice === "Hunter") ||
    (playerChoice === "Hunter" && computerChoice === "Bear")
  ) {
    playerWins++;
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerWins++;
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

// Play a single game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const resultMessage = determineWinner(playerChoice, computerChoice);

  // Display results
  document.getElementById("result-box").textContent = resultMessage;
  document.getElementById("win-counter").textContent = `Player Wins: ${playerWins} | Computer Wins: ${computerWins}`;

  // Show results container
  document.getElementById("result-container").classList.remove("hidden");
}

// Reset the game to the initial state
function resetGame() {
  document.getElementById("result-container").classList.add("hidden");
}
