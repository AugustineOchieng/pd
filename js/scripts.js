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
  document.getElementById("current-score-0").innerHTML = roundScore;
  document.getElementById("current-score-1").innerHTML= roundScore;

  document.getElementById("total-0").innerHTML= totalScore[0];
  document.getElementById("total-1").innerHTML = totalScore[1];

  document.getElementById("dice1").innerHTML = "";
  document.getElementById("dice2").innerHTML = "";

  document.getElementById("player-label-0").innerHTML = "Player 1";
  document.getElementById("player-label-0").classList.remove("font-red");

  document.getElementById("player-label-1").innerHTML = "Player 2";
  document.getElementById("player-label-1").classList.remove("font-red");

  document.getElementById("player-0").classList.remove("active");
  document.getElementById("player-1").classList.remove("active");

  document.getElementById("player-" + player).classList.add("active");
}
document.getElementById("roll").addEventListener("click", function () {

  if (gamePlay) {


    // 1. Roll the dice & record previously rolled number by a player
    var dice1 = Math.floor(Math.random() * 6) + 1;
    //var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Update respective roundScore
    roundScore += dice1; //+ dice2;
    document.getElementById("current-score-" + player).innerHTML = roundScore;

    // 3. Display numbers on their respective dice
    document.getElementById("dice1").innerHTML = dice1;

  //
