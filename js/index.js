/** @format */
const choiceBtns = document.querySelectorAll("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let userChoice, computerChoice, winner, loser, tie;

window.addEventListener("DOMContentLoaded", start);
// Start Program
function start() {
	console.log("start");
	setUserChoice();
}

// User chooses rock, paper or scissor
function setUserChoice() {
	choiceBtns.forEach((btn) => {
		btn.addEventListener("click", setUserChoiceHandler);
	});
}

function setUserChoiceHandler() {
	start();

	console.log(this.classList.value);
	switch (this.classList.value) {
		case "paper":
			player1.classList = "";
			player1.classList.add("player", "paper");
			userChoice = "paper";
			break;
		case "rock":
			player1.classList = "";
			player1.classList.add("player", "rock");
			userChoice = "rock";
			break;
		case "scissors":
			player1.classList = "";
			player1.classList.add("player", "scissors");
			userChoice = "scissors";
			break;
	}
	choiceBtns.forEach((btn) => {
		btn.removeEventListener("click", setUserChoiceHandler);
	});

	setComputerChoice();
}

// Computer chooses random rock, paper or scisser
function setComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	switch (randomNumber) {
		case 1:
			player2.classList = "";
			player2.classList.add("player", "paper");
			computerChoice = "paper";
			break;
		case 2:
			player2.classList = "";
			player2.classList.add("player", "rock");
			computerChoice = "rock";
			break;
		case 3:
			player2.classList = "";
			player2.classList.add("player", "scissors");
			computerChoice = "scissors";
			break;
	}
	animationStart();
}

//Start animation
function animationStart() {
	const computerHand = document.querySelector("#player1");
	const userHand = document.querySelector("#player2");

	const bothHands = document.querySelectorAll(".player");
	bothHands.forEach((hand) => {
		hand.classList.add("shake");
		hand.addEventListener("animationend", () => {
			hand.classList.remove("shake");
			determineWinner();
		});
	});
}

//Determine Winner
function determineWinner() {
	if (userChoice == "paper" && computerChoice == "rock") {
		showWinner();
		console.log("User Wins with paper");
	} else if (userChoice == "paper" && computerChoice == "paper") {
		showTie();
		console.log("It's a tie with Paper");
	} else if (userChoice == "paper" && computerChoice == "scissors") {
		showLoser();
		console.log("Computer Wins with Scissors");
	} else if (userChoice == "scissors" && computerChoice == "rock") {
		showLoser();
		console.log("Computer Wins with Rock");
	} else if (userChoice == "scissors" && computerChoice == "paper") {
		showWinner();
		console.log("User Wins with Scissors");
	} else if (userChoice == "scissors" && computerChoice == "scissors") {
		showTie();
		console.log("It's a tie with Rock");
	} else if (userChoice == "rock" && computerChoice == "paper") {
		showLoser();
		console.log("Computer Wins with Paper");
	} else if (userChoice == "rock" && computerChoice == "scissors") {
		showWinner();
		console.log("User Wins with Rock");
	} else if (userChoice == "rock" && computerChoice == "rock") {
		showTie();
		console.log("It's a tiewith Rock");
	}
}

function showWinner() {
	document.querySelector("#win").classList.remove("hidden");
}
function showLoser() {
	document.querySelector("#lose").classList.remove("hidden");
}
function showTie() {
	document.querySelector("#draw").classList.remove("hidden");
}

//Helper functions
