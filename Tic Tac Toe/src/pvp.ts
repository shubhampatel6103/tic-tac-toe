let currentPlayer: number = 1

function getPlayer1() {
    let cur = JSON.parse(sessionStorage.getItem('cur') || '""');
    if (cur == 0) {
        return JSON.parse(sessionStorage.getItem('player1') || '""');
    } else {
        return JSON.parse(sessionStorage.getItem('player2') || '""');
    }
}

function getPlayer2() {
    let cur = JSON.parse(sessionStorage.getItem('cur') || '""');
    if (cur == 0) {
        return JSON.parse(sessionStorage.getItem('player2') || '""');
    } else {
        return JSON.parse(sessionStorage.getItem('player1') || '""');
    }
}

function getSetPlayer1() {
    let cur = JSON.parse(sessionStorage.getItem('cur') || '""');
    if (cur == 0) {
        return 'player1';
    } else {
        return 'player2';
    }
}

function getSetPlayer2() {
    let cur = JSON.parse(sessionStorage.getItem('cur') || '""');
    if (cur == 0) {
        return 'player2';
    } else {
        return 'player1';
    }
}

// Returns the current game status
function getStatus(): string {
    let cur = JSON.parse(sessionStorage.getItem('cur') || '""');
    let player1 = getPlayer1();
    let player2 = getPlayer2();
    
    if (currentPlayer == 1) {
        return player1.name + "'s turn"
    } else if (currentPlayer == 2) {
        return player2.name + "'s turn"
    } else if (currentPlayer == 0) {
        return player1.name + " wins!"
    } else if (currentPlayer == 3) {
        if (cur == 0) {
            sessionStorage.setItem('cur', JSON.stringify(1));
        } else {
            sessionStorage.setItem('cur', JSON.stringify(0));
        }
        return player2.name + " wins!"
    } else if (currentPlayer == -1) {
        if (cur == 0) {
            sessionStorage.setItem('cur', JSON.stringify(1));
        } else {
            sessionStorage.setItem('cur', JSON.stringify(0));
        }
        return "It's a tie!"
    }
    return "";
}

// Returns scores of p1 and p2
function getP1Score(): string {
    let player1 = JSON.parse(sessionStorage.getItem('player1') || '""');
    return player1.name + ": " + player1.score
}
function getP2Score(): string {
    let player2 = JSON.parse(sessionStorage.getItem('player2') || '""');
    return player2.name + ": " + player2.score
}

// Inserts game status and scores to page
function printStatus() {
    const gameStatus = document.getElementById('pvp-game-status')
    const p1Score = document.getElementById('pvp-p1-score')
    const p2Score = document.getElementById('pvp-p2-score')

    if (gameStatus && p1Score && p2Score) {
        gameStatus.textContent = getStatus();
        p1Score.textContent = getP1Score();
        p2Score.textContent = getP2Score();
    }
}

printStatus();

