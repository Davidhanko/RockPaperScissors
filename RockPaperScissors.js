const options = ['rock', 'paper', 'scissors'];

let compScore = 0;
let playScore = 0;

let roundsAmount = 5
let roundsPlayed = 0;

const BTN = document.querySelectorAll(".buts");
const reset = document.querySelector(".reset");
const roundWinner = document.querySelector(`.winner`)
const score = document.querySelector(`.score`)
const gameWinner = document.querySelector(`.gwin`)

function getRandomChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(playerChoice, ComputerChoice){
    if (CalculateRounds() >= roundsAmount){
        return
    }

    if(playerChoice === ComputerChoice){
        roundWinner.textContent = "Tie!"
    }else if(playerChoice === "rock" && ComputerChoice === "scissors"){
        roundWinner.textContent = "You Win!"
        playScore++;
    }else if(playerChoice === "paper" && ComputerChoice === "rock"){
        roundWinner.textContent = "You Win!"
        playScore++;
    }else if(playerChoice === "scissors" && ComputerChoice === "paper"){
        roundWinner.textContent = "You Win!"
        playScore++;
    }else{
        roundWinner.textContent = "You Lose!"
        compScore++
    }
    score.textContent = `Your Score: ${playScore} Computer Score: ${compScore}`

    roundsPlayed++;

    if(CalculateRounds() >= roundsAmount){
        if(playScore > compScore){
            gameWinner.textContent = "You Win!"
        }else if(playScore < compScore){
            gameWinner.textContent = "You Lose!"
        }else{
            gameWinner.textContent = "Tie!"
        }
    }
}

function handleInput(playerChoice){
    playGame(playerChoice, getRandomChoice());
}

function CalculateRounds(){
    return roundsPlayed;
}

// Attach a click event listener to each button
BTN.forEach(button => {
    button.addEventListener("click", ()=>{handleInput(button.id)})
});

reset.addEventListener("click", ()=> location.reload())



