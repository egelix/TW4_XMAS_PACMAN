const SPRITE_SIZE = 40;
const SCREEN_END = 800;
const SCREEN_START = 0;
const VELOCITY = 5;
const FPS = 60;
const DT = 1000/FPS;

const pacman = document.querySelector("#pacman");
const pacmanX = pacman.left

// console.log(testNodesVar[0])

let pmMoveDir = "STILL";
let pmX = 160;
let pmY = 160;
let pmPos = (pmX, pmY)
let frameForAnimation = 1;
// pmPos = nodeD;
function main() {
    if (pmMoveDir === "RIGHT") {
        pacmanMovesRight();
        // pacmanAnimation(pmRightAni);
    } else if (pmMoveDir === "LEFT") {
        pacmanMovesLeft();
        // pacmanAnimation(pmLeftAni);
    } else if (pmMoveDir === "UP") {
        pacmanMovesUp();
        // pacmanAnimation(pmUpAni);
    } else if (pmMoveDir === "DOWN") {
        pacmanMovesDown();
        // pacmanAnimation(pmDownAni);
    } else {
        pacman.style.left = `${pmX}px`
        pacman.style.top = `${pmY}px`

    }

    // pacmanAnimation();
}

addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "ArrowRight") {
        pmMoveDir = "RIGHT";
    } else if (event.key === "a" || event.key === "ArrowLeft") {
        pmMoveDir = "LEFT";
    } else if (event.key === "w" || event.key === "ArrowUp") {
        pmMoveDir = "UP";
    } else if (event.key === "s" || event.key === "ArrowDown") {
        pmMoveDir = "DOWN";
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

// function pacmanAnimation(arr) {
//     const pacmanSprite = document.getElementById("pacman-sprite");
//     frameForAnimation += 1;
//     frameForAnimation = frameForAnimation === pmAniSpeed * 4 + 1 ? 1 : frameForAnimation;
//     if (frameForAnimation < pmAniSpeed + 1) {
//         pacmanSprite.src = arr[0];
//     } else if (frameForAnimation < pmAniSpeed * 2 + 1 || frameForAnimation > pmAniSpeed * 3) {
//         pacmanSprite.src = arr[1];
//     } else {
//         pacmanSprite.src = arr[2];
//     }
// }

setInterval(main, DT)

