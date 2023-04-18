let round = prompt("How many rounds do you want to play?");
game(round);

function game(rounds) {
  let i = 0;
  let n = rounds;
  let userScore = 0;
  let computerScore = 0;
  
  while (i < n) {
    let user = prompt("What is your name?");
    let userInputLowerCase = user.toLowerCase();
    const playerSelection = userInputLowerCase;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    i++;
  }
  
  if (userScore > computerScore) {
    console.log(`Congratulations, you win! Your score: ${userScore}, Computer's score: ${computerScore}`);
  } else if (userScore < computerScore) {
    console.log(`Sorry, you lose. Your score: ${userScore}, Computer's score: ${computerScore}`);
  } else {
    console.log(`It's a tie. Your score: ${userScore}, Computer's score: ${computerScore}`);
  }
  
  function getComputerChoice() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (playerSelection) {
      case "rock":
        switch (computerSelection) {
          case "rock":
            result = "It's a tie.";
            break;
          case "paper":
            result = "You lose! Paper beats rock.";
            computerScore++;
            break;
          case "scissors":
            result = "You win! Rock beats scissors.";
            userScore++;
            break;
        }
        break;
      case "paper":
        switch (computerSelection) {
          case "rock":
            result = "You win! Paper beats rock.";
            userScore++;
            break;
          case "paper":
            result = "It's a tie.";
            break;
          case "scissors":
            result = "You lose! Scissors beats paper.";
            computerScore++;
            break;
        }
        break;
      case "scissors":
        switch (computerSelection) {
          case "rock":
            result = "You lose! Rock beats scissors.";
            computerScore++;
            break;
          case "paper":
            result = "You win! Scissors beats paper.";
            userScore++;
            break;
          case "scissors":
            result = "It's a tie.";
            break;
        }
        break;
      default:
        result = "Invalid input. Please try again.";
        break;
    }
    console.log(result);
  }
}


  
    

   
