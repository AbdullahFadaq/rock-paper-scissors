console.log("hello... logged in. \n beeb boop");


let humanScore = 0;
let computerScore = 0;

const displayHumanChoice = document.querySelector(".player-choice .choice");
const displayComputerChoice = document.querySelector(".computer-choice .choice");
const displayResult = document.querySelector(".round-result");
const humanScoreDisplay = document.querySelector(".player-score .score");
const computerScoreDisplay = document.querySelector(".computer-score .score");


function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"]
    //generate a math random number (0<= number <1), multiplies it by 3 (number of array items), and floors it down 
    //so the generated outcomes are 0, 1, or 2 
    let randomChoice = Math.floor(Math.random() * choices.length); 
    return choices[randomChoice];

}

document.querySelector(".rock-button").addEventListener("click", () => playRound("rock"));
document.querySelector(".paper-button").addEventListener("click", () => playRound("paper"));
document.querySelector(".scissors-button").addEventListener("click", () => playRound("scissors"));

function playRound(humanChoice){
    const computerChoice = getComputerChoice();

    displayHumanChoice.textContent = displayChoice(humanChoice);
    displayComputerChoice.textContent = displayChoice(computerChoice);

    //in case of a tie
    if(humanChoice===computerChoice){
        displayResult.innerHTML = "It's a <span class = `winner`>Tie!</span> Both chose "+humanChoice;
    }

    //cases where the player wins
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")      
    ) {
         displayResult.innerHTML = "The player <span class = `winner`>Wins! </span>"
         + humanChoice + " beats "+computerChoice ;
         humanScore++;

         humanScoreDisplay.textContent = humanScore;
    }


    //cases where the computer wins
    else if(
        (computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")      
    ) {
         displayResult.innerHTML = "You <span class = `winner`>Lost! </span>" 
         +computerChoice + " beats "+humanChoice;
         computerScore++;

         computerScoreDisplay.textContent=computerScore;
    }



}


function displayChoice(choice){
    switch(choice){
        case "rock":
            return "Rock";
        
        case "paper":
            return "Paper";

        case "scissors":
            return "Scissors";

        default:
            return "-_-"
    }

}




// console.log(getComputerChoice());
//  console.log("you picked: "+getHumanChoice());