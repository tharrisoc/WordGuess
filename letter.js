// Each letter in the word that is being guessed is represented
// by one of these objects

// Print the letter if it has already been guessed, otherwise print '_'
Letter.prototype.toString = function() {
  if ( this.guessed )
    return this.theLetter;
  else {
    return '_';
  }
}

// constructor

function Letter(letter) {
  this.theLetter = letter;
  this.guessed = false;

  // Is the letter that the user guessed in the word?
  this.checkGuess = function(userGuess) {
    if( userGuess === this.theLetter ) {
      this.guessed = true;
    }

    return this.guessed;
  }
}

module.exports = {
  constructor : Letter
};