// The Tic Tac Toe grid
let grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Check if there is a winner
function checkWinner() {
    let player1 = getPlayer1();
    let player2 = getPlayer2();
    let setPlayer1 = getSetPlayer1();
    let setPlayer2 = getSetPlayer2();

    const resetButton = document.getElementById('reset') as HTMLButtonElement;
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2] && grid[i][0] != '') {
            if (grid[i][0] == 'X') {
                player1.score += 1;
                sessionStorage.setItem(setPlayer1, JSON.stringify(player1));
                currentPlayer = 0;
            } else {
                player2.score += 1;
                sessionStorage.setItem(setPlayer2, JSON.stringify(player2));
                currentPlayer = 3;
            }
            resetButton.disabled = false;
            let cell1, cell2, cell3;
            if (i == 0) {
                cell1 = document.getElementById('pvp-11');
                cell2 = document.getElementById('pvp-12');
                cell3 = document.getElementById('pvp-13');
            } else if (i == 1) {
                cell1 = document.getElementById('pvp-21');
                cell2 = document.getElementById('pvp-22');
                cell3 = document.getElementById('pvp-23');
            } else {
                cell1 = document.getElementById('pvp-31');
                cell2 = document.getElementById('pvp-32');
                cell3 = document.getElementById('pvp-33');
            }
            if (cell1 && cell2 && cell3) {
                cell1.style.backgroundColor = 'lightgreen';
                cell2.style.backgroundColor = 'lightgreen';
                cell3.style.backgroundColor = 'lightgreen';
            }
            return;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (grid[0][j] == grid[1][j] && grid[1][j] == grid[2][j] && grid[0][j] != '') {
            if (grid[0][j] == 'X') {
                player1.score += 1;
                sessionStorage.setItem(setPlayer1, JSON.stringify(player1));
                currentPlayer = 0;
            } else {
                player2.score += 1;
                sessionStorage.setItem(setPlayer2, JSON.stringify(player2));
                currentPlayer = 3;
            }
            resetButton.disabled = false;
            let cell1, cell2, cell3;
            if (j == 0) {
                cell1 = document.getElementById('pvp-11');
                cell2 = document.getElementById('pvp-21');
                cell3 = document.getElementById('pvp-31');
            } else if (j == 1) {
                cell1 = document.getElementById('pvp-12');
                cell2 = document.getElementById('pvp-22');
                cell3 = document.getElementById('pvp-32');
            } else {
                cell1 = document.getElementById('pvp-13');
                cell2 = document.getElementById('pvp-23');
                cell3 = document.getElementById('pvp-33');
            }
            if (cell1 && cell2 && cell3) {
                cell1.style.backgroundColor = 'lightgreen';
                cell2.style.backgroundColor = 'lightgreen';
                cell3.style.backgroundColor = 'lightgreen';
            }
            return;
        }
    }
    if ((grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[0][0] != '') || 
        (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0] && grid[0][2] != '')) {
        if (grid[1][1] == 'X') {
            player1.score += 1;
            sessionStorage.setItem(setPlayer1, JSON.stringify(player1));
            currentPlayer = 0;
        } else {
            player2.score += 1;
            sessionStorage.setItem(setPlayer2, JSON.stringify(player2));
            currentPlayer = 3;
        }
        resetButton.disabled = false;
        let cell1, cell2, cell3;
        if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[0][0] != '') {
            cell1 = document.getElementById('pvp-11');
            cell2 = document.getElementById('pvp-22');
            cell3 = document.getElementById('pvp-33');
        } else {
            cell1 = document.getElementById('pvp-13');
            cell2 = document.getElementById('pvp-22');
            cell3 = document.getElementById('pvp-31');
        }
        if (cell1 && cell2 && cell3) {
            cell1.style.backgroundColor = 'lightgreen';
            cell2.style.backgroundColor = 'lightgreen';
            cell3.style.backgroundColor = 'lightgreen';
        }
        return;
    }
    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (grid[i][j] == '') {
                return;
            }
        }
    }
    resetButton.disabled = false;
    currentPlayer = -1;
}

// Print the updated board
function printBoard() {
    const button11 = document.getElementById('pvp-11');
    const button12 = document.getElementById('pvp-12');
    const button13 = document.getElementById('pvp-13');
    const button21 = document.getElementById('pvp-21');
    const button22 = document.getElementById('pvp-22');
    const button23 = document.getElementById('pvp-23');
    const button31 = document.getElementById('pvp-31');
    const button32 = document.getElementById('pvp-32');
    const button33 = document.getElementById('pvp-33');

    if (button11 && button12 && button13 && button21 && button22 && button23 && button31 && button32 && button33) {
        button11.textContent = grid[0][0];
        button12.textContent = grid[0][1];
        button13.textContent = grid[0][2];
        button21.textContent = grid[1][0];
        button22.textContent = grid[1][1];
        button23.textContent = grid[1][2];
        button31.textContent = grid[2][0];
        button32.textContent = grid[2][1];
        button33.textContent = grid[2][2];
    }
}

function handleClick(row: number, col: number) {
    if ((currentPlayer == 1 || currentPlayer == 2) && grid[row][col] == '') {
        if (currentPlayer == 1) {
            grid[row][col] = 'X';
            currentPlayer = 2;
        } else {
            grid[row][col] = "O";
            currentPlayer = 1;
        }
        printBoard();
        checkWinner();
        printStatus();
    }
}

// Listen to button clicks
document.getElementById('reset-link')?.addEventListener("click", function(event) {
    const resetButton = document.getElementById('reset') as HTMLButtonElement;
    if (resetButton.disabled == true) {
        event.preventDefault();
    }
});
document.getElementById('pvp-11')?.addEventListener("click", function() {
    handleClick(0, 0);
});
document.getElementById('pvp-12')?.addEventListener("click", function() {
    handleClick(0, 1);
});
document.getElementById('pvp-13')?.addEventListener("click", function() {
    handleClick(0, 2);
});
document.getElementById('pvp-21')?.addEventListener("click", function() {
    handleClick(1, 0);
});
document.getElementById('pvp-22')?.addEventListener("click", function() {
    handleClick(1, 1);
});
document.getElementById('pvp-23')?.addEventListener("click", function() {
    handleClick(1, 2);
});
document.getElementById('pvp-31')?.addEventListener("click", function() {
    handleClick(2, 0);
});
document.getElementById('pvp-32')?.addEventListener("click", function() {
    handleClick(2, 1);
});
document.getElementById('pvp-33')?.addEventListener("click", function() {
    handleClick(2, 2);
});