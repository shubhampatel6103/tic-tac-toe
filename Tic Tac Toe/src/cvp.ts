let currentPlayerC: number = 1

// Returns the current game status
function getStatusC(): string {    
    if (currentPlayerC == 1) {
        return 'Your turn';
    } else if (currentPlayerC == 2) {
        return "Computer's turn";
    } else if (currentPlayerC == 0) {
        return 'You win!';
    } else if (currentPlayerC == 3) {
        return 'Computer wins!';
    } else if (currentPlayerC == -1) {
        return "It's a tie!"
    }
    return "";
}

// Returns scores of p1 and p2
function getP1ScoreC(): string {
    let player1 = JSON.parse(sessionStorage.getItem('player1') || '""');
    return player1.name + ": " + player1.score
}
function getP2ScoreC(): string {
    let player2 = JSON.parse(sessionStorage.getItem('player2') || '""');
    return player2.name + ": " + player2.score
}

// Inserts game status and scores to page
function printStatusC() {
    const gameStatus = document.getElementById('cvp-game-status')
    const p1Score = document.getElementById('cvp-p1-score')
    const p2Score = document.getElementById('cvp-p2-score')

    if (gameStatus && p1Score && p2Score) {
        gameStatus.textContent = getStatusC();
        p1Score.textContent = getP1ScoreC();
        p2Score.textContent = getP2ScoreC();
    }
}

printStatusC();

// The Tic Tac Toe grid
let gridC = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Check if there is a winner
function checkWinnerC(): boolean {
    let player1 = JSON.parse(sessionStorage.getItem('player1') || '""');
    let player2 = JSON.parse(sessionStorage.getItem('player2') || '""');
    let setPlayer1 = 'player1';
    let setPlayer2 = 'player2';

    const resetButton = document.getElementById('reset') as HTMLButtonElement;
    for (let i = 0; i < 3; i++) {
        if (gridC[i][0] == gridC[i][1] && gridC[i][1] == gridC[i][2] && gridC[i][0] != '') {
            if (gridC[i][0] == 'X') {
                player1.score += 1;
                sessionStorage.setItem(setPlayer1, JSON.stringify(player1));
                currentPlayerC = 0;
            } else {
                player2.score += 1;
                sessionStorage.setItem(setPlayer2, JSON.stringify(player2));
                currentPlayerC = 3;
            }
            resetButton.disabled = false;
            let cell1, cell2, cell3;
            if (i == 0) {
                cell1 = document.getElementById('cvp-11');
                cell2 = document.getElementById('cvp-12');
                cell3 = document.getElementById('cvp-13');
            } else if (i == 1) {
                cell1 = document.getElementById('cvp-21');
                cell2 = document.getElementById('cvp-22');
                cell3 = document.getElementById('cvp-23');
            } else {
                cell1 = document.getElementById('cvp-31');
                cell2 = document.getElementById('cvp-32');
                cell3 = document.getElementById('cvp-33');
            }
            if (cell1 && cell2 && cell3) {
                cell1.style.backgroundColor = 'lightblue';
                cell2.style.backgroundColor = 'lightblue';
                cell3.style.backgroundColor = 'lightblue';
            }
            return true;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (gridC[0][j] == gridC[1][j] && gridC[1][j] == gridC[2][j] && gridC[0][j] != '') {
            if (gridC[0][j] == 'X') {
                player1.score += 1;
                sessionStorage.setItem(setPlayer1, JSON.stringify(player1));
                currentPlayerC = 0;
            } else {
                player2.score += 1;
                sessionStorage.setItem(setPlayer2, JSON.stringify(player2));
                currentPlayerC = 3;
            }
            resetButton.disabled = false;
            let cell1, cell2, cell3;
            if (j == 0) {
                cell1 = document.getElementById('cvp-11');
                cell2 = document.getElementById('cvp-21');
                cell3 = document.getElementById('cvp-31');
            } else if (j == 1) {
                cell1 = document.getElementById('cvp-12');
                cell2 = document.getElementById('cvp-22');
                cell3 = document.getElementById('cvp-32');
            } else {
                cell1 = document.getElementById('cvp-13');
                cell2 = document.getElementById('cvp-23');
                cell3 = document.getElementById('cvp-33');
            }
            if (cell1 && cell2 && cell3) {
                cell1.style.backgroundColor = 'lightblue';
                cell2.style.backgroundColor = 'lightblue';
                cell3.style.backgroundColor = 'lightblue';
            }
            return true;
        }
    }
    if ((gridC[0][0] == gridC[1][1] && gridC[1][1] == gridC[2][2] && gridC[0][0] != '') || 
        (gridC[0][2] == gridC[1][1] && gridC[1][1] == gridC[2][0] && gridC[0][2] != '')) {
        if (gridC[1][1] == 'X') {
            player1.score += 1;
            sessionStorage.setItem(setPlayer1, JSON.stringify(player1));
            currentPlayerC = 0;
        } else {
            player2.score += 1;
            sessionStorage.setItem(setPlayer2, JSON.stringify(player2));
            currentPlayerC = 3;
        }
        resetButton.disabled = false;
        let cell1, cell2, cell3;
        if (gridC[0][0] == gridC[1][1] && gridC[1][1] == gridC[2][2] && gridC[0][0] != '') {
            cell1 = document.getElementById('cvp-11');
            cell2 = document.getElementById('cvp-22');
            cell3 = document.getElementById('cvp-33');
        } else {
            cell1 = document.getElementById('cvp-13');
            cell2 = document.getElementById('cvp-22');
            cell3 = document.getElementById('cvp-31');
        }
        if (cell1 && cell2 && cell3) {
            cell1.style.backgroundColor = 'lightblue';
            cell2.style.backgroundColor = 'lightblue';
            cell3.style.backgroundColor = 'lightblue';
        }
        return true;
    }
    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (gridC[i][j] == '') {
                return false;
            }
        }
    }
    resetButton.disabled = false;
    currentPlayerC = -1;
    return true;
}

