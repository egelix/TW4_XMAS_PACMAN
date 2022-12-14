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

function main() {

  pacmanPos = resetSpritesToNodes(pacmanPos, testNodesVar, VELOCITY);
  
  let pmMoveDir = pacmanValidMove(
      pacmanPos,
      testNodesVar,
      chosenPmMoveDir,
      lastPmMove
      );
      lastPmMove = pmMoveDir;
      
    mainGhostMovement();


    pacmanMovementAndAnimation(pmMoveDir);
    checkIfPacmanEatsPallet(pacmanPos, palletsList);
    displayScore.innerHTML = `Score: ${score}`;
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
});
/*
setInterval(update, DT); 
 */
setInterval(main, DT);
