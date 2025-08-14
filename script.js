console.log("hello... logged in. \n beeb boop");


function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"]
    //generate a math random number (0<= number <1), multiplies it by 3 (number of array items), and floors it down 
    //so the generated outcomes are 0, 1, or 2 
    let randomChoice = Math.floor(Math.random() * choices.length); 
    return choices[randomChoice];

}

function getHumanChoice(){

    const rockBtn = document.querySelector(".rock-button")
    const paperBtn = document.querySelector(".paper-button")
    const scissorsBtn = document.querySelector(".scissors-button")

    rockBtn.addEventListener('click',()=> { return "you played rock" })
    
}



// console.log(getComputerChoice());
// console.log(getHumanChoice());