
function renderBoard(width, height, mines) {
  const container = document.createElement('div');
  const minesweeperWrapper = document.createElement('div');
  const cellsAmount = width * height;
  container.className = "container";
  minesweeperWrapper.className = "minesweeper";
  document.body.appendChild(container);
  container.appendChild(minesweeperWrapper);
  minesweeperWrapper.innerHTML = `<button></button>`.repeat(cellsAmount);
  const cells = [...minesweeperWrapper.children];
  
 
  const bombs = [...Array(cellsAmount).keys()]
  .sort(() => Math.random() - 0.5)
  .slice(0, mines);

  minesweeperWrapper.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
      return console.log('not field');
    }

    const index = cells.indexOf(event.target);
    const col = index % width;
    const row = Math.floor(index / width);
    event.target.innerHTML = isBomb(row, col) ? 'X' : ' ';
    event.target.disabled = true;
  });

  function isBomb(row, col) {
    const index =  row * width + col; 
    return bombs.includes(index);
  }
} 

renderBoard(10, 10, 10)
