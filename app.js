let actualRow = 0;
const totalRows = 5;

let columns = 1;
const totalColumns = 5;

const gridToPlay = [];

function DrawTableGrid(value) {
  do {
    this["Column" + columns] = value;

    columns++;
  } while (columns <= totalColumns);
}

function createGrid(size) {
  do {
    gridToPlay["Row" + actualRow] = new DrawTableGrid(0);
    columns = 1;

    actualRow++;
  } while (actualRow <= size);
}

createGrid(totalRows);

console.table(gridToPlay);
