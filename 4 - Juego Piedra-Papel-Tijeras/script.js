const piedraBtn = document.getElementById("piedra-btn");
const papelBtn = document.getElementById("papel-btn");
const tijerasBtn = document.getElementById("tijeras-btn");
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


piedraBtn.addEventListener("click", function () {
  showResults("Piedra");
});

papelBtn.addEventListener("click", function () {
  showResults("Papel");
});

tijerasBtn.addEventListener("click", function () {
  showResults("Tijeras");
});

function getRandomComputerResult() {
    const options = ["Piedra", "Papel", "Tijeras"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Piedra" && computer === "Tijeras") ||
      (player === "Tijeras" && computer === "Papel") ||
      (player === "Papel" && computer === "Piedra")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Ganaste! ${userOption} es mejor que ${computerResult}`;
    } else if (computerResult === userOption) {
      return `Es un empate! Ambos eligieron ${userOption}`;
    } else {
      computerScore++;
      return `La IA ganó! ${computerResult} es mejor que ${userOption}`;
    }
  }
  

  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "El humano" : "La IA"
      } ganó el juego!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
    };

    resetGameBtn.addEventListener("click", resetGame);