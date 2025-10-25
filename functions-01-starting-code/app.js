const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

// function startGame() {
//     console.log('Game is starting...');
// }

// const person = {
//     name: 'Shiva',
//     greet: function greet() {
//         console.log('Hello!');
//     }
// };

// person.greet();

// console.log(typeof startGame);
// console.log(startGame);
// console.dir(startGame);

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS} ?`,'').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE}, for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getWinner = function(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return RESULT_DRAW;
    } else if (
        (computerChoice === ROCK && playerChoice === PAPER) ||
        (computerChoice === PAPER && playerChoice === SCISSORS) ||
        (computerChoice === SCISSORS && playerChoice === ROCK)
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

startGameBtn.addEventListener('click', function() {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice =  getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    let message = `You picked ${playerSelection}, computer picked ${computerChoice}. `;
    if (winner === RESULT_DRAW) {
        message += "It's a draw!";
    } else if (winner === RESULT_PLAYER_WINS) {
        message += "You win!";
    } else {
        message += "Computer wins!";
    }
    alert(message);
    gameIsRunning = false;
});