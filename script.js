let userInput;
const userChoices = document.querySelectorAll(".choices");
const start = document.querySelector("#start");
const userChoice = document.querySelector("#userChoice");
const resultOutput = document.querySelector("#result");
const compChoice = document.querySelector("#compChoice");

userChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    userInput = e.target.id;
    // userChoice.textContent = `You chose ${userInput}`;
    // compChoice.textContent = `Computer chose ${computerChoice}`;
    // console.log(`you threw ${userInput}`);
    // console.log(`Computer threw ${computerChoice}`);

    determineWinner(userInput, computerChoice);
  });
});

start.addEventListener("click", () => {
  userInput = "";
  userChoice.textContent = "";
  resultOutput.textContent = "";
  compChoice.textContent = "";
  playGame();
});

// getUserChoice("paper");
const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
// console.log(getComputerChoice());

const determineWinner = (userInput, computerChoice) => {
  if (userInput === computerChoice) {
    resultOutput.textContent = "Its a tie!";
    return "The game is a tie!";
  }
  if (userInput === "rock") {
    if (computerChoice === "paper") {
      resultOutput.textContent = "Skynet won! Die human! Hahaha";
      return "Computer won";
    } else {
      resultOutput.textContent = "You won! Humanity will prevail!";
      return "Player won";
    }
  }
  if (userInput === "paper") {
    if (computerChoice === "scissors") {
      resultOutput.textContent = "Skynet won! Die human! Hahaha";
      return "Computer won";
    } else {
      resultOutput.textContent = "You won! Humanity will prevail!";
      return "Player won";
    }
  }
  if (userInput === "scissors") {
    if (computerChoice === "rock") {
      resultOutput.textContent = "Skynet won! Die human! Hahaha";
      return "Computer won";
    } else {
      resultOutput.textContent = "You won! Humanity will prevail!";
      return "Player won";
    }
  }
};

//   // console.log(determineWinner('rock', 'scissors'));
let computerChoice;
const playGame = () => {
  computerChoice = getComputerChoice();
  // //   console.log("You threw: " + userChoice);
  console.log("Computer threw: " + computerChoice);
  //
};
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
// from const playGame
// // //   const userChoice = getUserChoice('bomb');
