let container, minesweeperWrapper, cells, bombs, closedCellsCount, isFirstMove, timer;
let minesRemaining = 0;
let usedFlags = 0;
let minesRemainingElem;
let usedFlagsElem;

function renderBoard(size, mines) {
  let width, height, boardClass;
  minesRemaining = mines;
  usedFlags = 0;

  switch (size) {
    case 'easy':
      width = 10;
      height = 10;
      boardClass = 'board-easy';
      break;
    case 'medium':
      width = 15;
      height = 15;
      boardClass = 'board-medium';
      break;
    case 'hard':
      width = 25;
      height = 25;
      boardClass = 'board-hard';
      break;
    default:
      width = 10;
      height = 10;
      boardClass = 'board-easy';
  }

  if (container) {
    document.body.removeChild(container);
  }

  container = document.createElement('div');
  const header = document.createElement('header');
  const levelElem = document.createElement('div');
  const levelEasy = document.createElement('button');
  const levelNormal = document.createElement('button');
  const levelHard = document.createElement('button');
  minesRemainingElem = document.createElement('div');
  usedFlagsElem = document.createElement('div');
  let divTimer = document.createElement('div');
  const cellsAmount = width * height;
  let startTime;
  let moves = 0;

  container.className = 'container';
  header.className = 'header';
  levelElem.className = 'level';
  levelEasy.className = 'button-level';
  levelEasy.innerText = 'EASY';
  levelNormal.innerText = 'MEDIUM';
  levelHard.innerText = 'HARD';
  levelNormal.className = 'button-level';
  levelHard.className = 'button-level';
  minesweeperWrapper = document.createElement('div');
  minesweeperWrapper.className = 'minesweeper ' + boardClass;
  divTimer.className = 'timer';
  divTimer.innerText = '00:00';
  document.body.appendChild(container);
  container.appendChild(minesweeperWrapper);
  container.appendChild(header);
  header.appendChild(divTimer);
  header.appendChild(levelElem);
  header.appendChild(minesRemainingElem);
  header.appendChild(usedFlagsElem);
  levelElem.append(levelEasy, levelNormal, levelHard);

  
  updateMineCount();
  updateFlagCount();
  cells = [];
  bombs = [];
  closedCellsCount = cellsAmount;
  isFirstMove = true;
  clearInterval(timer);

  for (let i = 0; i < cellsAmount; i++) {
    const button = document.createElement('button');
    button.className = 'cell';
    minesweeperWrapper.appendChild(button);
    cells.push(button);
  }

  levelEasy.addEventListener('click', () => {
    renderBoard('easy', 10);
  });
  levelNormal.addEventListener('click', () => {
    renderBoard('medium', 15);
  });

  levelHard.addEventListener('click', () => {
    renderBoard('hard', 100);
  });

  cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      if (event.button === 0 && event.altKey) {
        const index = cells.indexOf(cell);
        const col = index % width;
        const row = Math.floor(index / width);
        addFlag(row, col);
      } else {
        if (event.target.tagName !== 'BUTTON') {
          return console.log('not field');
        }
      }  


      const index = cells.indexOf(event.target);
      const col = index % width;
      const row = Math.floor(index / width);

      if (isFirstMove) {
        isFirstMove = false;
        startTime = performance.now();
        placeMines(row, col);
        timerFunc();
      }

      openCell(row, col);
    });
  });

  function updateMineCount() {
    minesRemainingElem.innerText = `Mines Remaining: ${minesRemaining}`;
  }

  function updateFlagCount() {
    usedFlagsElem.innerText = `Flags Used: ${usedFlags}`;
  }

 function addFlag(row, col) {
  const index = row * width + col;
  const cell = cells[index];

  if (cell.classList.contains('opened')) {
    return;
  }
  
  if (!cell.classList.contains('flagged')) {
    cell.classList.add('flagged');
    cell.innerText = '🚩';
    usedFlags++;
    updateFlagCount();
  } else {
    cell.innerText = '';
    cell.classList.remove('flagged');
    usedFlags--;
    updateFlagCount();
  }

  if (!cell.classList.contains('flagged') && bombs.includes(index)) {
    cell.innerHTML = '💣';
    cell.classList.add('bomb');
  }
}

function timerFunc() {
    let seconds = 0;
    let minutes = 0;
    timer = setInterval(() => {
      seconds++;

      if (seconds >= 60) {
        minutes++;
        seconds = 0;
      }

      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

      divTimer.innerText = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
  }

  function isValid(row, col) {
    return row >= 0 && row < height && col >= 0 && col < width;
  }

  function placeMines(initialRow, initialCol) {
    const initialIndex = initialRow * width + initialCol;
    const excludedIndexes = [initialIndex];

    bombs.length = 0;
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
        if (isBomb(row + y, col + x)) {
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

    if (cell.disabled === true || cell.classList.contains('flagged')) return;

    cell.disabled = true;

    if (isBomb(row, col)) {
    if (!cell.classList.contains('flagged')) {
      cell.innerHTML = '💣';
      cell.classList.add('red');
    } else {
      return; // Do nothing if the cell is flagged
    }
    alert('Game over. Try again');
    clearInterval(timer);
    return;
  }

  //   if (isBomb(row, col)) {
  //     if (!cell.classList.contains('flagged')) { // Only add bomb class if the cell is not flagged
  //     cell.innerHTML = '💣';
  //     cell.classList.add('red');
  //   }
  //   alert('Game over. Try again');
  //   clearInterval(timer);
  //   return;
  // }

    closedCellsCount--;

    if (closedCellsCount <= mines) {
      const endTime = performance.now();
      const elapsedTime = Math.floor((endTime - startTime) / 1000);
      alert(`Hooray! You found all mines in ${elapsedTime} seconds and N moves!!`);
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
    const index = row * width + col;
    return bombs.includes(index);
  }
}

renderBoard('easy', 10);