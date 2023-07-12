const btnPlay = document.querySelector(".btn-play");

btnPlay.addEventListener("click", onBtnClick);

function onBtnClick() {
  const container = document.querySelector(".grid-container");
  const cellQuantity = document.querySelector(".cell-number").value;

  container.classList.add("my-3");
  
  createGrid(cellQuantity, container);
}

/**
 * Crea una grid e la stampa in html
 */
function createGrid(cellNumber, container) {
  let grid = [];
  
  for (let i = 0; i < cellNumber; i++) {
    //crea una singola casella
    let singleCell = createCell(cellNumber);
    singleCell.innerHTML = i + 1;

    //quando clicchi una cella diventa blu e stampa il numero della cella in console
    singleCell.addEventListener("click", function() {
      singleCell.classList.toggle("bg-primary");

      console.log("Hai cliccato la casella ", i + 1);
    })
    
    grid.push(singleCell);
  }

  //stampa la griglia
  printGrid(grid, container);

  return grid;
}

/**
 * Crea una singola cella
 */
function createCell(cellDimension) {
  let cell = document.createElement("div");
 
  cell.style.width = `calc(100% / ${Math.sqrt(cellDimension)})`;
  cell.classList.add("single-cell");

  return cell;
}

/**
 * Prende in input un array di HTMLDivElement e li appende al container che viene svuotato inizialmente
 */
function printGrid(grid, container) {
  container.innerHTML = "";

  for (let i = 0; i < grid.length; i++) {
    container.append(grid[i]);    
  }
}