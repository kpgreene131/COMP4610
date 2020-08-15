Currently working features of Scrabble game:

- letter tiles in the player’s “hand” are selected randomly from a data structure with the
    proper distribution of the letters
- letter tiles can be dragged-and-dropped onto target Scrabble squares
- program identifies which letter tile is dropped onto which Scrabble square
- score is tallied correctly, including consideration of bonus square multipliers

- any number of words can be played until the player wishes to quit or depletes all tiles
- the board is cleared after each round so that a new word can be played
- after playing a word, only the number of letter tiles needed to bring the player’s “hand”
    back to 7 tiles are selected
- score is kept for multiple words
- Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them
    anywhere else, they will be bounced back to the “rack”.
- Once the tile is placed on the Scrabble board, it can not be removed 

Not Working:

- board includes bonus squares (it doesn't)
- Except for the first letter, all sub-subsequent letters must be placed directly next to or
    above/below another letter with no space. Else, they will bounce back to the “rack”.

Partially Working
- I don't think this really counts, but I didn't have the time to
    make my page "pretty", so it is very basic currently.