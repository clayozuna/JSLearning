const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'hacks') {
    return userInput;
  }
  else {
    return 'Invalid choice';
  }
};

const getComputerChoice = () => {
  random = Math.floor(Math.random()*3);
  if (random == 0) {
    return 'rock';
  }
  else if (random == 1) {
    return 'paper';
  }
  else if (random == 2) {
    return 'scissors';
  }
  else {
    return 'Problem with random calculation';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    return 'Its a tie!';
  }
  else if (userChoice == 'hacks') {
    return 'You win, you hacker!';
  }
  else if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      return 'Computer wins';
    }
    else if (computerChoice == 'scissors') {
      return 'You did it. You WIN!';
    }
  }
  else if (userChoice == 'paper') {
    if (computerChoice == 'scissors') {
      return 'Computer wins';
    }
    else if (computerChoice === 'rock') {
      return 'Hey. You won';
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice == 'rock') {
      return 'computer wins';
    }
    else {
      return 'Another one for the victory books';
    }
  }
  else {
    return 'Incorrect user input. Try again.'
  }
};

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(`Your choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
