let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const options = ['stone', 'paper', 'scissors'];
  const computerChoice = options[Math.floor(Math.random() * 3)];

  let resultMessage = "";

  if (playerChoice === computerChoice) {
    resultMessage = `It's a draw! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'stone' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'stone') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    resultMessage = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  document.getElementById("result").textContent = resultMessage;
  document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
