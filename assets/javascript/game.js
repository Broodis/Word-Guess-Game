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
function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        // Run Game Logic
        guessedLetterBank.push(letter);

        // Compare Guessed Letter to Chosen Word
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                // If character matches, replace placholder with letter
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }
        $placeholders.textContent = pickedWordPlaceholderArr.join('');
        // Otherwise pass the letter to our checkIncorrect function
        checkIncorrect(letter);
    }
    else {
        if (!gameRunning) {
            alert("Start the game by clicking on the START A NEW GAME button");
        } else {
            alert("You already guessed that letter, try a different one!");
        }
    }
}

// Incorrect Letters Function
function checkIncorrect(letter) {
    if (pickedWordPlaceholderArr.indexOf(letter) === -1) {
        guessesLeft--;
        incorrectLetterBank.push(letter);
        // Write incorrect letters to DOM
        $guessedLetters.textContent = incorrectLetterBank.join(' ');
        // Write guesses left to DOM
        $guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
}

// Check for losses function
function checkLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        $losses.textContent = losses;
        $placeholders.textContent = pickedWord;
    }
    // Run checkWin function after checkLoss function
    checkWin();
}

// Check for Wins function
function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase())
    { 
        wins++;
        gameRunning = false;
        $wins.textContent = wins;
    }
}

// Event Listener for New Game Button
$newGameButton.addEventListener('click', newGame);

// OnKeyUp Event for Letter Guesses
document.onkeyup = function (event) {
    console.dir(event);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}