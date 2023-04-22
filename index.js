
const rock=document.getElementById('rock-btn');
const paper=document.getElementById('paper-btn');
const scissors=document.getElementById('scissors-btn');
const resultDiv = document.getElementById('result-div');

rock.addEventListener('click',() => playRound('rock'));
paper.addEventListener('click',() => playRound('paper'));
scissors.addEventListener('click',() => playRound('scissors'));


  let userScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection){
    const computerSelection = getComputerChoice();
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
    resultDiv.textContent=result;
  updateScore();

  if(checkWinner()){
    endGame();
  }
  }

  function getComputerChoice() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
  }

  function updateScore() {
    let scoreBoard=document.getElementById('score-div');
    scoreBoard.textContent = `player:${userScore} | computer:${computerScore}`;
  
  }

  function checkWinner(){
    if(userScore>=5 || computerScore>=5){
      return true;
    }
  }

  function endGame(){
    let finalResult=(userScore>computerScore)? "Congratulations, you win!" :
    (userScore < computerScore) ? "Sorry, you lose." :
    "It's a tie.";
    resultDiv.textContent=finalResult;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }


  
 
 
  



  
    

   
