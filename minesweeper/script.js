
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
    openCell(row, col);
  });

  function isValid(row, col) {
    return row >= 0 && row < height && col >= 0 && col < width;
  }

  function getMinesCount(row, col) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
       if ( isBomb(row + y, col + x)) {
         count++;
       }
      }
    }
    return count;
  }

  function openCell(row, col) {
    if (!isValid(row, col)) return;
    const index = row * width + col;
    const cell = cells[index];

    if (cell.disabled === true) return;
    cell.disabled = true;
    if (isBomb(row, col)) {
      cell.innerHTML = 'X';
      alert('Looser');
      return;
    }

    const count = getMinesCount(row, col);
    if (count !== 0) {
      cell.innerHTML = count;
      return;
    }

     for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
       openCell(row + y, col + x);
         
       }
      }
    // cell.innerHTML = isBomb(row, col) ? 'X' : getMinesCount(row, col);
    
  }

  function isBomb(row, col) {
    if (!isValid(row, col)) return false;
    const index =  row * width + col; 
    return bombs.includes(index);
  }
}

renderBoard(10, 10, 10)
