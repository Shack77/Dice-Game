function rollDice() {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var randomImage1 = "./images/dice" + random1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomImage1);

  var random2 = Math.floor(Math.random() * 6) + 1;
  var randomImage2 = "./images/dice" + random2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImage2);

  var heading = document.querySelector("h1");
  if (random1 > random2) {
    heading.innerHTML = "Player 1 Wins!";
  } else if (random1 < random2) {
    heading.innerHTML = "Player 2 Wins!";
  } else {
    heading.innerHTML = "Draw!";
  }
}
