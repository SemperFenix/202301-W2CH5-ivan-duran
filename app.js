let actualRow = 0;
const totalRows = 2;

let actualColumn = 0;
const totalColumns = 6;

const gridToPlay = {};
const surrounding = 0;
class DrawTableGrid {
  constructor() {
    do {
      this["column" + actualColumn] = Math.round(Math.random());

      actualColumn++;
    } while (actualColumn < totalColumns);
  }
}

function createGrid(size) {
  do {
    gridToPlay["row" + actualRow] = new DrawTableGrid();
    actualColumn = 0;

    actualRow++;
  } while (actualRow <= size);
}

export const checkPreviousRow = (object, row, column) => {
  let previousRow = row - 1;
  let columnToCheck = column - 1;
  let counter = 0;
  let rowSurr = 0;

  if (row === 0) {
    // Esto accede al número total de rows en el objeto sin utilizar la variable totalRows
    previousRow = Object.keys(object).length - 1;
  }

  if (column === 0) {
    // Esto accede al número total de columns en el objeto sin utilizar la variable totalColumns
    if (
      object["row" + previousRow][
        "column" + (Object.keys(object["row" + row]).length - 1)
      ] === 1
    ) {
      rowSurr++;
    }

    columnToCheck = column;
    counter++;
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

const checkAllPositions = (objectToPlay) => {
  actualRow = 0;
  actualColumn = 0;
  do {
    do {
      checkPreviousRow(objectToPlay, actualRow, actualColumn);
      // Console.log(`Es la fila ${actualRow}, la columna ${actualColumn}`);

      actualColumn++;
    } while (
      objectToPlay["row" + actualRow]["column" + actualColumn] !== undefined
    );

    actualRow++;
    actualColumn = 0;
  } while (objectToPlay["row" + actualRow] !== undefined);
};

createGrid(totalRows);
// Console.table(gridToPlay);
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
  row3: {
    column0: 0,
    column1: 0,
    column2: 1,
    column3: 1,
    column4: 1,
    column5: 0,
  },
};

console.log(checkPreviousRow(rowCheck, 1, 0));
