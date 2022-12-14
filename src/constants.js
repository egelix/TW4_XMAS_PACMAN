const RASTER_SIZE = 20;
const GAMEBOARD_WD = 800;
const GAMEBOARD_HG = 800;
const ENTITY_EL = document.getElementById("game");
const MAZE_EL = document.getElementById("maze");
const WALL_SOURCE = "./assets/images/wall.png";
const PALLET_SOURCE = "./assets/images/pellet/pellet.png";
const PALLET_POW_SOURCE = "../assets/images/pellet/power-pellet.png";
const pmRightAni = [
  "./assets/images/pacman/pacman-0.png",
  "./assets/images/pacman/pacman-right/pacman-right-1.png",
  "./assets/images/pacman/pacman-right/pacman-right-2.png",
];
const pmLeftAni = [
  "./assets/images/pacman/pacman-0.png",
  "./assets/images/pacman/pacman-left/pacman-left-1.png",
  "./assets/images/pacman/pacman-left/pacman-left-2.png",
];
const pmUpAni = [
  "./assets/images/pacman/pacman-0.png",
  "./assets/images/pacman/pacman-up/pacman-up-1.png",
  "./assets/images/pacman/pacman-up/pacman-up-2.png",
];
const pmDownAni = [
  "./assets/images/pacman/pacman-0.png",
  "./assets/images/pacman/pacman-down/pacman-down-1.png",
  "./assets/images/pacman/pacman-down/pacman-down-2.png",
];
const pmAniSpeed = 15;
const nodeSymbols = ["X", "+", "x", "@", "B", "P", "I", "C", "1"];
const wallSymbols = ["#"];
const pathSymbols = [".", "="];
const palletSymbols = [".", "+"];
const palletsList = [];
const ghostNames = ["blinky", "pinky", "inky", "clyde"];
const SPRITE_SIZE = 20;
const SCREEN_END = 800;
const SCREEN_START = 0;
const VELOCITY = 2;
const GHOST_VELOCITY = 2.5;
const FPS = 60;
const DT = 1000 / FPS;

const displayScore = document.querySelector("#score");
const pacman = document.querySelector("#pacman");
const blinky = document.querySelector("#blinky");

const LEVEL_PATTERN = {
  sizeX: 20,
  sizeY: 10,
  pattern:
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

const LEVEL_0 = {
  sizeX: 28,
  sizeY: 36,
  pattern:
    "############################" +
    "############################" +
    "############################" +
    "############################" +
    "#X....+.....+##+.....+....X#" +
    "#.####.#####.##.#####.####.#" +
    "#.####.#####.##.#####.####.#" +
    "#.####.#####.##.#####.####.#" +
    "#+....+..+..+..+..+..+....+#" +
    "#.####.##.########.##.####.#" +
    "#.####.##.########.##.####.#" +
    "#X....+##+..+##+..+##+....X#" +
    "######.#####.##.#####.######" +
    "######.#####.##.#####.######" +
    "######.##+..++++..+##.######" +
    "######.##.###==###.##.######" +
    "######.##.## BP ##.##.######" +
    "1.....+..+## .. ##+..+.....1" +
    "######.##.## IC ##.##.######" +
    "######.##.########.##.######" +
    "######.##+....@...+##.######" +
    "######.##.########.##.######" +
    "######.##.########.##.######" +
    "#X....+..+..+##+..+..+....X#" +
    "#.####.#####.##.#####.####.#" +
    "#.####.#####.##.#####.####.#" +
    "#+.+##+..+..+..+..+..+##+.+#" +
    "###.##.##.########.##.##.###" +
    "###.##.##.########.##.##.###" +
    "#+.+..+##+..+##+..+##+..+.+#" +
    "#.##########.##.##########.#" +
    "#.##########.##.##########.#" +
    "#X..........+..+..........X#" +
    "############################" +
    "############################" +
    "############################",
};
