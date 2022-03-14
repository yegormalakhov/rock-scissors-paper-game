let userInput;
const userChoices = document.querySelectorAll(".choices");
const start = document.querySelector("#start");
const userChoice = document.querySelector("#userChoice");
const resultOutput = document.querySelector('#result');


userChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    userInput = e.target.id;
    userChoice.textContent = `You chose ${userInput}`;
    console.log(userInput);
  });
});

start.addEventListener("click", () => console.log("something"));

// getUserChoice('paper');
// const getComputerChoice = () => {
//   let number = Math.floor(Math.random() * 3);
//   switch (number) {
//     case 0:
//       return "rock";
//     case 1:
//       return "paper";
//     case 2:
//       return "scissors";
//   }
// };
// console.log(getComputerChoice());

//   const determineWinner = (userChoice, computerChoice) => {
  
//   if (userChoice === computerChoice){
//     return "The game is a tie!";
//       }
//   if ( userChoice === 'rock'){
//     if (computerChoice === 'paper'){
//     return "Computer won";
//     } else {
//     return 'Player won';
//     }
//   }
//    if ( userChoice === 'paper'){
//     if (computerChoice === 'scissors'){
//       return "Computer won";
//     } else {
//       return 'Player won';
//     }
//   }
//   if (userChoice === 'scissors') {
//     if (computerChoice === 'rock'){
//       return "Computer won";
//     } else {
//       return 'Player won';
//     }

//   }
// }

//   // console.log(determineWinner('rock', 'scissors'));

//   const playGame = () => {
// //   const userChoice = getUserChoice('bomb');
//   const computerChoice = getComputerChoice();
// //   console.log("You threw: " + userChoice);
// //   console.log("Computer threw: " + computerChoice);
//   console.log(determineWinner(userChoice, computerChoice));
//   }
//   playGame();

// NOT needed original

// function getUserChoice(userInput) {
//   userInput = userInput.toLowerCase();
//   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
//     return userInput;
//   } else {
//     console.log("Please give a correct option");
//   }
// }


// if(userChoice === 'bomb'){
//   return "You won";
// }