/* 
const PACMAN = createSprite("pacman");
const BLINKY = createSprite("blinky");
const PINKY = createSprite("pinky");
const INKY = createSprite("inky");
const CLYDE = createSprite("clyde");

let testNodesVar = createNodeChain(LEVEL_0);

*/
const maze = createMaze(LEVEL_0);
let testNodesVar = createNodeChain(LEVEL_0);
renderNodes(testNodesVar);
let borderBlinkSpeed = 850;
let lives = 3;

function main() {

    if (checkIfPacmanTouchesGhosts(pacmanPos, blinkyPos, pinkyPos, inkyPos, clydePos) === true) {
        lives -= 1;
        pacmanPos = [getStartPosition(LEVEL_0, "pacman").x, getStartPosition(LEVEL_0, "pacman").y];
        // pmMoveDir = "STILL";
    }

  pacmanPos = resetSpritesToNodes(pacmanPos, testNodesVar, VELOCITY);
  
  let pmMoveDir = pacmanValidMove(
      pacmanPos,
      testNodesVar,
      chosenPmMoveDir,
      lastPmMove
      );
      lastPmMove = pmMoveDir;
      
      pacmanMovementAndAnimation(pmMoveDir);


      mainGhostMovementAndAnimation();


    checkIfPacmanEatsPallet(pacmanPos, palletsList);
    displayScore.innerHTML = `Score: ${score}`;
    displayLives.innerHTML = `Lives: ${lives}`;
    if (checkIfPlayerWon(palletsList) === true) {
        borderBlinkSpeed = 300;
        winningScreen();
    }
};

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
});
/*
setInterval(update, DT); 
 */
setInterval(main, DT);
setInterval(borderBlink, borderBlinkSpeed)
