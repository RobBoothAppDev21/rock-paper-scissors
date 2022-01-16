// Rock Paper Scissors JS

function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  let randonNumber = Math.floor(Math.random() * 3);

  return rps[randonNumber];
}

let playerScore = 0;
let computerScore = 0;
let tieOutcome = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
    
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "paper":
        ++computerScore;
        return (`You lose - ${computerSelection} beats ${playerSelection}.`);
        break;
      case "scissors":
        ++playerScore;
        return (`You win - ${playerSelection} beats ${computerSelection}.`);
        break;
      default:
        ++tieOutcome;
        return (`You tied. Both threw ${playerSelection}.`);
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        ++playerScore;
        return (`You win - ${playerSelection} beats ${computerSelection}.`);
        break;
      case "scissors":
        ++computerScore;
        return (`You lose - ${computerSelection} beats ${playerSelection}.`);
        break;
      default:
        ++tieOutcome;
        return (`You tied. Both threw ${playerSelection}.`);
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "paper":
        ++playerScore;
        return (`You win - ${playerSelection} beats ${computerSelection}.`);
        break;
      case "rock":
        ++computerScore;
        return (`You lose - ${computerSelection} beats ${playerSelection}.`);
        break;
      default:
        ++tieOutcome;
        return (`You tied. Both threw ${playerSelection}.`);
    }
  }
}

function announceScore() {
  return `Scoreboard: You ${playerScore}, Computer ${computerScore}, Ties ${tieOutcome}`;
}

function announceFinalResult() {

  if (playerScore > computerScore) {
    return "You won the game!";
  } else if (playerScore === computerScore) {
      return "You tied with the computer!";
  } else {
      return "You lost the game.";
  }
}

let i = 0;
addEventListener('click', function(e) {

  if (i < 6) {
    i++;
    document.getElementsByClassName('round-number')[0].textContent = (`Round #${i}:`)
    document.getElementsByClassName("game-results")[0].textContent = "";
    let buttonClass = e.srcElement['className'];
    let playerThrow = buttonClass.replace('button ', '');
    document.getElementsByClassName("round-results")[0].textContent = playRound(playerThrow, computerPlay());
    document.getElementsByClassName("scoreboard")[0].textContent = announceScore();
    if (i == 5) {
      document.getElementsByClassName("game-results")[0].textContent = announceFinalResult();
      i = 0;
      playerScore = 0;
      computerScore = 0; 
    }
  } 
});

