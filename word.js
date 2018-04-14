// The word to be guessed is represented by one of these objects.

var letters = require("./letter.js");

const MATCHED     = 1;
const NO_MATCH    = 2;
const ALL_MATCHED = 3;

Word.prototype.toString = function() {
  var word = '';

  for (j = 0; j < this.numChars; j++)  {
     word += (this.lettersInWord[j].toString() + ' ');
  }

  return word;
}

function Word(targetWord) {
  this.lettersInWord = new Array();
  this.numChars = targetWord.length;

  for (i = 0; i < this.numChars; i++) {
    this.lettersInWord.push(
      new letters.constructor(targetWord[i]));
  }
}

// Is the guessed letter actually in the word?
Word.prototype.letterInWord = function(letter) {
  var guessedCount = 0;
  var nextLetter;
  var returnVal = NO_MATCH;

  for (i = 0; i < this.numChars; i++) {
    nextLetter = this.lettersInWord[i].toString();
    if (nextLetter !== '_') {
      ++guessedCount;
    } else if ( this.lettersInWord[i].checkGuess(letter) ) {
      ++guessedCount;
      returnVal = MATCHED;
    }
  }

  if ( guessedCount === this.numChars ) {
    returnVal = ALL_MATCHED;
  }
  
  return returnVal;
}

module.exports = {
  constructor : Word,
  nomatch : NO_MATCH,
  matched : MATCHED,
  allmatched : ALL_MATCHED,
};
