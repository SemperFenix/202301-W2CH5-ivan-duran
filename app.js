let actualRow = 0;
const totalRows = 2;

let actualColumn = 0;
const totalColumns = 6;

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
    for (const i in object) {
      if (i !== undefined) {
        previousRow++;
      }
    }
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
  let columnToCheck = column - 1;
  let counter = 0;
  let rowSurr = 0;

  // Esto accede al número total de columns en el objeto sin utilizar la variable totalColumns

  for (const i in object["row" + row]) {
    if (i !== undefined) {
      columnToCheck++;
    }
  }

  debugger;

  if (object["row" + row]["column" + columnToCheck] === 1) {
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
  let columnToCheck = column - 1;
  let rowSurr = 0;

  // Esto accede al número total de columns en el objeto sin utilizar la variable totalColumns
  for (const i in object["row" + row]) {
    if (i !== undefined) {
      columnToCheck++;
    }
  }

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

export const checkNextRow = (object, row, column) => {};

const checkAllPositions = (objectToPlay) => {
  actualRow = 0;
  actualColumn = 0;
  do {
    do {
      surrounding += checkPreviousRow(objectToPlay, actualRow, actualColumn);
      surrounding += checkSameRow(objectToPlay, actualRow, actualColumn);
      surrounding += checkNextRow(objectToPlay, actualRow, actualColumn);
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

const rowCheck = {
  row0: {
    column0: 0,
    column1: 0,
    column2: 1,
    column3: 1,
    column4: 1,
    column5: 1,
  },
  row1: {
    column0: 0,
    column1: 0,
    column2: 0,
    column3: 0,
    column4: 0,
    column5: 0,
  },
  row2: {
    column0: 0,
    column1: 0,
    column2: 1,
    column3: 1,
    column4: 1,
    column5: 0,
  },
};
const result = checkPrevRowColumnZero(rowCheck, 0, 0);
console.log(result);

console.table(gridToPlay);
console.log(surrounding);
checkAllPositions(gridToPlay);
