class DrawTableGrid {
  constructor(size) {
    let actualColumn = 0;
    do {
      this["column" + actualColumn] = Math.round(Math.random());

      actualColumn++;
    } while (actualColumn < size);
  }
}

export function createGrid(size) {
  const gridToPlay = {};

  let actualRow = 0;
  do {
    gridToPlay["row" + actualRow] = new DrawTableGrid(size);

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
  let columnCounter = column;

  // Esto accede al número total de columns en el objeto sin utilizar la variable totalColumns
  for (
    columnCounter;
    object["row" + 1]["column" + columnCounter] !== undefined;
    columnCounter++
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

export const checkPrevRowLastColumn = (object, row, column) => {
  let columnToCheck = column - 1;
  let counter = 0;
  let rowSurr = 0;

  do {
    if (object["row" + row]["column" + columnToCheck] === 1) {
      rowSurr++;
    }

    columnToCheck++;
    counter++;
  } while (counter < 2);

  if (object["row" + row]["column" + 0] === 1) {
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

export const checkNextRow = (object, row, column) => {
  let nextRow = row + 1;
  let columnToCheck = column - 1;
  let counter = 0;
  let rowSurr = 0;

  if (object["row" + nextRow] === undefined) {
    nextRow = 0;
  }

  if (column === 0) {
    return checkPrevRowColumnZero(object, nextRow, 0);
  }

  do {
    if (object["row" + nextRow]["column" + columnToCheck] === 1) {
      rowSurr++;
    }

    columnToCheck++;
    counter++;
  } while (counter < 3);

  return rowSurr;
};

export const checkPosition = (object, row, column) => {
  let surrounding = 0;

  surrounding += checkPreviousRow(object, row, column);
  surrounding += checkSameRow(object, row, column);
  surrounding += checkNextRow(object, row, column);

  if (surrounding < 2 || surrounding > 3) {
    object["row" + row]["column" + column] = 0;
  }

  if (surrounding === 3) {
    object["row" + row]["column" + column] = 1;
  }

  return JSON.stringify(object);
};

const checkAllPositions = (objectToPlay) => {
  let actualRow = 0;
  let actualColumn = 0;
  let newGrid = "";
  const startingGrid = JSON.stringify(objectToPlay);
  console.log(startingGrid);
  do {
    do {
      newGrid = checkPosition(objectToPlay, actualRow, actualColumn);

      actualColumn++;
    } while (
      objectToPlay["row" + actualRow]["column" + actualColumn] !== undefined
    );

    actualRow++;
    actualColumn = 0;
  } while (objectToPlay["row" + actualRow] !== undefined);

  console.table(objectToPlay);

  if (newGrid === startingGrid) {
    console.log("Balance achieved");
    clearInterval(game);
  }

  console.table(objectToPlay);

  return objectToPlay;
};

export const startGame = () => {
  checkAllPositions(gridToPlay);
};

const gridToPlay = createGrid(4);

console.table(gridToPlay);

const game = setInterval(startGame, 1300);
