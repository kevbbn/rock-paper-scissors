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

function clear(){
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.classList.remove("win");
        choice.classList.remove("lose");
        choice.classList.remove("tie");
    });
}
function tie(playerSelection){
    clear();
    let player = document.getElementById(`${playerSelection}`);
    let computer = document.getElementById(`computer-${playerSelection}`);
    player.classList.add("tie");
    computer.classList.add("tie");
}
function win(playerSelection){
    clear();
    let player = document.getElementById(`${playerSelection}`);
    if(playerSelection=="rock"){
        let computer = document.getElementById("computer-scissors");
        player.classList.add("win");
        computer.classList.add("lose");

    }
    else if(playerSelection=="paper"){
        let computer = document.getElementById("computer-rock");
        player.classList.add("win");
        computer.classList.add("lose");
    }
    else{ // player = scissors, comuter == paper
        let computer = document.getElementById("computer-paper");
        player.classList.add("win");
        computer.classList.add("lose");
    }
}
function lose(playerSelection){
    clear();
    let player = document.getElementById(`${playerSelection}`);
    if(playerSelection=="rock"){
        let computer = document.getElementById("computer-paper");
        player.classList.add("lose");
        computer.classList.add("win");

    }
    else if(playerSelection=="paper"){
        let computer = document.getElementById("computer-scissors");
        player.classList.add("lose");
        computer.classList.add("win");
    }
    else{ // player = scissors, comuter == paper
        let computer = document.getElementById("computer-rock");
        player.classList.add("lose");
        computer.classList.add("win");
    }

}
function playRound(e) {
    let computerSelection = computerPlay(); 
    let playerSelection = e.toElement.id;
    if(playerSelection == "rock-img"){ // if user clicks the img instead of the div
        playerSelection = "rock";
    }
    else if(playerSelection == "paper-img"){
        playerSelection = "paper";
    }
    else if(playerSelection == "scissors-img"){
        playerSelection = "scissors";
    }
    let result = ""
    if(playerSelection==computerSelection){
        result = "Tie! No one wins!"
        tie(playerSelection);
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissors"){ // rock wins (player)
            result = "You win! Rock beats scissors!";
            playerScore++;
            win(playerSelection);
        }
        else{ // paper wins (computer)
            result = "You lose! Paper beats rock!";
            computerScore++;
            lose(playerSelection);
        }

    }
    else if(playerSelection=="paper"){
        if(computerSelection=="scissors"){ // scissor wins (computer)
            result = "You lose! Scissors beats paper!";
            computerScore++;
            lose(playerSelection);
        }
        else{ // paper wins (player)
            result = "You win! Paper beats rock";
            playerScore++;
            win(playerSelection);
        }
    }
    else if(playerSelection=="scissors"){ // player selection == scissors
        if(computerSelection=="rock"){ // rock wins (computer)
            result = "You lose! Rock beats scissors!";
            computerScore++;
            lose(playerSelection);
        }
        else{ // scissors wins (player)
            result = "You win! Scissors beats paper!";
            playerScore++;
            win(playerSelection);
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

