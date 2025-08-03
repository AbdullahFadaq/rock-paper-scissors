console.log("hello... logged in. \n beeb boop");


function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"]
    //generate a math random number (0<= number <1), multiplies it by 3 (number of array items), and floors it down 
    //so the generated outcomes are 0, 1, or 2 
    let randomChoice = Math.floor(Math.random() * choices.length); 
    return choices[randomChoice];

}

// function getHumanChoice(){

//     while(true){
//         let choice = prompt(" 1 - rock\n 2 - paper\n 3 - scissors: ")
    
//         if(choice == 1){
//             return "rock";
//         }
//         if(choice == 2){
//             return "paper";
//         }
//         if(choice == 3){
//             return "scissors";
//         }    
        
//         //return null when propmt is cancelled
//         if(choice === null){
//             return null;
//         } 

//         alert("invalid input! please enter 1, 2, or 3 ")
//     }
// }



console.log(getComputerChoice());
console.log(getHumanChoice());