"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
let currentPlayerC = 1;
function getStatusC() {
    if (currentPlayerC == 1) {
        return 'Your turn';
    }
    else if (currentPlayerC == 2) {
        return "Computer's turn";
    }
    else if (currentPlayerC == 0) {
        return 'You win!';
    }
    else if (currentPlayerC == 3) {
        return 'Computer wins!';
    }
    else if (currentPlayerC == -1) {
        return "It's a tie!";
    }
    return "";
}
function getP1ScoreC() {
    let player1 = JSON.parse(sessionStorage.getItem('player1') || '""');
    return player1.name + ": " + player1.score;
}
function getP2ScoreC() {
    let player2 = JSON.parse(sessionStorage.getItem('player2') || '""');
    return player2.name + ": " + player2.score;
}
function printStatusC() {
    const gameStatus = document.getElementById('cvp-game-status');
    const p1Score = document.getElementById('cvp-p1-score');
    const p2Score = document.getElementById('cvp-p2-score');
    if (gameStatus && p1Score && p2Score) {
        gameStatus.textContent = getStatusC();
        p1Score.textContent = getP1ScoreC();
        p2Score.textContent = getP2ScoreC();
    }
}
printStatusC();
let gridC = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
function checkWinnerC() {
    let player1 = JSON.parse(sessionStorage.getItem('player1') || '""');
    let player2 = JSON.parse(sessionStorage.getItem('player2') || '""');
    let setPlayer1 = 'player1';
    let setPlayer2 = 'player2';
    const resetButton = document.getElementById('reset');
    for (let i = 0; i < 3; i++) {
        if (gridC[i][0] == gridC[i][1] && gridC[i][1] == gridC[i][2] && gridC[i][0] != '') {
            if (gridC[i][0] == 'X') {
                player1.score += 1;
                sessionStorage.setItem(setPlayer1, JSON.stringify(player1));
                currentPlayerC = 0;
            }
            else {
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
            }
            else if (i == 1) {
                cell1 = document.getElementById('cvp-21');
                cell2 = document.getElementById('cvp-22');
                cell3 = document.getElementById('cvp-23');
            }
            else {
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
            }
            else {
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
            }
            else if (j == 1) {
                cell1 = document.getElementById('cvp-12');
                cell2 = document.getElementById('cvp-22');
                cell3 = document.getElementById('cvp-32');
            }
            else {
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
        }
        else {
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
        }
        else {
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
function handleClickC(row, col) {
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
(_a = document.getElementById('reset-link')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
    const resetButton = document.getElementById('reset');
    if (resetButton.disabled == true) {
        event.preventDefault();
    }
});
(_b = document.getElementById('cvp-11')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    handleClickC(0, 0);
});
(_c = document.getElementById('cvp-12')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    handleClickC(0, 1);
});
(_d = document.getElementById('cvp-13')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    handleClickC(0, 2);
});
(_e = document.getElementById('cvp-21')) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    handleClickC(1, 0);
});
(_f = document.getElementById('cvp-22')) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    handleClickC(1, 1);
});
(_g = document.getElementById('cvp-23')) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () {
    handleClickC(1, 2);
});
(_h = document.getElementById('cvp-31')) === null || _h === void 0 ? void 0 : _h.addEventListener("click", function () {
    handleClickC(2, 0);
});
(_j = document.getElementById('cvp-32')) === null || _j === void 0 ? void 0 : _j.addEventListener("click", function () {
    handleClickC(2, 1);
});
(_k = document.getElementById('cvp-33')) === null || _k === void 0 ? void 0 : _k.addEventListener("click", function () {
    handleClickC(2, 2);
});
//# sourceMappingURL=cvp.js.map