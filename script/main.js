const btnPlay = document.querySelector(".btn-play");
const container = document.querySelector(".grid-container");

btnPlay.addEventListener("click", onBtnClick);

function onBtnClick() {
  container.classList.add("my-3");
  
  let grid = createGrid();

  changeColorOnClick(grid)

  printGrid(grid)
}

/**
 * Crea 100 celle
 */
function createGrid() {
  let grid = [];

  for (let i = 0; i < 100; i++) {
    let singleCell = createCell();
    singleCell.innerHTML = i + 1;
    
    grid.push(singleCell);
  }

  return grid;
}

/**
 * Crea una singola cella, creando un nuovo div
 */
function createCell() {
  let cell = document.createElement("div");
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

function changeColorOnClick(grid) {
  for (let i = 0; i < grid.length; i++) {
    const cell = grid[i];

    cell.addEventListener("click", function() {
      cell.classList.toggle("bg-primary");

      console.log("Hai cliccato la casella ", i + 1);
    })
  }
}