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
  // console.log(`You scored ${playerScore}. The computer scored ${computerScore}. Ties: ${tieOutcome}`);
  return `Scoreboard: You ${playerScore}, Computer ${computerScore}, Ties ${tieOutcome}`;
}

function announceFinalResult() {

  if (playerScore > computerScore) {
    // announceScore();
    return "You win the game!";
  } else if (playerScore === computerScore) {
    // announceScore();
    return "You tied with the computer!";
  } else {
    // announceScore();
    return "You lost the game.";
  }
}

// const playerThrow = document.querySelector('.button')
// console.log(playerThrow);

let i = 0;
addEventListener('click', function(e) {

  if (i < 6) {
    i++;
    document.getElementsByClassName('round-number')[0].innerHTML = (`Round #${i}:`)
    let buttonClass = e.srcElement['className'];
    let playerThrow = buttonClass.replace('button ', '');
    // console.log(buttonClass);
    // document.getElementsByClassName("round-throw")[0].innerHTML = playerThrow;
    document.getElementsByClassName("round-results")[0].innerHTML = playRound(playerThrow, computerPlay());
    document.getElementsByClassName("scoreboard")[0].innerHTML = announceScore();
    if (i == 5) {
      document.getElementsByClassName("game-results")[0].innerHTML = announceFinalResult();
     // Announce score after 5 rounds
     i = 0; 
    }
  } 
});

// const buttons = document.querySelectorAll('.button')
// buttons.forEach(button => console.log(button));
// const playerSelection = prompt("Please throw 'rock', 'paper', or 'scissors':");
// const computerSelection = computerPlay();

function game() {

  let i = 1;
  while (i < 6) { // (let i = 1; i < 6; i++) {
    document.getElementsByClassName('round-number')[0].innerHTML = (`Round #${i}:`)
    i++
    // announceResult();
  }
  
  announceFinalResult();
}

// console.log(game());

// function checkPlayerInput() {

//   let keepLooping = true;

//   while (keepLooping) {
//     let playerSelection = prompt("Please throw 'rock', 'paper', or 'scissors'. Type 'quit' to end the game.");
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
//       keepLooping === false;
//       return playerSelection;
//     } else if (playerSelection === 'quit') {
//       keepLooping === false;
//       break
//     }
//   }
// }
