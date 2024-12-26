// Get the input elements by their IDs
const p1Name = document.getElementById('p1-name') as HTMLInputElement;
const p2Name = document.getElementById('p2-name') as HTMLInputElement;

// Function to get the values from the input elements
function getInputValues() {
    const p1 = p1Name.value == "" ? "Player 1" : p1Name.value;
    const p2 = p2Name.value == "" ? "Player 2" : p2Name.value;
    sessionStorage.setItem('player1', JSON.stringify({name: p1, score: 0}));
    sessionStorage.setItem('player2', JSON.stringify({name: p2, score: 0}));
    sessionStorage.setItem('cur', JSON.stringify(0));
}

// Add event listener to a button to trigger the function
const submitButton = document.getElementById('names') as HTMLButtonElement;
submitButton.addEventListener('click', getInputValues);