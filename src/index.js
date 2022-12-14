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
  blinkyPos = resetSpritesToNodes(blinkyPos, testNodesVar, GHOST_VELOCITY);

  let pmMoveDir = pacmanValidMove(
    pacmanPos,
    testNodesVar,
    chosenPmMoveDir,
    lastPmMove
  );
  lastPmMove = pmMoveDir;

    blinkyMoveDir = ghostRandomMove(lastBlinkyMove, blinkyPos, testNodesVar);
    blinkyPos = ghostMovementAndAnimation(blinkyPos, blinkyMoveDir, GHOST_VELOCITY);
    blinky.style.left = `${blinkyPos[0]}px`;
    blinky.style.top = `${blinkyPos[1]}px`;

  lastBlinkyMove = blinkyMoveDir;


    pacmanMovementAndAnimation(pmMoveDir);
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
