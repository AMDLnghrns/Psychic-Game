// VARIABLES 
// ======================================================================================================

//Choices for the game
var options=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Starting number of Wins
var wins = 0;
//Starting number of losses
var losses = 0;
//Starting number of guesses left
var guessesLeft = 9;
// // Creating the computer guess
var computerGuess = options[Math.floor(Math.random() * options.length)];
//Confirm what the computer guess is
console.log(computerGuess);
//Confirm what the computer guess type is
console.log(typeof computerGuess)






//Capturing the user input
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    console.log(event);
    // If the letter is equal to the computer guess, run the following functions/methods.
    if (letter === computerGuess) {
        wins++;
        alert('Yes');
    } else {
        alert ('No')
    } 
}


var html = 
    "<h1>The Psychic Game</h1>" +
    "<h2>Can you guess what letter I am thinking off?</h2>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + loses + "</p>" +
    "<p>Guesses left: " + ties + "</p>";
