const RASTER_SIZE = 40;
const GAMEBOARD_WD = 800;
const GAMEBOARD_HG = 800;
const ENTITY_EL = document.getElementById("game");
const LEVEL_20X20 =
  "" +
  "01234567890123456789" +
  "####################" +
  "#X................X#" +
  "#..................#" +
  "#..................#" +
  "#X................X#" +
  console.log(ENTITY_EL);

// create raster 20px - 20px
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

//test
createRaster(10, 10);
