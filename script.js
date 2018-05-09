let cols = document.getElementsByTagName("section");
const playerOneMarkerBox = document.getElementById("playerOneMarkerBox");
const playerTwoMarkerBox = document.getElementById("playerTwoMarkerBox");
let player1 = "b";
let player2 = "r";
let board = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
piecedrop = function (event) {
    info.textcontent = "";
    let colclick = event.currentTarget;
    if (colclick.childElementCount >= 6) {
        alert("Invalid Move")
        return
    }
    if (player1 === "b") {

        if (colclick.childElementCount === 0) {

            const playerOnePiece = playerOneMarkerBox.lastElementChild;
            colclick.appendChild(playerOnePiece);
            info.textContent = "Place Piece";
            board[colclick.dataset.index].push("B");
            //console.log(board);
            player2 = "r";
            player1 = player2;
            player2 = "b";

        } else {
            const playerOnePiece = playerOneMarkerBox.lastElementChild;
            colclick.appendChild(playerOnePiece);
            info.textContent = "Place Piece";
            board[colclick.dataset.index].push("B");
            //console.log(board);
            player2 = "r";
            player1 = player2;
            player2 = "b";

        }
    } else {
        const playerTwoPiece = playerTwoMarkerBox.lastElementChild;
        colclick.appendChild(playerTwoPiece);
        info.textContent = "Place Piece";
        board[colclick.dataset.index].push("R");
        //console.log(board);
        player1 = "r";
        player2 = player1;
        player1 = "b";
    }
    win()
};
const colEdge = board.length - 3;
const rowEdge = board[0].length - 3;

function win() {
    //vertical 
    for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
        if (board[columnIndex].length >= 4) {
            for (let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                if (cell) {
                    const cellIsSameAsOneAbove = cell === board[columnIndex][rowIndex + 1];
                    const cellIsSameAsTwoAbove = cell === board[columnIndex][rowIndex + 2];
                    const cellIsSameAsThreeAbove = cell === board[columnIndex][rowIndex + 3];
                    if (cellIsSameAsOneAbove && cellIsSameAsTwoAbove && cellIsSameAsThreeAbove) {
                        console.log("wooo");
                    }
                }
            }
        }
    }
}

for (let eachcol = 0; eachcol < cols.length; eachcol++) {
    cols[eachcol].addEventListener("click", piecedrop);
}