"use strict";
const p1Name = document.getElementById('p1-name');
const p2Name = document.getElementById('p2-name');
function getInputValues() {
    const p1 = p1Name.value == "" ? "Player 1" : p1Name.value;
    const p2 = p2Name.value == "" ? "Player 2" : p2Name.value;
    sessionStorage.setItem('player1', JSON.stringify({ name: p1, score: 0 }));
    sessionStorage.setItem('player2', JSON.stringify({ name: p2, score: 0 }));
    sessionStorage.setItem('cur', JSON.stringify(0));
}
const submitButton = document.getElementById('names');
submitButton.addEventListener('click', getInputValues);
//# sourceMappingURL=names.js.map