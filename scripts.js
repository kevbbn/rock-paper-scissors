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
    if(playerSelection==computerSelection){
        console.log("Tie! No one wins!");
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissors"){ // rock wins (player)
            console.log("You win! Rock beats scissors!");
            playerScore++;
        }
        else{ // paper wins (computer)
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }

    }
    else if(playerSelection=="paper"){
        if(computerSelection=="scissors"){ // scissor wins (computer)
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }
        else{ // paper wins (player)
            console.log("You win! Paper beats rock");
            playerScore++;
        }
    }
    else if(playerSelection=="scissors"){ // player selection == scissors
        if(computerSelection=="rock"){ // rock wins (computer)
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }
        else{ // scissors wins (player)
            console.log("You win! Scissors beats paper!");
            playerScore++;
        }
    }
    else{
        console.log("Invalid choice! Rock, Paper Or Scissors?");
    }
    playerScoreHTML.innerHTML = `Score: ${playerScore}`;
    computerScoreHTML.innerHTML = `Score: ${computerScore}`;
}

const playerChoices = document.querySelectorAll('.playerChoice');
playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', playRound));
let playerScore = 0;
let computerScore = 0;
let playerScoreHTML = document.getElementById("player-score");
let computerScoreHTML = document.getElementById("computer-score");

