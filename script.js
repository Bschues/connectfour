let cols = document.getElementsByTagName("section");
const playerOneMarkerBox = document.getElementById("playerOneMarkerBox");
const playerTwoMarkerBox = document.getElementById("playerTwoMarkerBox");
let player1 = "blackmarker";
let player2 = "redmarker";
let board = [
    [],
    [],
    [],
    [],
    [],
    []
]

for (let rownm = 0; rownm < board.length; rownm++) {
    let row = board[rownm];
    console.log(row);
}


piecedrop = function (event) {
    info.textcontent = "";
    let colclick = event.currentTarget;
    if (colclick.childElementCount >= 6) {
        alert("Invalid Move")
        return
    }

    if (player1 === "blackmarker") {

        if (colclick.childElementCount === 0) {

            const playerOnePiece = playerOneMarkerBox.lastElementChild;
            colclick.appendChild(playerOnePiece);
            info.textContent = "Place Piece";
            player2 = "redmarker";
            player1 = player2;
            player2 = "blackmarker";
        } else {
            const playerOnePiece = playerOneMarkerBox.lastElementChild;
            colclick.appendChild(playerOnePiece);
            info.textContent = "Place Piece";
            player2 = "redmarker";
            player1 = player2;
            player2 = "blackmarker";
        }

    } else {
        const playerTwoPiece = playerTwoMarkerBox.lastElementChild;
        colclick.appendChild(playerTwoPiece);
        info.textContent = "Place Piece";
        player1 = "redmarker";
        player2 = player1;
        player1 = "blackmarker";

    }

}


for (let eachcol = 0; eachcol < cols.length; eachcol++) {
    cols[eachcol].addEventListener("click", piecedrop);
}