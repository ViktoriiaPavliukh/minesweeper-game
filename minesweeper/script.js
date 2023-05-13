const boardSize = 10;
const numMines = 10;
let gameBoard = [];

function createBoard() {
  for (let i = 0; i < boardSize; i++) {
    let row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({
        isMine: false,
        revealed: false,
        value: 0
      });
    }
    gameBoard.push(row);
  }
}

function renderBoard() {
  const container = document.createElement('div');
  const minesweeperWrapper = document.createElement('div');
  container.className = "container";
  minesweeperWrapper.className = "minesweeper";
  document.body.appendChild(container);
  container.appendChild(minesweeperWrapper);

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      minesweeperWrapper.appendChild(cell);
    }
  }
}

renderBoard();