// Print the updated board
function printBoardC() {
    const button11 = document.getElementById('cvp-11');
    const button12 = document.getElementById('cvp-12');
    const button13 = document.getElementById('cvp-13');
    const button21 = document.getElementById('cvp-21');
    const button22 = document.getElementById('cvp-22');
    const button23 = document.getElementById('cvp-23');
    const button31 = document.getElementById('cvp-31');
    const button32 = document.getElementById('cvp-32');
    const button33 = document.getElementById('cvp-33');

    if (button11 && button12 && button13 && button21 && button22 && button23 && button31 && button32 && button33) {
        button11.textContent = gridC[0][0];
        button12.textContent = gridC[0][1];
        button13.textContent = gridC[0][2];
        button21.textContent = gridC[1][0];
        button22.textContent = gridC[1][1];
        button23.textContent = gridC[1][2];
        button31.textContent = gridC[2][0];
        button32.textContent = gridC[2][1];
        button33.textContent = gridC[2][2];
    }
}

function handleClickC(row: number, col: number) {
    if (currentPlayerC == 1 && gridC[row][col] == '') {
        gridC[row][col] = 'X';
        currentPlayerC = 2;

        printBoardC();
        if (!checkWinnerC()) {
            computerMove();
        }
        printStatusC();
    }
}

// Listen to button clicks
document.getElementById('reset-link')?.addEventListener("click", function(event) {
    const resetButton = document.getElementById('reset') as HTMLButtonElement;
    if (resetButton.disabled == true) {
        event.preventDefault();
    }
});
document.getElementById('cvp-11')?.addEventListener("click", function() {
    handleClickC(0, 0);
});
document.getElementById('cvp-12')?.addEventListener("click", function() {
    handleClickC(0, 1);
});
document.getElementById('cvp-13')?.addEventListener("click", function() {
    handleClickC(0, 2);
});
document.getElementById('cvp-21')?.addEventListener("click", function() {
    handleClickC(1, 0);
});
document.getElementById('cvp-22')?.addEventListener("click", function() {
    handleClickC(1, 1);
});
document.getElementById('cvp-23')?.addEventListener("click", function() {
    handleClickC(1, 2);
});
document.getElementById('cvp-31')?.addEventListener("click", function() {
    handleClickC(2, 0);
});
document.getElementById('cvp-32')?.addEventListener("click", function() {
    handleClickC(2, 1);
});
document.getElementById('cvp-33')?.addEventListener("click", function() {
    handleClickC(2, 2);
});