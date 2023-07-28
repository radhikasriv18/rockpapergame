  function getComputerChoice() {
    const myArray = ['rock', 'paper', 'scissors'];
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    return randomElement;
  }
  
  function playRound(playerSelection, computerSelection, player, computer) {
    if (playerSelection === computerSelection) {
      console.log("It's a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      computer++;
      console.log("oh no try again");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      player++;
      console.log("yes");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      player++;
      console.log("yes");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computer++;
      console.log("oh no try again");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computer++;
      console.log("oh no try again");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      player++;
      console.log("yes");
    } else {
      console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
      // No need to update player and computer values for invalid input
    }
  
    return [player, computer];
  }
  
  function playerSelection() {
    let ans = prompt("rock, paper, or scissors");
    let choice = ans.toLowerCase();
  
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    } else {
      console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
      // Recursive call to get a valid choice
      return playerSelection();
    }
  }
  
  function game() {
    var player = 0;
    var computer = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerChoice = playerSelection();
      const computerChoice = getComputerChoice();
      [player, computer] = playRound(playerChoice, computerChoice, player, computer);
    }
  
    if (player > computer) {
      console.log("You won!");
    } else if (computer > player) {
      console.log("You lose!");
    } else {
      console.log("It's a tie match!");
    }
  }
  
  game();