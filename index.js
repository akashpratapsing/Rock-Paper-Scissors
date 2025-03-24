let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScoreMsg = document.querySelector("#user-score");

const choices = document.querySelectorAll(".choice");

const drawGame = () => {
  // console.log("Draw...")
  document.querySelector("#msg").innerText = "DRAW...";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    // console.log("yOu wIn");
    userScore++;
    userScoreMsg.innerText = userScore;
    msg.innerText = "YOU WIN";
    msg.style.backgroundColor = "green";
  } else {
    // console.log("yOu LosE");
    compScore++;
    document.querySelector("#comp-score").innerText = compScore;
    msg.innerText = "YOU LOSE";
    msg.style.backgroundColor = "red";
  }
};
const genComChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return option[randomNumber];
};
const playGame = (userChoice) => {
  console.log("user Choice = ", userChoice);
  const compChoice = genComChoice();
  console.log("com choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock scossor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
