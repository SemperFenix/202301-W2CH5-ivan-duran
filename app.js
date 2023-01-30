import * as game from "./js/functions.js";

const size = 4;
const gridToPlay = game.createGrid(size);

console.table(gridToPlay);

setInterval(game.checkAllPositions, 1000, gridToPlay);
