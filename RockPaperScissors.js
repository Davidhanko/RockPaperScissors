let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let ComputerRandom = 0;
let Player;
let compScore = 0;
let playScore = 0;
let playerSelection;

const BTN = document.querySelectorAll("button");
const answerDiv = document.querySelector(`.answer`)
const roundWinner = document.createElement("div")
roundWinner.setAttribute("class", "winner")
const score = document.createElement("div")
score.setAttribute("class", "score")
const gameWinner = document.createElement("div")
gameWinner.setAttribute("class", "Gwin")
answerDiv.appendChild(roundWinner)
answerDiv.appendChild(score)
answerDiv.appendChild(gameWinner)

function getComputerChoice(){
    ComputerRandom = Math.floor(Math.random() * (4 - 1) + 1);
    if (ComputerRandom == 1){
        return rock;
    }
    else if (ComputerRandom == 2){
        return scissors;
    }
    else if (ComputerRandom == 3) return paper;
}


function playGame(playerChoice, ComputerChoice){
if (playerChoice == rock)
{
    if (ComputerChoice == rock){
        roundWinner.textContent=("rock vs rock, draw")
    }
    else if (ComputerChoice == paper){
        compScore++;
        roundWinner.textContent=("rock vs paper, computer wins")
    }
    else if (ComputerChoice == scissors){
        playScore++;
        roundWinner.textContent=("rock vs scissors, player wins")
    }
}
if (playerChoice == scissors)
{
    if (ComputerChoice == rock){
        compScore++;
        roundWinner.textContent=("scissors vs rock, computer wins")
    }
    else if (ComputerChoice == paper){
        playScore++;
        roundWinner.textContent=("scissors vs paper, player wins")
    }
    else if (ComputerChoice == scissors){
        playScore++;
        roundWinner.textContent="scissors vs scissors, draw"
    }
}
if (playerChoice == paper)
{
    if (ComputerChoice == rock){
        playScore++;
        roundWinner.textContent="paper vs rock, player wins"
    }
    else if (ComputerChoice == paper){
        roundWinner.textContent="paper vs paper, draw"
    }
    else if (ComputerChoice == scissors){
        compScore++;
        roundWinner.textContent="paper vs scissors, computer wins"
    }
    }
score.textContent=compScore + ":" + playScore
if (compScore == 5) {
    gameWinner.textContent="COMPUTER WON"
    BTN.forEach(button => {
        button.disabled = true});
}
    else if (playScore == 5) {
        gameWinner.textContent="PLAYER WON"
    BTN.forEach(button => {
        button.disabled = true
    });
}
}

function game(playerS){
    let ComputerChoice = getComputerChoice();
    console.log(ComputerChoice)
    console.log(playerS)
    playerSelection = playerS.substring(5)
    playGame(playerSelection, ComputerChoice);
}


// Attach a click event listener to each button
BTN.forEach(button => {
    button.addEventListener("click", ()=>{game(button.className)})
});




