
function renderBoard(width, height, mines) {
  const container = document.createElement('div');
  const header =  document.createElement('header');
  const minesweeperWrapper = document.createElement('div');
  const cellsAmount = width * height;
  let divTimer = document.createElement('div');
  let startTime;
  let moves = 0;
  let timer = 0;

  container.className = "container";
  header.className = "header";
  minesweeperWrapper.className = "minesweeper";
  divTimer.className = "timer";
  divTimer.innerText = "00:00";
  document.body.appendChild(container);
  container.appendChild(minesweeperWrapper);
  container.appendChild(header);
  header.appendChild(divTimer);

  for (let i = 0; i < cellsAmount; i++) {
    const button = document.createElement('button');
    button.className = 'cell';
    minesweeperWrapper.appendChild(button);
  }
  
  const cells = [...minesweeperWrapper.children];
  let closedCellsCount = cellsAmount; 
  let isFirstMove = true;

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
    
    if (isFirstMove) {
      isFirstMove = false;
      startTime = performance.now();
      placeMines(row, col);
    }

    openCell(row, col);
  });

  function timerFunc() {
    let seconds = 1;
    let minutes = 0;
    timer = setInterval(() => {
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes >= 10) {
            divTimer.innerText = `${minutes}:${seconds}`;
        } else {
            divTimer.innerText = `0${minutes}:${seconds}`;
        }
        seconds++;
    }, 1000);
}
timerFunc();

  function isValid(row, col) {
    return row >= 0 && row < height && col >= 0 && col < width;
  }

  function placeMines(initialRow, initialCol) {
    const initialIndex = initialRow * width + initialCol;
    const excludedIndexes = [initialIndex];

    bombs.length = 0 ;
    for (let i = 0; i < mines; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * cellsAmount);
      } while (excludedIndexes.includes(randomIndex));
        bombs.push(randomIndex);
        excludedIndexes.push(randomIndex);
    }
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
      cell.innerHTML = '💣';
      cell.classList.add('red');
      alert('Game over. Try again');
      clearInterval(timer);
      return;
    }

    closedCellsCount--;
    // if (!cell.classList.contains('opened')) {
    //   cell.classList.add('opened');
    //   moves++;
    //   console.log(moves);
    // } 

    if (closedCellsCount <= mines) {
      const endTime = performance.now();
      const elapsedTime = Math.floor((endTime - startTime) / 1000);
      alert (`Hooray! You found all mines in ${elapsedTime} seconds and N moves!!`);
      clearInterval(timer);
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
  }

  function isBomb(row, col) {
    if (!isValid(row, col)) return false;
    const index =  row * width + col; 
    return bombs.includes(index);
  }
}

renderBoard(10, 10, 10);
