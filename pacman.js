const SPRITE_SIZE = 20;
const SCREEN_END = 800;
const SCREEN_START = 0;
const VELOCITY = 3;
const GHOST_VELOCITY = 2.5;
const FPS = 60;
const DT = 1000 / FPS;

const pacman = document.querySelector("#pacman");
const blinky = document.querySelector("#blinky")

let chosenPmMoveDir = "STILL";
let lastPmMove = "STILL";
let pacmanPos = [
  getStartPosition(LEVEL_0, "pacman").x,
  getStartPosition(LEVEL_0, "pacman").y,
];

let blinkyMoveDir = "STILL";
let lastBlinkyMove = "STILL";
let blinkyPos = [
  getStartPosition(LEVEL_0, "blinky").x,
  getStartPosition(LEVEL_0, "blinky").y,
];

function pacmanValidMove(pacmanPos, testNodesVar, chosenPmMoveDir, lastPmMove) {
  let nodeHit = false;
  let neighborGiven = false;
  for (let node of testNodesVar) {
    if (
      node.position[0] === pacmanPos[0] &&
      node.position[1] === pacmanPos[1]
    ) {
      nodeHit = true;
      if (node.neighbors[chosenPmMoveDir] !== null) {
        neighborGiven = true;
      }
    }
  }
  if (nodeHit === false) {
    return (chosenPmMoveDir === "RIGHT" && lastPmMove === "LEFT") ||
      (chosenPmMoveDir === "LEFT" && lastPmMove === "RIGHT") ||
      (chosenPmMoveDir === "UP" && lastPmMove === "DOWN") ||
      (chosenPmMoveDir === "DOWN" && lastPmMove === "UP")
      ? chosenPmMoveDir
      : lastPmMove;
  } else if (nodeHit === true) {
    return neighborGiven === false ? "STILL" : chosenPmMoveDir;
  }
}

function resetSpritesToNodes(spritePos, testNodesVar, VELOCITY) {
  let corrSpritePos = spritePos;
  for (let node of testNodesVar) {
    if (
      spritePos[1] === node.position[1] &&
      spritePos[0] < node.position[0] + VELOCITY &&
      spritePos[0] > node.position[0] - VELOCITY
    ) {
      corrSpritePos[0] = node.position[0];
    } else if (
      spritePos[0] === node.position[0] &&
      spritePos[1] < node.position[1] + VELOCITY &&
      spritePos[1] > node.position[1] - VELOCITY
    ) {
      corrSpritePos[1] = node.position[1];
    }
  }
  return corrSpritePos;
}

function pacmanMovementAndAnimation(pmMoveDir) {
  if (pmMoveDir === "RIGHT") {
    pacmanMovesRight();
    pacmanAnimation(pmRightAni);
  } else if (pmMoveDir === "LEFT") {
    pacmanMovesLeft();
    pacmanAnimation(pmLeftAni);
  } else if (pmMoveDir === "UP") {
    pacmanMovesUp();
    pacmanAnimation(pmUpAni);
  } else if (pmMoveDir === "DOWN") {
    pacmanMovesDown();
    pacmanAnimation(pmDownAni);
  } else {
    pacman.style.left = `${pacmanPos[0]}px`;
    pacman.style.top = `${pacmanPos[1]}px`;
    pacmanAnimation();
  }
}

function pacmanMovesRight() {
  pacmanPos[0] += VELOCITY;
  if (pacmanPos[0] === SCREEN_END) {
    pacmanPos[0] = SCREEN_START;
  }
  pacman.style.left = `${pacmanPos[0]}px`;
}
function pacmanMovesLeft() {
  pacmanPos[0] -= VELOCITY;
  if (pacmanPos[0] === SCREEN_START - SPRITE_SIZE) {
    pacmanPos[0] = SCREEN_END - SPRITE_SIZE;
  }
  pacman.style.left = `${pacmanPos[0]}px`;
}
function pacmanMovesUp() {
  pacmanPos[1] -= VELOCITY;
  if (pacmanPos[1] === SCREEN_START - SPRITE_SIZE) {
    pacmanPos[1] = SCREEN_END - SPRITE_SIZE;
  }
  pacman.style.top = `${pacmanPos[1]}px`;
}
function pacmanMovesDown() {
  pacmanPos[1] += VELOCITY;
  if (pacmanPos[1] === SCREEN_END) {
    pacmanPos[1] = SCREEN_START;
  }
  pacman.style.top = `${pacmanPos[1]}px`;
}

let frameForAnimation = 1;
function pacmanAnimation(arr) {
  const pacmanSprite = document.getElementById("pacman-sprite");
  frameForAnimation += 1;
  if (arr === undefined) {
    pacmanSprite.src = "./assets/images/pacman/pacman-0.png";
    frameForAnimation = 1;
  } else {
    frameForAnimation =
      frameForAnimation === pmAniSpeed * 4 + 1 ? 1 : frameForAnimation;
    if (frameForAnimation < pmAniSpeed + 1) {
      pacmanSprite.src = arr[0];
    } else if (
      frameForAnimation < pmAniSpeed * 2 + 1 ||
      frameForAnimation > pmAniSpeed * 3
    ) {
      pacmanSprite.src = arr[1];
    } else {
      pacmanSprite.src = arr[2];
    }
  }
}

function ghostRandomMove(lastGhostMove, ghostPos, testNodesVar) {
    let possibleMove = [];
    for (let node of testNodesVar) {
        if (ghostPos[0] === node.position[0] && ghostPos[1] === node.position[1]) {
            for (let neighb in node.neighbors) {
                if (node.neighbors[neighb] !== null) {
                    possibleMove.push(neighb);
                }
            }
            return (possibleMove[Math.floor(Math.random() * possibleMove.length)]);
        }
    } return lastGhostMove;
}

function ghostMovementAndAnimation(ghostPos, ghostMoveDir, velocity) {
    let newGhostPos = ghostPos;
    if (ghostMoveDir === "RIGHT") {
        newGhostPos[0] = ghostPos[0] + velocity;
      } else if (ghostMoveDir === "LEFT") {
        newGhostPos[0] = ghostPos[0] - velocity;
      } else if (ghostMoveDir === "UP") {
        newGhostPos[1] = ghostPos[1] - velocity;
      } else if (ghostMoveDir === "DOWN") {
        newGhostPos[1] = ghostPos[1] + velocity;
      } 
      return newGhostPos;
}

function checkIfPacmanEatsPallet(pacmanPos, palletsList)
    for (let pallet of palletsList) {
        
    }
