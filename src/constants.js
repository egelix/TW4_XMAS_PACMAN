const RASTER_SIZE = 25;
const GAMEBOARD_WD = 800;
const GAMEBOARD_HG = 800;
const ENTITY_EL = document.getElementById("game");
const WALL_SOURCE = "./assets/images/wall.png";
const PALLET_SOURCE = "./assets/images/pellet/pellet.png";
const PALLET_POW_SOURCE = "../assets/images/pellet/power-pellet.png";
const pmRightAni = ["./assets/images/pacman/pacman-0.png", "./assets/images/pacman/pacman-right/pacman-right-1.png", "./assets/images/pacman/pacman-right/pacman-right-2.png"];
const pmLeftAni = ["./assets/images/pacman/pacman-0.png", "./assets/images/pacman/pacman-left/pacman-left-1.png", "./assets/images/pacman/pacman-left/pacman-left-2.png"];
const pmUpAni = ["./assets/images/pacman/pacman-0.png", "./assets/images/pacman/pacman-up/pacman-up-1.png", "./assets/images/pacman/pacman-up/pacman-up-2.png"];
const pmDownAni = ["./assets/images/pacman/pacman-0.png", "./assets/images/pacman/pacman-down/pacman-down-1.png", "./assets/images/pacman/pacman-down/pacman-down-2.png"]
const pmAniSpeed = 15;

const LEVEL_PATTERN = {
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

// module.exports = {
//   RASTER_SIZE: RASTER_SIZE,
//   GAMEBOARD_WD: GAMEBOARD_WD,
//   GAMEBOARD_HG: GAMEBOARD_HG,
//   ENTITY_EL: ENTITY_EL,
//   WALL_SOURCE: WALL_SOURCE,
//   PALLET_SOURCE: PALLET_SOURCE,
//   PALLET_POW_SOURCE: PALLET_POW_SOURCE,
//   LEVEL_PATTERN: LEVEL_20X10,
// };
