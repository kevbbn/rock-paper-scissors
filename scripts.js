function computerPlay(){ // randomly returns rock paper or scissors
    let i = Math.floor(Math.random() * 3);
    if(i == 0){
        return "rock";
    }
    else if(i == 1){
        return "paper";
    }
    else{
        return "scissors";
    }

  }
function playRound(e) {
    let computerSelection = computerPlay(); 
    let playerSelection = e.toElement.id;
    let result = ""
    if(playerSelection==computerSelection){
        result = "Tie! No one wins!"
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissors"){ // rock wins (player)
            result = "You win! Rock beats scissors!";

            playerScore++;
        }
        else{ // paper wins (computer)
            result = "You lose! Paper beats rock!";
            computerScore++;
        }

    }
    else if(playerSelection=="paper"){
        if(computerSelection=="scissors"){ // scissor wins (computer)
            result = "You lose! Scissors beats paper!";
            computerScore++;
        }
        else{ // paper wins (player)
            result = "You win! Paper beats rock";
            playerScore++;
        }
    }
    else if(playerSelection=="scissors"){ // player selection == scissors
        if(computerSelection=="rock"){ // rock wins (computer)
            result = "You lose! Rock beats scissors!";
            computerScore++;
        }
        else{ // scissors wins (player)
            result = "You win! Scissors beats paper!";
            playerScore++;
        }
    }
    else{
        console.log("Invalid choice! Rock, Paper Or Scissors?");
    }
    playerScoreHTML.innerHTML = `Score: ${playerScore}`;
    computerScoreHTML.innerHTML = `Score: ${computerScore}`;
    resultHTML.innerHTML = result;
}

const playerChoices = document.querySelectorAll('.playerChoice');
playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', playRound));
let playerScore = 0;
let computerScore = 0;
let playerScoreHTML = document.getElementById("player-score");
let computerScoreHTML = document.getElementById("computer-score");
let resultHTML = document.getElementById("result");

