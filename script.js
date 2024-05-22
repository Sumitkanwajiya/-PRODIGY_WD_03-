let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
let gameActive = true;

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        if (cells[combo[0]].innerText === currentPlayer &&
            cells[combo[1]].innerText === currentPlayer &&
            cells[combo[2]].innerText === currentPlayer) {
            gameActive = false;
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return [...cells].every(cell => cell.innerText !== '');
}

function handleResult(result) {
    if (result === 'X' || result === 'O') {
        alert(`${result} wins!`);
    } else {
        alert("It's a draw!");
    }
}

function restartGame() {
    cells.forEach(cell => {
        cell.innerText = '';
    });
    currentPlayer = 'X';
    gameActive = true;
}

function makeMove(cellIndex) {
    if (gameActive && cells[cellIndex].innerText === '') {
        cells[cellIndex].innerText = currentPlayer;

        if (checkWinner()) {
            handleResult(currentPlayer);
        } else if (checkDraw()) {
            handleResult();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}
