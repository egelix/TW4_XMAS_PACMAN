const SPRITE_SIZE = 40;
const SCREEN_END = 800;
const SCREEN_START = 0;
const VELOCITY = 5;
const FPS = 60;
const DT = 1000/FPS;

const pacman = document.querySelector("#pacman");
const pacmanX = pacman.left

let chosenPmMoveDir = "STILL";
let pmX = 160;
let pmY = 160;
let frameForAnimation = 1;

for (let node of nodes) {
    if (node.position[0] === pmX && node.position[1] === pmY) {
        console.log("treffer")
    } console.log("nope")
}
// console.log(testNodesVar[3].neighbors[pmMoveDir])

function main() {
    let pmMoveDir = pacmanValidMove(pmX, pmY, testNodesVar, chosenPmMoveDir)

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
        chosenPmMoveDir = "RIGHT";
    } else if (event.key === "a" || event.key === "ArrowLeft") {
        chosenPmMoveDir = "LEFT";
    } else if (event.key === "w" || event.key === "ArrowUp") {
        chosenPmMoveDir = "UP";
    } else if (event.key === "s" || event.key === "ArrowDown") {
        chosenPmMoveDir = "DOWN";
    }
})

function pacmanValidMove(pmX, pmY, testNodesVar, chosenPmMoveDir) {
    let nodeHit = false;
    let neighborGiven = false;
    for (let node of testNodesVar) {
        if (node.position[0] === pmX && node.position[1] === pmY) {
            nodeHit = true;
            if (node.neighbors[chosenPmMoveDir] !== null) {
                neighborGiven = true;
            }
        }
    }
    return nodeHit === true && neighborGiven === false ? "STILL" : chosenPmMoveDir;
}

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
// for (let node of testNodesVar) {
//     console.log(node.position[0], node.position[1], node.neighbors[])
// }
setInterval(main, DT)
console.log(testNodesVar[4].position[0], testNodesVar[4].position[1])
