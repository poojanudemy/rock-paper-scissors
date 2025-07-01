// Rock Paper Scissors Game
let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultMessageElement = document.getElementById('result-message');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');

const choices = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

choiceButtons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = button.getAttribute('data-choice');
        playGame(playerChoice);
    });
});

resetButton.addEventListener('click', resetGame);

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    
    playerChoiceElement.textContent = choices[playerChoice];
    computerChoiceElement.textContent = choices[computerChoice];
    
    showResult(winner, playerChoice, computerChoice);
    updateScore(winner);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'player';
    }
    return 'computer';
}

function showResult(winner, playerChoice, computerChoice) {
    resultMessageElement.classList.remove('win', 'lose', 'tie');
    
    if (winner === 'player') {
        resultMessageElement.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        resultMessageElement.classList.add('win');
    } else if (winner === 'computer') {
        resultMessageElement.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        resultMessageElement.classList.add('lose');
    } else {
        resultMessageElement.textContent = `It's a Tie! Both chose ${playerChoice}`;
        resultMessageElement.classList.add('tie');
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    playerChoiceElement.textContent = '?';
    computerChoiceElement.textContent = '?';
    resultMessageElement.textContent = 'Make your choice!';
    resultMessageElement.classList.remove('win', 'lose', 'tie');
}
