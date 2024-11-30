let humanScore = 0;
let computerScore = 0;
const humanDisplay = document.querySelector('#humanScore');
const computerDisplay = document.querySelector('#computerScore');
const winningText = document.querySelector('#winner');

//Update the displayed scores on the page
function updateScores() {
    humanDisplay.innerText = humanScore;
    computerDisplay.innerText = computerScore;
}

// Get a random choice from the computer
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][x];
}

//Play a round of the game between human and computer
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const humanChoiceDisplay = document.querySelector('#humanChoice');
    const computerChoiceDisplay = document.querySelector('#computerChoice');
    humanChoiceDisplay.innerText = `You chose: ${humanChoice}`;
    computerChoiceDisplay.innerText = `Computer chose: ${computerChoice}`;

    if (humanChoice === computerChoice) {
        winningText.innerText = 'Tie!';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winningText.innerText = 'You won this round!';
        humanScore++;
    } else {
        winningText.innerText = 'Computer won this round!';
        computerScore++;
    }
    updateScores();

    //Check if the game is over
    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

//Declares the winner when someone reaches 5 points
function declareWinner() {
    const winner =
        humanScore > computerScore
            ? 'Congratulations! You won the game!'
            : 'Computer won the game! Better luck next time.';
    winningText.innerText = winner;
}

// Starts the round when the human chooses rock, paper or scissors
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.value;
        playRound(humanChoice);
    });
});