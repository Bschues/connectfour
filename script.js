let cols = document.getElementsByTagName("section");
const playerOneMarkerBox = document.getElementById("playerOneMarkerBox");
const playerTwoMarkerBox = document.getElementById("playerTwoMarkerBox");
const infoBox = document.getElementById("info")
let player1 = "b";
let player2 = "r";
let hasWon = false;
let currentPlayer = player1;
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
piecedrop = function (event) {
    if (hasWon === false) {
    let colclick = event.currentTarget;
    if (colclick.childElementCount >= 6) {
        alert("Invalid Move")
        return
    }
    if (currentPlayer == player1) {
        const playerOnePiece = playerOneMarkerBox.lastElementChild;
        colclick.appendChild(playerOnePiece);
        board[6 - colclick.childElementCount][colclick.dataset.index] = player1;
        currentPlayer = player2;
    } else {
        const playerTwoPiece = playerTwoMarkerBox.lastElementChild;
        colclick.appendChild(playerTwoPiece);
        board[6 - colclick.childElementCount][colclick.dataset.index] = player2
        currentPlayer = player1;

    }
    win()
  } else {
      return
  }
};

function win() {
    //Horizontal 
    let columnEdge = board[0].length - 3;

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnEdge; columnIndex++) {
            let cell = board[rowIndex][columnIndex];
            if (cell) {
                const cellIsSameAsOneOver = cell === board[rowIndex][columnIndex + 1];
                const cellIsSameAsTwoOverAndBelow = cell === board[rowIndex][columnIndex + 2];
                const cellIsSameAsThreeOverAndBelow = cell === board[rowIndex][columnIndex + 3];
                if (cellIsSameAsOneOver && cellIsSameAsTwoOverAndBelow && cellIsSameAsThreeOverAndBelow) {
                    console.log("horizontal win");
                    infoBox.textContent = "Horizontal Win";

                    hasWon = true;
                }
            }
        }
    }
    //Vertical
    const rowEdge = board.length - 3;
    for (let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
            let cell = board[rowIndex][columnIndex];
            if (cell) {

                const cellIsSameAsOneBelow = cell === board[rowIndex + 1][columnIndex];
                const cellIsSameAsTwoBelow = cell === board[rowIndex + 2][columnIndex];
                const cellIsSameAsThreeBelow = cell === board[rowIndex + 3][columnIndex];
                if (cellIsSameAsOneBelow && cellIsSameAsTwoBelow && cellIsSameAsThreeBelow) {
                    console.log("Vertical win");
                    infoBox.textContent = "Vertical Win";

                    hasWon = true;
                }
            }
        }
    }
    //Diagonal Down Right
    for (let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnEdge; columnIndex++) {
            let cell = board[rowIndex][columnIndex];
            if (cell) {
                const cellIsSameAsOneOverAndBelow = cell === board[rowIndex + 1][columnIndex + 1];
                const cellIsSameAsTwoOverAndBelow = cell === board[rowIndex + 2][columnIndex + 2];
                const cellIsSameAsThreeOverAndBelow = cell === board[rowIndex + 3][columnIndex + 3];
                if (cellIsSameAsOneOverAndBelow && cellIsSameAsTwoOverAndBelow && cellIsSameAsThreeOverAndBelow) {
                    console.log("Diagonal Down Right win");
                    infoBox.textContent = "Diagonal Down Right Win";

                    hasWon = true;
                }
            }
        }
    }
    //Diagonal Down Left
    columnEdge = board[0].length;
    for (let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
        for (let columnIndex = 3; columnIndex < columnEdge; columnIndex++) {
            let cell = board[rowIndex][columnIndex];
            if (cell) {
                const cellIsSameAsOneOverAndBelow = cell === board[rowIndex + 1][columnIndex - 1];
                const cellIsSameAsTwoOverAndBelow = cell === board[rowIndex + 2][columnIndex - 2];
                const cellIsSameAsThreeOverAndBelow = cell === board[rowIndex + 3][columnIndex - 3];
                if (cellIsSameAsOneOverAndBelow && cellIsSameAsTwoOverAndBelow && cellIsSameAsThreeOverAndBelow) {
                    console.log("Diagonal Down Left win");
                    infoBox.textContent = "Diagonal Down left Win";
                    hasWon = true;
                }
            }
        }
    }
}

for (let eachcol = 0; eachcol < cols.length; eachcol++) {
    cols[eachcol].addEventListener("click", piecedrop);
}