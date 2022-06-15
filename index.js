let originalNum; //It is the Original Number that we get from Random Method
let userGuess = []; // It is the Array for user attempts
let userGuessUpdate = document.getElementById("your-guess");
let userNumberUpdate = document.getElementById("input-box");
const computerNum = () => {
  originalNum = Math.floor(Math.random() * 100);
  // console.log(originalNum);
  document.getElementById("game-area").style.display = "none";
  document.getElementById("game-button").style.display = "none";
};

// Start Game Function
const startGame = () => {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("game-area").style.display = "inline-block";
};

// HardMode/Easy Buttons when Pressed will call a function
// startGame() whivch will start the game
const easyMode = () => {
  maxGuess = 10; //Number of Guesses are 10 for Easy Mode
  startGame();
};
const hardMode = () => {
  maxGuess = 5; //Number of Guesses are 5 for Hard Mode
  startGame();
};
const mediumMode = () => {
  maxGuess = 7;
  startGame();
};

// Input By User Function
const inputByUser = () => {
  const userNumber = Number(document.getElementById("input-box").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //Start a New Game
  const startNewGame = () => {
    document.getElementById("game-button").style.display = "inline-block";
    userNumberUpdate.setAttribute("disabled", true); //This will set the input field Disabled.
    userNumberUpdate.setAttribute("placeholder", "Disabled"); //This will set the input
    //Placeholder field named as Disabled.
  };

  //Checking if the Guess is Low/High
  if (userGuess.length < maxGuess) {
    if (userNumber > originalNum) {
      userGuessUpdate.innerHTML = "Your Guess is too High";
      userNumberUpdate.value = "";
    } else if (userNumber < originalNum) {
      userGuessUpdate.innerHTML = "Your Guess is too Low";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "Your Guess is Correct";
      userNumberUpdate.value = "";
      startNewGame();
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
  } else {
    if (userNumber > originalNum) {
      userGuessUpdate.innerHTML = `You Lost....! Correct Number was ${originalNum}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < originalNum) {
      userGuessUpdate.innerHTML = `You Lost....! Correct Number was ${originalNum}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "Your Guess is Correct";
      userNumberUpdate.value = "";
      startNewGame();
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
  }
};
