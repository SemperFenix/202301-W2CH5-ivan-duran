let actualRow = 1;
const totalRows = 15;

let columns = 1;
const totalColumns = 15;

const gridToPlay = [];

class DrawTableGrid {
  constructor() {
    do {
      this["Column" + columns] = Math.round(Math.random());

      columns++;
    } while (columns <= totalColumns);
  }
}

function createGrid(size) {
  do {
    gridToPlay["Row" + actualRow] = new DrawTableGrid();
    columns = 1;

    actualRow++;
  } while (actualRow <= size);
}

createGrid(totalRows);

console.table(gridToPlay);
