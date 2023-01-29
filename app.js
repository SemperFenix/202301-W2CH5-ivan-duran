let actualRow = 0;
const totalRows = 20;

let actualColumn = 0;
const totalColumns = 20;

const gridToPlay = {};
let surrounding = 0;
class DrawTableGrid {
  constructor() {
    do {
      this["column" + actualColumn] = Math.round(Math.random());

      actualColumn++;
    } while (actualColumn < totalColumns);
  }
}

export function createGrid(size) {
  do {
    gridToPlay["row" + actualRow] = new DrawTableGrid();
    actualColumn = 0;

    actualRow++;
  } while (actualRow <= size);

  return gridToPlay;
}

export const checkPreviousRow = (object, row, column) => {
  let previousRow = row - 1;
  let columnToCheck = column - 1;
  let counter = 0;
  let rowSurr = 0;

  if (row === 0) {
    // Esto accede al número total de rows en el objeto sin utilizar la variable totalRows ni Object.keys => Da problemas en el check de Sonar
    // Era más sencillo con Object.keys(object).length
    let rowCounter = 0;
    previousRow = 0;
    for (
      previousRow;
      object["row" + previousRow] !== undefined;
      previousRow++
    ) {
      rowCounter++;
    }

    previousRow = rowCounter - 1;
  }

  if (column === 0) {
    return checkPrevRowColumnZero(object, previousRow, 0);
  }

  do {
    if (object["row" + previousRow]["column" + columnToCheck] === 1) {
      rowSurr++;
    }

    columnToCheck++;
    counter++;
  } while (counter < 3);

  return rowSurr;
};

export const checkPrevRowColumnZero = (object, row, column) => {
  let columnToCheck = column;
  let counter = 0;
  let rowSurr = 0;
  let numberOfColumns = 0;

  // Esto accede al número total de columns en el objeto sin utilizar la variable totalColumns

  for (
    columnToCheck;
    object["row" + row]["column" + columnToCheck] !== undefined;
    columnToCheck++
  ) {
    numberOfColumns++;
  }

  numberOfColumns--;

  if (object["row" + row]["column" + numberOfColumns] === 1) {
    rowSurr++;
  }

  columnToCheck = column;
  counter++;

  do {
    if (object["row" + row]["column" + columnToCheck] === 1) {
      rowSurr++;
    }

    columnToCheck++;
    counter++;
  } while (counter < 3);

  return rowSurr;
};

export const checkSameRowColumnZero = (object, row, column) => {
  let columnToCheck = column;
  let rowSurr = 0;

  // Esto accede al número total de columns en el objeto sin utilizar la variable totalColumns
  for (
    columnToCheck;
    object["row" + 1]["column" + columnToCheck] !== undefined;
    columnToCheck++
  ) {
    columnToCheck++;
  }

  columnToCheck--;

  if (object["row" + row]["column" + columnToCheck] === 1) {
    rowSurr++;
  }

  columnToCheck = column + 1;

  if (object["row" + row]["column" + columnToCheck] === 1) {
    rowSurr++;
  }

  return rowSurr;
};

export const checkSameRow = (object, row, column) => {
  let columnToCheck = column - 1;
  let counter = 0;
  let rowSurr = 0;

  if (column === 0) {
    return checkSameRowColumnZero(object, row, 0);
  }

  do {
    if (object["row" + row]["column" + columnToCheck] === 1) {
      rowSurr++;
    }

    columnToCheck += 2;
    counter++;
  } while (counter < 2);

  return rowSurr;
};

const checkAllPositions = (objectToPlay) => {
  actualRow = 0;
  actualColumn = 0;
  do {
    do {
      surrounding += checkPreviousRow(objectToPlay, actualRow, actualColumn);
      surrounding += checkSameRow(objectToPlay, actualRow, actualColumn);
      actualColumn++;
    } while (
      objectToPlay["row" + actualRow]["column" + actualColumn] !== undefined
    );

    actualRow++;
    actualColumn = 0;
  } while (objectToPlay["row" + actualRow] !== undefined);

  return surrounding;
};

createGrid(totalRows);

console.table(gridToPlay);
console.log(surrounding);
checkAllPositions(gridToPlay);
