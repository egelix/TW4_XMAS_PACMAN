const SPRITE_SIZE = 40;
const SCREEN_END = 800;
const SCREEN_START = 0;
const VELOCITY = 5;
const FPS = 60;
const DT = 1000/FPS;

const pacman = document.querySelector("#pacman");
const pacmanX = pacman.left

let pmMoveDir = 0;
let pmX = 0;
let pmY = 0;

function main() {
    if (pmMoveDir === 1) {
        pacmanMovesRight();
    } else if (pmMoveDir === 2) {
        pacmanMovesLeft();
    } else if (pmMoveDir === 3) {
        pacmanMovesUp();
    } else if (pmMoveDir === 4) {
        pacmanMovesDown()
    }
}

addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "ArrowRight") {
        pmMoveDir = 1;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
        pmMoveDir = 2;
    } else if (event.key === "w" || event.key === "ArrowUp") {
        pmMoveDir = 3;
    } else if (event.key === "s" || event.key === "ArrowDown") {
        pmMoveDir = 4;
    }
})

function pacmanMovesRight() {
    pmX += VELOCITY;
    if (pmX === SCREEN_END) {
        pmX = SCREEN_START;
    }
    pacman.style.left = `${pmX}px`;
}
function pacmanMovesLeft() {
    pmX -= VELOCITY;
    if (pmX === SCREEN_START - SPRITE_SIZE) {
        pmX = SCREEN_END - SPRITE_SIZE;
    }
    pacman.style.left = `${pmX}px`;
}
function pacmanMovesUp() {
    pmY -= VELOCITY;
    if (pmY === SCREEN_START - SPRITE_SIZE) {
        pmY = SCREEN_END - SPRITE_SIZE;
    }
    pacman.style.top = `${pmY}px` ;
}
function pacmanMovesDown() {
    pmY += VELOCITY;
    if (pmY === SCREEN_END) {
        pmY = SCREEN_START;
    }
    pacman.style.top = `${pmY}px`;
}
console.log(pmX);

setInterval(main, DT)
