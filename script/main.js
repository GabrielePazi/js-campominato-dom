const btnPlay = document.querySelector(".btn-play");
const container = document.querySelector(".grid-container");

btnPlay.addEventListener("click", onBtnClick);

function onBtnClick() {
  container.classList.add("my-3");
  
  let grid = createGrid();

  printGrid(grid)
}


function createGrid() {
  let grid = [];
  const bombsArray = createRandomBombs();

  for (let i = 0; i < 100; i++) {

    let singleCell = createCell();
    singleCell.innerHTML = i + 1;

    grid.push(singleCell);

    if (insertBomb(i, bombsArray)) {
      singleCell.addEventListener("click", clickOnBomb)
    } else {
      singleCell.addEventListener("click", clickOnCell)
    }
  }

  return grid;
}

//cicla su bombsArray e se trova un elemento uguale a grid element ritrona true, falso altrimenti
function insertBomb(gridElementIndex, bombsArray) {
  for (let i = 0; i < bombsArray.length; i++) {
    if (bombsArray[i] === gridElementIndex) {
      return true
    }
  }
  return false
}

/**
 * Crea una singola cella, creando un nuovo div
 */
function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("single-cell");

  return cell;
}

/**
 * Prende in input un array di HTMLDivElement e li stampa in html
 */
function printGrid(grid) {
  container.innerHTML = "";

  for (let i = 0; i < grid.length; i++) {
    container.append(grid[i])    
  }
}

//crea array di numeri che rappresentano gli indici della grid in cui mettere le bombe
function createRandomBombs() {
  let randomBombs = []
  
  for (let i = 0; i < 16; i++) {
    const randNumber = randomNumber(100);
    if (randomBombs.indexOf(randNumber) < 0) {
      randomBombs.push(randNumber);
    } else {
      i--
    }
  }
  return randomBombs
}

//crea un numero randomico tra 1 e il numero maxRand
function randomNumber(maxRand) {
  return Math.floor((Math.random() * maxRand)+ 1);
}

function clickOnBomb() {
  this.classList.toggle("bg-danger");
}

function clickOnCell() {
  this.classList.toggle("bg-primary");
}