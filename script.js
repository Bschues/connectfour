let cols = document.getElementsByTagName("section");
const playerOneMarkerBox = document.getElementById("playerOneMarkerBox");
const playerTwoMarkerBox = document.getElementById("playerTwoMarkerBox");
let player1 = "b";
let player2 = "r";
let currentPlayer = player1;
let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]
piecedrop = function (event) {
    let colclick = event.currentTarget;
    if (colclick.childElementCount >= 6) {
        alert("Invalid Move")
        return
    }
            if(currentPlayer == player1) {
            const playerOnePiece = playerOneMarkerBox.lastElementChild;
            colclick.appendChild(playerOnePiece);
            board[6-colclick.childElementCount][colclick.dataset.index] = player1;
            currentPlayer = player2;
        } else {
            const playerTwoPiece = playerTwoMarkerBox.lastElementChild;
            colclick.appendChild(playerTwoPiece);
            board[6-colclick.childElementCount][colclick.dataset.index] = player2
            currentPlayer = player1;

        }
     win()
};

function win() {
    //Horizontal 
    let hasWon = false;
    const columnEdge = board[0].length - 3;
    
    for(let rowIndex = 0; rowIndex < board.length; rowIndex++){
        for(let columnIndex = 0; columnIndex < columnEdge; columnIndex++) {
            let cell = board[rowIndex][columnIndex];
            if(cell) {
                const cellIsSameAsOneOver = cell === board[rowIndex][columnIndex + 1];
                const cellIsSameAsTwoOverAndBelow = cell === board[rowIndex][columnIndex + 2];
                const cellIsSameAsThreeOverAndBelow = cell === board[rowIndex][columnIndex + 3];
                if(cellIsSameAsOneOver && cellIsSameAsTwoOverAndBelow && cellIsSameAsThreeOverAndBelow) {
                    console.log("horizontal win");
                    hasWon = true;
                }
            }
        }
    }
    //Vertical
    const rowEdge = board.length -3;
    for(let rowIndex = 0; rowIndex < rowEdge; rowIndex++){
        for(let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
            let cell = board[rowIndex][columnIndex];
            if(cell) {
                
                const cellIsSameAsOneBelow = cell === board[rowIndex + 1][columnIndex];
                const cellIsSameAsTwoBelow = cell === board[rowIndex + 2][columnIndex];
                const cellIsSameAsThreeBelow = cell === board[rowIndex + 3][columnIndex];
                if(cellIsSameAsOneBelow && cellIsSameAsTwoBelow && cellIsSameAsThreeBelow) {
                    console.log("Vertical win");
                    hasWon = true;
                }
            }
        }
    }
    //Diagonal Down Right
    for(let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
        for(let columnIndex = 0; columnIndex < columnEdge; columnIndex++) {
            let cell = board[rowIndex][columnIndex];
            if(cell){
                const cellIsSameAsOneOverAndBelow = cell === board[rowIndex + 1][columnIndex + 1];
                const cellIsSameAsTwoOverAndBelow = cell === board[rowIndex + 2][columnIndex + 2];
                const cellIsSameAsThreeOverAndBelow = cell === board[rowIndex + 3][columnIndex + 3];
                if(cellIsSameAsOneOverAndBelow && cellIsSameAsTwoOverAndBelow && cellIsSameAsThreeOverAndBelow) {
                    console.log("Diagonal Down Right win");
                    hasWon = true;
            }
        }
    }
}
for(let rowIndex = 2; rowIndex < rowEdge; rowIndex++) {
    for(let columnIndex = 0; columnIndex < columnEdge; columnIndex++) {
        let cell = board[rowIndex][columnIndex];
        if(cell){
            const cellIsSameAsOneOverAndBelow = cell === board[rowIndex - 1][columnIndex + 1];
            const cellIsSameAsTwoOverAndBelow = cell === board[rowIndex - 2][columnIndex + 2];
            const cellIsSameAsThreeOverAndBelow = cell === board[rowIndex - 3][columnIndex + 3];
            if(cellIsSameAsOneOverAndBelow && cellIsSameAsTwoOverAndBelow && cellIsSameAsThreeOverAndBelow) {
                console.log("Diagonal Down Left win");
                hasWon = true;
        }
    }
}
}
}
//     for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
//         if (board[columnIndex].length >= 4) {
//             const rowEdge = board[columnIndex].length - 3;
//             for (let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
//                 let cell = board[columnIndex][rowIndex];
//                 if (cell) {
//                     const cellIsSameAsOneBelow = cell === board[columnIndex][rowIndex + 1];
//                     const cellIsSameAsTwoBelow = cell === board[columnIndex][rowIndex + 2];
//                     const cellIsSameAsThreeBelow = cell === board[columnIndex][rowIndex + 3];
//                     if (cellIsSameAsOneBelow && cellIsSameAsTwoBelow && cellIsSameAsThreeBelow) {
//                         console.log("vertical win");
//                         hasWon = true;
//                     }
//                 }
//             }
//         }
//     }

//     //horizontal
//     const colEdge = board.length - 3;
//     for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
//         //console.log(columnIndex);
//         if (board[columnIndex].length >= 4) {
//             const rowEdge = board[columnIndex].length - 3;
//             for (let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
                
//                 let cell = board[columnIndex][rowIndex];
//                 if (cell) {
//                     const cellIsSameAsOneOver = cell === board[columnIndex + 1][rowIndex];
//                     const cellIsSameAsTwoOverAndBelow = cell === board[columnIndex + 2][rowIndex];
//                     const cellIsSameAsThreeOverAndBelow = cell === board[columnIndex + 3][rowIndex];
//                     if (cellIsSameAsOneOver && cellIsSameAsTwoOverAndBelow && cellIsSameAsThreeOverAndBelow) {
//                         console.log("horizontal win");
//                         hasWon = true;
//                     }
//                 }
//             }
//         }
//     }
// }
for (let eachcol = 0; eachcol < cols.length; eachcol++) {
    cols[eachcol].addEventListener("click", piecedrop);
}