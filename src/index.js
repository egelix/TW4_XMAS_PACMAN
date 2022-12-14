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

function update() {}

/*
setInterval(update, DT); 
 */
