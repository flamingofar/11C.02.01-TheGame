/** @format */
const choiceBtns = document.querySelectorAll("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let userChoice, computerChoice, result;

window.addEventListener("DOMContentLoaded", start);
// Start Program
function start() {
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
	if (userChoice == computerChoice) {
		result = "tie";
	} else if (
		(userChoice == "paper" && computerChoice == "rock") ||
		(userChoice == "rock" && computerChoice == "scissors") ||
		(userChoice == "scissors" && computerChoice == "paper")
	) {
		result = "win";
	} else {
		result = "lose";
	}
	showResult();
}

function showResult() {
	document.querySelector(`#${result}`).classList.remove("hidden");
}

//Helper functions
