gameInit();

var gamePlay, player, roundScore, totalScore, previousDice1, previousDice2, goal;

document.getElementById("newGame").addEventListener("click", gameInit);

function gameInit() {
  gamePlay = true;
  player = Math.floor(Math.random() * 2);
  roundScore = 0;
  totalScore = [0, 0];
  goal = 100;

  document.getElementById("dice1").innerHTML = "";
  document.getElementById("dice2").innerHTML = "";