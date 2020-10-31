// Getting the Elements from our HTML!
const statusUpdateDiv = document.querySelector(".statusUpdate");
const gameCells = document.querySelectorAll(".gameBoardCell");

// All Tic Tac Toe Variables
let gamePlay = true;
let player = true;
let winner = null;

// Event functions for the game
function checkCell() {
  const topOne = gameCells[0].classList[2];
  const topTwo = gameCells[1].classList[2];
  const topThree = gameCells[2].classList[2];
  const middleOne = gameCells[3].classList[2];
  const middleTwo = gameCells[4].classList[2];
  const middleThree = gameCells[5].classList[2];
  const bottomOne = gameCells[6].classList[2];
  const bottomTwo = gameCells[7].classList[2];
  const bottomThree = gameCells[8].classList[2];

  //Who wins? Which is where I got stumped because of the SVG implementation...? Will not update status appropriate and also will on console log topOne...

  if (topOne && topOne === topTwo && topOne === topThree) {
    gamePlay = false;
    winner = topOne;
    statusUpdateDiv.innerHTML = "topOne" + "This player has won!";
  }
}

function cellClick(event) {
  console.log(event.target.classList);
  const classList = event.target.classList;
  const location = event.target.classList[1];
  console.log("location", location);

  if (classList[2] === "x" || classList[2] === "o") {
    return;
  }

  if (player) {
    classList.add("x");
    player = !player;
  } else {
    classList.add("o");
    player = !player;
  }
}

// All game event listeners
for (const gameCell of gameCells) {
  gameCell.addEventListener("click", cellClick);
}
