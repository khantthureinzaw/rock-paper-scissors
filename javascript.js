let humanScore = 0;
let computerScore = 0;

// Get a random choice from the computer
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return 'rock'
    } else if (x === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

// Prompt the user for a choice
function getHumanChoice() {
    let userChoice = prompt('Choose rock, paper or scissors!').toLowerCase();
    let InvalidChoice = true;
    while (InvalidChoice) {
        if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
            InvalidChoice = false;
        } else {
            userChoice = prompt('Only choose rock, paper or scissors!').toLowerCase();
        }
    }
    return userChoice
}

//Play a round of the game between human and computer
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Tie!')
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock')
        computerScore++;

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors')
        humanScore++;

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock')
        humanScore++;

    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beat Paper')
        computerScore++;

    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors')
        computerScore++;

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beat Paper')
        humanScore++;
    }
}


//Repeat the playRound() 5 times and keeps track of the scores. Declare a winner at the end.
function playGame() {
    let keepPlaying = true;
    while (keepPlaying) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
        if (humanScore + computerScore === 5) {
            keepPlaying = false;
        }
    }
    if (humanScore > computerScore) {
        console.log('Congratulations! You are the winner!');
    } else if (humanScore < computerScore) {
        console.log('Computer won! Better luck next time.');
    } else {
        console.log('It was a draw!');
    }

}

playGame();