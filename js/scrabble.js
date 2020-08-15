/*
File: scrabble.js
Kevin Greene, kevin_greene@student.uml.edu
Student of Umass Lowell Computer Science,
in course COMP 4610 GUI Programming I Sec 021
File created: 8/14/2020
Description: This is the JavaScript file for hw8,
  the one-line scrabble game
*/

// pieces data structure from https://d1b10bmlvqabco.cloudfront.net/attach/icm9jynacvn5kx/i5ic1b2hwmz6nv/ihe1j0g0o3we/pieces.json
// I added on image sources and amountRemaining

var pieces = [
  	{"letter":"A", "value":1,  "amount":9,  "amountRemaining":9,  "src":"images/Scrabble_Tiles/Scrabble_Tile_A.jpg"},
  	{"letter":"B", "value":3,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_B.jpg"},
  	{"letter":"C", "value":3,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_C.jpg"},
  	{"letter":"D", "value":2,  "amount":4,  "amountRemaining":4,  "src":"images/Scrabble_Tiles/Scrabble_Tile_D.jpg"},
  	{"letter":"E", "value":1,  "amount":12, "amountRemaining":12,  "src":"images/Scrabble_Tiles/Scrabble_Tile_E.jpg"},
  	{"letter":"F", "value":4,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_F.jpg"},
  	{"letter":"G", "value":2,  "amount":3,  "amountRemaining":3,  "src":"images/Scrabble_Tiles/Scrabble_Tile_G.jpg"},
  	{"letter":"H", "value":4,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_H.jpg"},
  	{"letter":"I", "value":1,  "amount":9,  "amountRemaining":9,  "src":"images/Scrabble_Tiles/Scrabble_Tile_I.jpg"},
  	{"letter":"J", "value":8,  "amount":1,  "amountRemaining":1,  "src":"images/Scrabble_Tiles/Scrabble_Tile_J.jpg"},
  	{"letter":"K", "value":5,  "amount":1,  "amountRemaining":1,  "src":"images/Scrabble_Tiles/Scrabble_Tile_K.jpg"},
  	{"letter":"L", "value":1,  "amount":4,  "amountRemaining":4,  "src":"images/Scrabble_Tiles/Scrabble_Tile_L.jpg"},
  	{"letter":"M", "value":3,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_M.jpg"},
  	{"letter":"N", "value":1,  "amount":6,  "amountRemaining":6,  "src":"images/Scrabble_Tiles/Scrabble_Tile_N.jpg"},
  	{"letter":"O", "value":1,  "amount":8,  "amountRemaining":8,  "src":"images/Scrabble_Tiles/Scrabble_Tile_O.jpg"},
  	{"letter":"P", "value":3,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_P.jpg"},
  	{"letter":"Q", "value":10, "amount":1,  "amountRemaining":1,  "src":"images/Scrabble_Tiles/Scrabble_Tile_Q.jpg"},
  	{"letter":"R", "value":1,  "amount":6,  "amountRemaining":6,  "src":"images/Scrabble_Tiles/Scrabble_Tile_R.jpg"},
  	{"letter":"S", "value":1,  "amount":4,  "amountRemaining":4,  "src":"images/Scrabble_Tiles/Scrabble_Tile_S.jpg"},
  	{"letter":"T", "value":1,  "amount":6,  "amountRemaining":6,  "src":"images/Scrabble_Tiles/Scrabble_Tile_T.jpg"},
  	{"letter":"U", "value":1,  "amount":4,  "amountRemaining":4,  "src":"images/Scrabble_Tiles/Scrabble_Tile_U.jpg"},
  	{"letter":"V", "value":4,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_V.jpg"},
  	{"letter":"W", "value":4,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_W.jpg"},
  	{"letter":"X", "value":8,  "amount":1,  "amountRemaining":1,  "src":"images/Scrabble_Tiles/Scrabble_Tile_X.jpg"},
  	{"letter":"Y", "value":4,  "amount":2,  "amountRemaining":2,  "src":"images/Scrabble_Tiles/Scrabble_Tile_Y.jpg"},
  	{"letter":"Z", "value":10, "amount":1,  "amountRemaining":1,  "src":"images/Scrabble_Tiles/Scrabble_Tile_Z.jpg"},
];

// Object to keep track of baord spaces. Letter will correspond to a letter tile
// that is placed on this space. double word score space has value of 1 for doubleWord,
// double letter score space has value of 1 for doubleLetter.
var board = [
    {"space":"space0", "doubleWord":0, "doubleLetter":0, "letter":""},
    {"space":"space1", "doubleWord":1, "doubleLetter":0, "letter":""},
    {"space":"space2", "doubleWord":0, "doubleLetter":0, "letter":""},
    {"space":"space3", "doubleWord":0, "doubleLetter":0, "letter":""},
    {"space":"space4", "doubleWord":0, "doubleLetter":0, "letter":""},
    {"space":"space5", "doubleWord":0, "doubleLetter":1, "letter":""},
    {"space":"space6", "doubleWord":0, "doubleLetter":0, "letter":""}
]

// array to hold the letters on our track
// the id of each letter image corresponds to the actual letter,
// and a "played" value that tells us if the letter was played this turn.
// It is 1 by default so that assign_letters knows to get a new letter.
var rack = [
    {"space":"letter0", "letter":"", "played":1},
    {"space":"letter1", "letter":"", "played":1},
    {"space":"letter2", "letter":"", "played":1},
    {"space":"letter3", "letter":"", "played":1},
    {"space":"letter4", "letter":"", "played":1},
    {"space":"letter5", "letter":"", "played":1},
    {"space":"letter6", "letter":"", "played":1}
]

// variable to hold total score
var totalScore = 0;

// Code for drag and drop events from https://www.w3schools.com/html/html5_draganddrop.asp

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, el) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");

  var space = $(el).attr('id'); // get id of space we try to drop on
  var boardPosition = findElement(board, "space", space); // find space in board array

  if(boardPosition.letter == "") { // if the space is empty,
      var oldPosition;
      if(oldPosition = findElement(board, "letter", data)) { // if the letter was moved from elsewhere on the board
          oldPosition.letter = ""; // remove its old position from board variable
      }
      boardPosition.letter = data; // store letter id in board array at current space
      findElement(rack, "space", data).played = 1; // The letter was played
      el.appendChild(document.getElementById(data)); // put the piece into the space
  }
}

$(document).ready(function() {
    $("#submitWord").click(function() {

    })
})

// function to assign letters and source images to our letter tiles
function assign_letters() {
    var allPieces = []; // array to hold all remaining allPieces
    var randomInt; // stores random variable we generate later
    var letter = ""; //to hold current letter we are working with

    var i, j; //index variables

    for(i = 0; i < 26; i++) { // to iterate through pieces array
        for(j = 0; j < pieces[i].amountRemaining; j++) { // for every remaining piece for this letter,
            allPieces.push(pieces[i].letter); // add this letter to the array

        }
    }

    //display number of letters Remaining
    $("#lettersRemaining").text(allPieces.length);

    for(i = 0; i < 7; i++) { // iterate through our rack
        if(rack[i].played == 1) { // if letter was played, we need a new letter
            // generates a random integer within the size of the allPieces array
            // code from https://www.w3schools.com/js/js_random.asp
            randomInt = Math.floor(Math.random() * allPieces.length);
            letter = allPieces[randomInt]; // store the letter

            // remove letter from allPieces array
            // code from https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
            allPieces.splice(randomInt, 1);

            //decrement amount remaining in pieces array
            findElement(pieces, "letter", letter).amountRemaining--;

            rack[i].letter = letter; // store letter in rack array
        }
    }

    i = 0; // index to rack once again

    // for each Letter image in the html:
    // find the letter corresponding to our rack position (rack[i].letter)
    // and get the source image for that letter, and update our images source file
    // and finally, we set the played value to 0
    $("#letter0").attr("src", findElement(pieces, "letter", rack[i].letter).src);
    rack[i].played = 0;
    i++;
    $("#letter1").attr("src", findElement(pieces, "letter", rack[i].letter).src);
    rack[i].played = 0;
    i++;
    $("#letter2").attr("src", findElement(pieces, "letter", rack[i].letter).src);
    rack[i].played = 0;
    i++;
    $("#letter3").attr("src", findElement(pieces, "letter", rack[i].letter).src);
    rack[i].played = 0;
    i++;
    $("#letter4").attr("src", findElement(pieces, "letter", rack[i].letter).src);
    rack[i].played = 0;
    i++;
    $("#letter5").attr("src", findElement(pieces, "letter", rack[i].letter).src);
    rack[i].played = 0;
    i++;
    $("#letter6").attr("src", findElement(pieces, "letter", rack[i].letter).src);
    rack[i].played = 0;
}

function findElement(arr, key, value) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][key] == value)
            return arr[i];
    }

    return 0;
}

function calculateScore() {
    var letter; // current letter
    var letterScore; // score of current letter
    var wordScore = 0; // total score of played word
    var doubleWord = 0; // keeps track of a letter being on the double word tile
    for(var i = 0; i < 7; i++) { //iterate through board
        letter = board[i].letter; // get id of letter object ("" if board space is empty)

        if(letter != "") { // as long as space isnt empty,
          letter = findElement(rack, "space", letter).letter; // get actual letter
          // find the score corresponding to this letter
          letterScore = findElement(pieces, "letter", letter).value;

          // if this letter is on a double letter space, double letter score
          if(board[i].doubleLetter) {
              letterScore = letterScore * 2;
          }
          // if this letter is on a double word score, then doubleWord is true
          if(board[i].doubleWord) {
              doubleWord = 1;
          }

          // add letter score onto total word score
          wordScore = wordScore + letterScore;
        }
    }

    // if one letter was on a double word space, we double the score of the word
    if(doubleWord){
        wordScore = wordScore * 2;
    }

    return wordScore;
}

// When we submit a new word
function submitWord() {
  // get the points scored by the word
    var wordScore = calculateScore();

    //add it to the total score
    totalScore += wordScore;

    //display scores
    $("#totalScore").text(totalScore);
    $("#wordScore").text(wordScore);

    $(".boardSpace").empty(); //clear board spaces

    // tell board object that each space is empty
    for(var i = 0; i < 7; i++) {
        board[i].letter="";
    }

    // put rack back how it was
    $("#rack").html(
      "<img id=\"letter0\" class=\"scrabble\" draggable=\"true\" ondragstart=\"drag(event)\"></img>" +
      "<img id=\"letter1\" class=\"scrabble\" draggable=\"true\" ondragstart=\"drag(event)\"></img>" +
      "<img id=\"letter2\" class=\"scrabble\" draggable=\"true\" ondragstart=\"drag(event)\"></img>" +
      "<img id=\"letter3\" class=\"scrabble\" draggable=\"true\" ondragstart=\"drag(event)\"></img>" +
      "<img id=\"letter4\" class=\"scrabble\" draggable=\"true\" ondragstart=\"drag(event)\"></img>" +
      "<img id=\"letter5\" class=\"scrabble\" draggable=\"true\" ondragstart=\"drag(event)\"></img>" +
      "<img id=\"letter6\" class=\"scrabble\" draggable=\"true\" ondragstart=\"drag(event)\"></img>"
    );

    assign_letters(); // put new letters on the rack
}

$(document).ready(function() {
    assign_letters();
})
