var wordjs   = require("./word.js");
var wordText = require("./wordlist.js");
var inquirer = require("inquirer");

/* DEBUG start
console.log(wordText;
console.log(wordText.words);
console.log(wordText.words.result.length);
  DEBUG end */

const MAX_GUESSES = 10;

var gamesPlayed = 0;
var guessesMade;
var guessesLeft;
var mysteryWord;
var wordObject;
var status;
var letterGuessed;

// Because the inquirer.prompt call is asynchronous, all of the game logic
// is in this function so as to prevent any other code from running while
// the script is waiting for user input.

function applyGuesses() {
      console.log(wordObject.toString());

      inquirer.prompt([
          {
            name:    "guess",
            message: "Guess a letter! "
          }
        ]).then(function(answer) {
             letterGuessed = answer.guess;
             status = wordObject.letterInWord(letterGuessed);
             if (status !== wordjs.nomatch) {
               console.log("\nCORRECT!!!");
               ++guessesMade;
               if (status === wordjs.allmatched) {
                 console.log("You got it right! Next word!");
                 console.log(wordObject.toString());
                 setupNextGame();
               }
             } else {
               console.log("\nINCORRECT!!!");
               ++guessesMade;
               --guessesLeft;
               console.log(guessesLeft + " guesses remaining!!!");
               if (guessesLeft === 0) {
                 console.log("You have used all of your guesses.");
                 console.log("The word was " + mysteryWord + "\n");
                 console.log("Moving on to next word");
                 setupNextGame();
               }
             }
             applyGuesses();
        });
  }  // applyGuesses()

// Generate a random integer between 1 and 100 inclusive
function randomInteger() {
    return Math.floor(Math.random() * 100) + 1;
}

// Reset the game variables to make it appear that there is no game in progress
function setupNextGame() {
  mysteryWord = wordText.words.result[randomInteger()];

  // Uncomment the following line so that you can see what the 
  // mystery word is before you start making guesses
  console.log("\n(DEBUG) " + mysteryWord);  // for DEBUGing purposes only

  wordObject = new wordjs.constructor(mysteryWord);
  guessesMade = 0;
  guessesLeft = MAX_GUESSES;
  status = wordjs.nomatch;
}  

// Set up the initial game
setupNextGame();

// Use recursion to apply the user's guesses, and to set up subsequent games
applyGuesses();
