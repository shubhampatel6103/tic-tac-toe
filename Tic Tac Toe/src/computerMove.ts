function computerMove() {
    let emptyCells = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (gridC[i][j] == "") {
                emptyCells.push([i, j]);
            }
        }
    }
    if (emptyCells.length == 0) {
        return;
    }
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const row = randomCell[0];
    const col = randomCell[1];
    gridC[row][col] = "O";
    currentPlayerC = 1;
    const cell = document.getElementById(`cvp-${row+1}${col+1}`);
    if (cell) {
        cell.textContent = gridC[row][col];
    }
    checkWinnerC();
}