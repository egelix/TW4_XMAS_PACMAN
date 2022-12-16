// create raster 20px - 20px
// for testing purposes

function createTableEl(x, y, source) {
  let el = document.createElement("img");
  el.src = source;
  el.style.position = "absolute";
  el.style.width = RASTER_SIZE + "px";
  el.style.height = RASTER_SIZE + "px";
  el.style.left = x + "px";
  el.style.top = y + "px";

  MAZE_EL.appendChild(el);
  return el;
}

function createMaze(level, dx = RASTER_SIZE, dy = RASTER_SIZE) {
  let counter = 0;
  let nX = level.sizeX;
  let nY = level.sizeY;
  let sourcePattern = level.pattern;
  MAZE_EL.style.width = nX * dx + "px";
  MAZE_EL.style.height = nY * dy + "px";

  for (let y = 0; y < nY * RASTER_SIZE; y += dy) {
    for (let x = 0; x < nX * RASTER_SIZE; x += dx, counter++) {
      if (sourcePattern[counter] === "#") {
        createTableEl(x, y, WALL_SOURCE);
      } else if (palletSymbols.includes(sourcePattern[counter])) {
        let pallet = {
          x: x,
          y: y,
          el: createTableEl(x, y, PALLET_SOURCE),
        };
        palletsList.push(pallet);
      } else if (sourcePattern[counter] === "X") {
        let powPallet = {
          x: x,
          y: y,
          el: createTableEl(x, y, PALLET_POW_SOURCE),
        };
        palletsPowList.push(powPallet);
      }
    }
  }
}
