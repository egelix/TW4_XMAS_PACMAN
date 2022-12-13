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
      } else if (palletSymbols.includes(sourcePattern[counter])) {
        createTableEl(x, y, PALLET_SOURCE);
      } else if (sourcePattern[counter] === "X") {
        createTableEl(x, y, PALLET_POW_SOURCE);
      }
      counter += 1;
    }
  }
}

createTable(LEVEL_0.sizeX, LEVEL_0.sizeY, LEVEL_0.pattern);
