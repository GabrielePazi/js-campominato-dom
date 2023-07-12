const btnPlay = document.querySelector(".btn-play");
const container = document.querySelector(".grid-container");
let clickCounter = 1;
let playCondition = true;

btnPlay.addEventListener("click", onBtnClick);

function onBtnClick() {
  const cellQuantity = document.querySelector(".cell-number").value;
  container.classList.add("my-3");
  
  if (playCondition) {
    let grid = createGrid(cellQuantity);

    printGrid(grid);
  } else {
    return
  }
}

//crea la griglia con le bombe e le celle in base al numero di celle scelto con il select
function createGrid(cellsNumber) {
  let grid = [];
  const bombsArray = createRandomBombs(cellsNumber);

  for (let i = 0; i < cellsNumber; i++) {

    let singleCell = createCell();
    singleCell.innerHTML = i;

    grid.push(singleCell);

    if (isBomb(i, bombsArray)) {
      console.log("c'è una bomba in: ", i)//stampa in console la posizione delle bombe per il testing
      singleCell.dataset.name = "bomb";
      singleCell.addEventListener("click", clickOnBomb)
    } else {
      singleCell.addEventListener("click", clickOnCell)
    }
  }

  return grid;
}

//cicla su bombsArray e se trova un elemento uguale a grid element ritrona true, falso altrimenti
function isBomb(gridElementIndex, bombsArray) {
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
function createRandomBombs(bombsMaxPosition) {
  let randomBombs = []
  
  for (let i = 0; i < 16; i++) {
    const randNumber = randomNumber(bombsMaxPosition);
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
  return Math.floor((Math.random() * maxRand));
}

//se si perde mostra tutte le bombe sul campo minato
function showAllBombs() {
  let bombsElements = document.querySelectorAll('[data-name="bomb"]');

  for (let i = 0; i < bombsElements.length; i++) {
    bombsElements[i].classList.add("bg-danger");
  }
}

//funzione del click sulle bombe
function clickOnBomb() {
  if (playCondition) {
    this.classList.toggle("bg-danger");

    document.querySelector(".message").innerHTML = "Hai perso dopo " + clickCounter + " tentativi"
    showAllBombs()
    playCondition = false;
  } else {
    return
  }
}

//funzione del click sulle celle normali
function clickOnCell() {
  if (playCondition) {
    this.classList.toggle("bg-primary");

    if (clickCounter <= 84) {
      clickCounter++
    } else {
      document.querySelector(".message").innerHTML = "Hai Vinto!!!"
      playCondition = false;
    }
  } else {
    return
  }
}

