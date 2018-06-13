// DOM Elements
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

// Variables 
var wordBank = ['ethereum', 'bitcoin', 'neo', 'ripple', 'litecoin', 'stellar lumens', 'cardano', 'monero', 'vechain', 'dash', 'omisego', 'decred', 'siacoin', 'augur', 'golem', 'wanchain', 'stratis', 'komodo', 'ark', 'ardor', 'pascal'];
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var gameRunning = false;
var pickedWord = " ";
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

// New Game Function
function newGame() {
    gameRunning = true;
    guessesLeft = 7;
    pickedWordPlaceholderArr = [];
    guessedLetterBank = [];
    incorrectLetterBank = [];

    // Pick a New Word
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Create Placeholders
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === ' ') {
            pickedWordPlaceholderArr.push(' ');
        } else {
            pickedWordPlaceholderArr.push('_');
        }
    }

    // Write New Game Info to DOM
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArr.join('');
    $guessedLetters.textContent = incorrectLetterBank;
}

// Letter Guess Function






// Event Listener for New Game Button
$newGameButton.addEventListener('click', newGame);