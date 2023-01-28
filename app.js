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
    // Esto accede al número total de rows en el objeto sin utilizar la variable totalRows ni Object.keys => Da problemas en el check de Sonar
    // Era más sencillo con Object.keys(object).length
    for (const i in object) {
      if (i) {
        previousRow++;
      }
    }
  }

  if (column === 0) {
    for (const i in object["row" + row]) {
      if (i) {
        columnToCheck++;
      }
    }

    // Esto accede al número total de columns en el objeto sin utilizar la variable totalColumns
    if (object["row" + previousRow]["column" + columnToCheck] === 1) {
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
      surrounding += checkPreviousRow(objectToPlay, actualRow, actualColumn);
      // Console.log(`Es la fila ${actualRow}, la columna ${actualColumn}`);

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
