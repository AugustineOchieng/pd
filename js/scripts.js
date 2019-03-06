gameInit();

var gamePlay, player, roundScore, totalScore, previousDice1, previousDice2, goal;

document.getElementById("newGame").addEventListener("click", gameInit);

function gameInit() {
  gamePlay = true;
  player = Math.floor(Math.random() * 2);
  roundScore = 0;
  totalScore = [0, 0];
  goal = 100;

  document.getElementById("dice1").textContent = "";
  document.getElementById("dice2").textContent = "";

  document.getElementById("current-score-0").textContent = roundScore;
  document.getElementById("current-score-1").textContent = roundScore;

  document.getElementById("total-0").textContent = totalScore[0];
  document.getElementById("total-1").textContent = totalScore[1];

  document.getElementById("dice1").textContent = "";
  document.getElementById("dice2").textContent = "";

  document.getElementById("player-label-0").textContent = "Player 1";
  document.getElementById("player-label-0").classList.remove("font-red");

  document.getElementById("player-label-1").textContent = "Player 2";
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
    //  document.getElementById("dice2").textContent = dice2;
    yaGetBanner();

    //
    document.getElementById("diceimg").innerHTML = ("images/" + dice1 + ".png")

    // 4. Check whether either dice rolled a 1
    if (dice1 === 1) {

      nextPlayer();
    }

    // 5. Check if previous roll for either dice was a 6 and compare whether current roll for either dice is a 6.
    if (previousDice1 === 6 && dice1 === 6 || previousDice2 === 6 && dice2 === 6) {
      (player === 0) ? totalScore[player] = 0: totalScore[player] = 0;
      document.getElementById("total-" + player).innerHTML = totalScore[player];
      nextPlayer();
    } else {
      previousDice1 = dice1;
      previousDice2 = dice2;
    }

  }

});

document.getElementById("hold").addEventListener("click", function () {
  if (gamePlay) {

    // 1. Round score gets added to totalScore and round score is cleared
    totalScore[player] += roundScore;

    // 2. Check if total score of a player is greater than the goal and update accordingly
    if (totalScore[player] >= goal) {
      document.getElementById("total-" + player).innerHTML = totalScore[player];
      document.getElementById("player-label-" + player).innerHTML = "WINNER!";
      document.getElementById("player-label-" + player).classList.add("font-red");
      gamePlay = false;
    } else {
      document.getElementById("total-" + player).innerHTML = totalScore[player];
      nextPlayer();
    }

    // 3. Clear Dice
    document.getElementById("dice1").innerHTML = "";
    document.getElementById("dice2").innerHTML = "";


  }

});

function nextPlayer() {
  roundScore = 0;
  document.getElementById("current-score-" + player).innerHTML = roundScore;
  document.getElementById("player-" + player).classList.remove("active");
  (player === 0) ? player = 1: player = 0;
  document.getElementById("player-" + player).classList.add("active");
  document.getElementById("dice1").innerHTML = "";
  document.getElementById("dice2").innerHTML = "";
}