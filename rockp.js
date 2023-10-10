function computerSelection() {
  const Arr = ["Rock", "paper", "scissors"];
  const randomElement = Arr[Math.floor(Math.random() * Arr.length)];
  return randomElement;
}

const modal = document.querySelector(".modal");
const playAgainBtn = document.getElementById("playAgainBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function showModal() {
  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

playAgainBtn.addEventListener("click", function () {
  window.location.reload();
  hideModal();
});
closeModalBtn.addEventListener("click", (e) => {
  hideModal();
});

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
const rock = document.createElement("img");
rock.src = "rock.jpg";
rock.alt = "Rock";
rock.classList.add("rock-btn");
container.appendChild(rock);
const Paper = document.createElement("img");
Paper.src = "paper.jpg";
Paper.alt = "paper";
Paper.classList.add("paper-btn");
container.appendChild(Paper);
const scissors = document.createElement("img");
scissors.classList.add("scissors-btn");
scissors.alt = "scissors";
scissors.src = "scissors.jpg";
container.appendChild(scissors);
const DisplayPlayer = document.createElement("div");
document.body.appendChild(DisplayPlayer);
DisplayPlayer.classList.add("result");
let chances = 5;
let player = 0;
let computer = 0;

document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && chances > 0) {
    const playerChoice = e.target.alt;
    const computerChoice = computerSelection();

    if (playerChoice == computerChoice) {
      console.log("its a draw");
    } else if (
      (playerChoice === "Rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "Rock")
    ) {
      console.log(`you won ${playerChoice} ${computerChoice}`);
      player++;
    } else {
      console.log(`you lose ${playerChoice} ${computerChoice}`);
      computer++;
    }

    DisplayPlayer.textContent = `player Chose: ${playerChoice}\n, Computer Chose: ${computerChoice}`;
    chances--;

    if (chances == 0) {
      if (player > computer) {
        console.log("You won!");
        DisplayPlayer.textContent = `You won!! you Scored ${player}, computer Scored ${computer}`;
      } else if (computer > player) {
        console.log("You lose!");
        DisplayPlayer.textContent = `You Lose!! you Scored ${player}, computer Scored ${computer}`;
      } else {
        console.log("It's a tie match!");
        DisplayPlayer.textContent = `It's a tie!! you Scored ${player}, computer Scored ${computer}`;
      }
      showModal();
    }
  }
});
