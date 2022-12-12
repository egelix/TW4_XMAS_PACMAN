const RASTER_SIZE = 25;
const GAMEBOARD_WD = 800;
const GAMEBOARD_HG = 800;
const ENTITY_EL = document.getElementById("game");
const WALL_SOURCE = "./assets/images/wall.png";
const PALLET_SOURCE = "./assets/images/pellet/pellet.png";
const PALLET_POW_SOURCE = "../assets/images/pellet/power-pellet.png";

const LEVEL_20X10 = {
  sizeX: 20,
  sizeY: 10,
  pattern:
    "" +
    "####################" +
    "#X................X#" +
    "#.################.#" +
    "#.################.#" +
    ".X................X." +
    "#.################.#" +
    "#.################.#" +
    "#X................X#" +
    "#X................X#" +
    "####################",
};

// create raster 20px - 20px
// for testing purposes
function createRaster(nX, nY, dx = RASTER_SIZE, dy = RASTER_SIZE) {
  for (let y = 0; y < nY * RASTER_SIZE; y += dy) {
    for (let x = 0; x < nX * RASTER_SIZE; x += dx) {
      let rasterEl = document.createElement("div");
      rasterEl.style.height = dy + "px";
      rasterEl.style.width = dx + "px";
      rasterEl.style.position = "absolute";
      rasterEl.style.top = y + "px";
      rasterEl.style.left = x + "px";
      rasterEl.className = "raster";
      ENTITY_EL.appendChild(rasterEl);
    }
  }
}

function createTableEl(x, y, source) {
  let wallEl = document.createElement("img");
  wallEl.src = source;
  wallEl.style.position = "absolute";
  wallEl.style.width = RASTER_SIZE + "px";
  wallEl.style.height = RASTER_SIZE + "px";
  wallEl.style.left = x + "px";
  wallEl.style.top = y + "px";
  ENTITY_EL.appendChild(wallEl);
}

function createTable(
  nX,
  nY,
  sourcePattern,
  dx = RASTER_SIZE,
  dy = RASTER_SIZE
) {
  let counter = 0;
  for (let y = 0; y < nY * RASTER_SIZE; y += dy) {
    for (let x = 0; x < nX * RASTER_SIZE; x += dx) {
      if (sourcePattern[counter] === "#") {
        createTableEl(x, y, WALL_SOURCE);
      } else if (sourcePattern[counter] === ".") {
        createTableEl(x, y, PALLET_SOURCE);
      } else if (sourcePattern[counter] === "X") {
        createTableEl(x, y, PALLET_POW_SOURCE);
      }

      counter += 1;
      console.log(counter);
    }
  }
}

createTable(LEVEL_20X10.sizeX, LEVEL_20X10.sizeY, LEVEL_20X10.pattern);
