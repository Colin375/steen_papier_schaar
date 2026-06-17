// Output
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");
// Buttons
const btns = document.querySelectorAll('button');
// Rules
const winMoves = {
    Steen: "Schaar",
    Papier: "Steen",
    Schaar: "Papier"
};
// Choices
let humanChoice = "";
let computerChoice = "";

// Function for running the game
function playGame(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice

    // Computer answer
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = 'Steen'
        break
        case 2:
            computerChoice = 'Papier'
        break
        case 3:
            computerChoice = 'Schaar'
        break
    }

    computerOutput.innerHTML = computerChoice;

    // Results
    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel.";
    } else if (winMoves[humanChoice] === computerChoice) {
        resultOutput.innerHTML = "Je hebt gewonnen!"
    } else {
        resultOutput.innerHTML = "Je hebt verloren.";
    }
}

// Span elements
humanOutput.innerHTML = "Dit is de keuze die jij maakt.";
computerOutput.innerHTML = "Dit is de keuze die de computer maakt.";
resultOutput.innerHTML = "Hier komt te staan of je wint.";

// Button click event
btns.forEach(function(button) {
    button.addEventListener("click", playGame)
});