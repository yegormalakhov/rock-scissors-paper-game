let userInput;
const userChoices = document.querySelectorAll(".choices");
const start = document.querySelector("#start");
const resultOutput = document.querySelector("#result");
const compChoice = document.querySelector("#compChoice");
const screenImg = document.querySelector(".computer_screen");

userChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    userInput = e.target.id;
    userChoices.forEach((choice) => (choice.disabled = true));
    clearSkynetEmoji();
    addChoiceToScreen(computerChoice);
    determineWinner(userInput, computerChoice);
  });
});

start.addEventListener("click", () => {
  userInput = "";
  resultOutput.textContent = "";
  compChoice.textContent = "";
  start.textContent = "Restart";
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

//screen image change
const clearSkynetEmoji = () => screenImg.classList.remove("skynet_emoji");
const clearScreenChoice = () => {
  screenImg.classList.remove("rock");
  screenImg.classList.remove("paper");
  screenImg.classList.remove("scissors");
};

const addChoiceToScreen = (computerChoice) => {
  if (computerChoice === "rock") {
    screenImg.classList.add("rock");
  } else if (computerChoice === "paper") {
    screenImg.classList.add("paper");
  } else if (computerChoice === "scissors") {
    screenImg.classList.add("scissors");
  }
};

//determine the winner
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

let computerChoice;
const playGame = () => {
  computerChoice = getComputerChoice();
  console.log("Computer threw: " + computerChoice);
  clearScreenChoice();
  screenImg.classList.add("skynet_emoji");
  userChoices.forEach((choice) => (choice.disabled = false));
};
