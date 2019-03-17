// VARIABLES 
// ======================================================================================================

//Choices for the game
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Starting number of Wins
var wins = 0;

//Starting number of losses
var losses = 0;

//Starting number of guesses left
var guessesLeft = 9;

//Creating an empty array for our guesses
var guessesMade = [];
var guess;

// // Creating the computer guess
var computerGuess = options[Math.floor(Math.random() * options.length)];

//Confirm what the computer guess is
console.log(computerGuess);

//Confirm what the computer guess type is
console.log(typeof computerGuess)

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    // If the letter is equal to the computer guess, run the following functions/methods.
    if (letter === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesMade = [];
        computerGuess = options[Math.floor(Math.random() * options.length)];
    } else {
        if (guessesLeft > 1) {
        //For-loop...
        for (var i = 1; i < 2; i++) {
        //...pushing the letter chosen to the guesses made array
            guess = letter;
            guessesMade.push(guess)};
        guessesLeft--;
        } else {
            losses++;
            guessesLeft = 9;
            guessesMade = [];
            computerGuess = options[Math.floor(Math.random() * options.length)];
        }
    }

    var html = "<h1>The Psychic Game</h1>" +
        "<h2>Can you guess what letter I am thinking off?</h2>" +
        "</br>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" + 
        "<p>Guesses made: " + guessesMade + "</p>";

    document.querySelector('#Game').innerHTML = html;
}