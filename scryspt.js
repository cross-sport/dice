// var player1 = document.querySelector(".player-1-panel");
// var score1 = player1.querySelector(".player-score");
// score1.textContent = 25;

// var diceImg = document.querySelector(".Dice");
// var randomNumber = 0;
// // diceImg.style.display = "block";
// diceImg.src = "img/dice-3.png";

// while (randomNumber != 1) {
//   randomNumber = Math.floor(Math.random() * 6 + 1);
//   console.log(randomNumber);
// }

var btnNew = document.querySelector(".btn-new");
var btnRoll = document.querySelector(".btn-roll");
var btnHold = document.querySelector(".btn-hold");
var finalScore = document.querySelector(".final-score");
var diceImg = document.querySelector(".Dice");
var currentScore = 0;
var currentPlayer = 0;
var currentPlayerPanel = document.querySelector(".player-0-panel");
var score = [0, 0];
var winnerScore = 0;

document.querySelector(".btn-hold").disabled = true;

var next = function () {
  currentPlayerPanel.querySelector(".player-current-score").textContent = 0;
  currentPlayer = currentPlayer == 0 ? 1 : 0;
  currentScore = 0;
  currentPlayerPanel.classList.remove("active");
  currentPlayerPanel = document.querySelector(`.player-${currentPlayer}-panel`);
  currentPlayerPanel.classList.add("active");
};

btnRoll.addEventListener("click", function () {
  winnerScore = +parseInt(document.getElementById("final-score").value);
  if (isNaN(winnerScore)) {
    document.querySelector(".btn-roll").disabled = true;
    console.log(winnerScore);
  } else {
    document.querySelector(".btn-hold").disabled = false;
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    diceImg.src = `img/dice-${randomNumber}.png`;
    currentScore += randomNumber;
    diceImg.style.display = "block";
  }
  if (randomNumber != 1) {
    currentPlayerPanel.querySelector(".player-current-score").textContent =
      currentScore;
  } else {
    next();
  }
});

btnHold.addEventListener("click", function () {
  score[currentPlayer] += currentScore;
  currentPlayerPanel.querySelector(".player-score").textContent =
    score[currentPlayer];
  if (score[currentPlayer] >= winnerScore) {
    currentPlayerPanel.classList.remove("active");
    currentPlayerPanel.classList.add("winner");
    currentPlayerPanel.querySelector(".player-name").textContent = "WINNER!!!";
    diceImg.style.display = "none";
    document.querySelector(".btn-roll").disabled = true;
    document.querySelector(".btn-hold").disabled = true;
    currentPlayerPanel.querySelector(".player-current-score").textContent = 0;
  } else {
    next();
    diceImg.style.display = "none";
  }
});

btnNew.addEventListener("click", function () {
  location.reload();
});

finalScore.addEventListener("change", function () {
  winnerScore = parseInt(document.getElementById("final-score").value);
  document.querySelector(".btn-roll").disabled = false;
  document.querySelector(".final-score").disabled = true;
});
