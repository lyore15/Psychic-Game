var computerChocies = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Wins = 0;
var Losses = 0;
var numberGuessesLeft = 9;
var guessesSoFar = [];

document.onkeyup = function (event) {
    userGuesses = event.key;
    var computerGuess = computerChocies[Math.floor(Math.random() * computerChocies.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuesses) > -1) {

        if (userGuesses === computerGuess) {
            Wins++;
            alert("You are one with the Universe!");
            numberGuessesLeft = 9;
            guessesSoFar = [];
        }
        if (userGuesses != computerGuess) {
            numberGuessesLeft--;
            guessesSoFar.push(userGuesses);
        }
        if (numberGuessesLeft === 0) {
            numberGuessesLeft = 9;
            Losses++;
            alert("You Lost. Would you like to try again? Remeber be one with the Universe...");
            guessesSoFar = [];

        }
    }

    var newhtml = 
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of...</p>" +
    "<p>Wins: " + Wins + "</p>" +
    "<p>Losses: " + Losses + "</p>"  +
    "<p>Guesses Left: " + numberGuessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guessesSoFar.join (", ") + "</p>";
    document.querySelector("#game").innerHTML = newhtml;

}
