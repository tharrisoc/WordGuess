# WordGuess
A command line word guessing game implemented using Node

Run this game by simply typing ````node index.js```` at the shell command prompt.

Type Control-C to end the game. 

Note: to turn off the DEBUG statement that shows the randomly-selected word,
          comment out line 71 of index.js.
````
Thomass-MacBook-Pro:WordGuess thomaswharris$ node index.js

(DEBUG) tenfoldness
_ _ _ _ _ _ _ _ _ _ _ 
? Guess a letter!  n

CORRECT!!!
_ _ n _ _ _ _ n _ _ _ 
? Guess a letter!  v

INCORRECT!!!
9 guesses remaining!!!
_ _ n _ _ _ _ n _ _ _ 
? Guess a letter!  c

INCORRECT!!!
8 guesses remaining!!!
_ _ n _ _ _ _ n _ _ _ 
? Guess a letter!  t

CORRECT!!!
t _ n _ _ _ _ n _ _ _ 
? Guess a letter!  s

CORRECT!!!
t _ n _ _ _ _ n _ s s 
? Guess a letter!  m

INCORRECT!!!
7 guesses remaining!!!
t _ n _ _ _ _ n _ s s 

.  .  .  .  .

? Guess a letter!  a
     
INCORRECT!!!
0 guesses remaining!!!
You have used all of your guesses.
The word was tenfoldness
     
Moving on to next word
     

(DEBUG) immeasurably
_ _ _ _ _ _ _ _ _ _ _ _ 
? Guess a letter!  i
CORRECT!!!

i _ _ _ _ _ _ _ _ _ _ _ 
? Guess a letter!  b
CORRECT!!!

i _ _ _ _ _ _ _ _ b _ _ 
? Guess a letter!  m
CORRECT!!!

i m m _ _ _ _ _ _ b _ _ 
? Guess a letter!  e
CORRECT!!!

i m m e _ _ _ _ _ b _ _ 
? Guess a letter!  a
CORRECT!!!

i m m e a _ _ _ a b _ _ 
? Guess a letter!  s
CORRECT!!!

i m m e a s _ _ a b _ _ 
? Guess a letter!  u
CORRECT!!!

i m m e a s u _ a b _ _ 
? Guess a letter!  r
CORRECT!!!

i m m e a s u r a b _ _ 
? Guess a letter!  y
CORRECT!!!

i m m e a s u r a b _ y 
? Guess a letter!  l
CORRECT!!!

You got it right! Next word!
i m m e a s u r a b l y 
````
