// Variables
var turnCounter = 1;
var currentPlayer = 'X';
var gameOver = false;
var msg = document.getElementById('msg');

var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');
var cell9 = document.getElementById('cell9');

var reset = document.getElementById('reset');

// Game Steps


function setMessage(message) {
  msg.innerHTML = message;
}

setMessage('Player X Starts');

// Is clicked cell a valid move?
function validMove(move) {
  return move.innerHTML === ''
    && turnCounter <= 9
    && gameOver === false;
}

// Sent player letter to html
// Assign correct highlight class
function updateBoard(move) {
  move.innerHTML = currentPlayer;
  move.classList.add('highlight' + currentPlayer);
}

function getCell(num) {
  // get a cell id to check value
  return document.getElementById('cell' + num);
}

function checkCombos(a, b, c) {
  // create combo if cells match player and 2 others
  return currentPlayer === getCell(a).innerHTML
    && getCell(a).innerHTML === getCell(b).innerHTML
    && getCell(b).innerHTML === getCell(c).innerHTML;
}

function checkWin(move) {
  // check for winning combos
  var win = checkCombos(1, 2, 3)
    || checkCombos(4, 5, 6)
    || checkCombos(7, 8, 9)
    || checkCombos(1, 4, 7)
    || checkCombos(2, 5, 8)
    || checkCombos(3, 6, 9)
    || checkCombos(1, 5, 9)
    || checkCombos(3, 5, 7);
  return win;
}

function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}


// Master function
function processTurn(move) {
  // process turn only if valid
  if (validMove(move)) {
    updateBoard(move); // update board
    // check for winner
    if (checkWin(move)) {
      // set gameOver to true
      gameOver = true;
      // msg 'Winner!'
      setMessage('Player ' + currentPlayer + ' Wins!');
    } else if (turnCounter === 9) {
    // stalemate msg
      setMessage('Stalemate. Try again.');
    } else {
      switchPlayer(); // switch currentPlayer
      // update msg
      setMessage('Player ' + currentPlayer + '\'s turn...');
    }
    // increment turn counter at end of valid move
    turnCounter++;
  }
}

// Reset gameboard
function resetBoard() {
  for (var i = 1; i <= 9; i++) {
    var cell = document.getElementById('cell' + i);
    cell.classList.remove('highlightX');
    cell.classList.remove('highlightO');
    cell.innerHTML = '';
    turnCounter = 1;
    gameOver = false;
  }
  setMessage('Player X Starts');
}

// Event Listeners
cell1.addEventListener('click', function () {
  processTurn(cell1);
});

cell2.addEventListener('click', function () {
  processTurn(cell2);
});

cell3.addEventListener('click', function() {
  processTurn(cell3);
});

cell4.addEventListener('click', function () {
  processTurn(cell4);
});

cell5.addEventListener('click', function () {
  processTurn(cell5);
});

cell6.addEventListener('click', function() {
  processTurn(cell6);
});

cell7.addEventListener('click', function () {
  processTurn(cell7);
});

cell8.addEventListener('click', function () {
  processTurn(cell8);
});

cell9.addEventListener('click', function() {
  processTurn(cell9);
});

reset.addEventListener('click', function() {
  resetBoard();
});
