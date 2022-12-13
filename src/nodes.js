class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.position = [x, y];
    this.neighbors = { UP: null, DOWN: null, LEFT: null, RIGHT: null };
  }
  get getX() {
    return this.x;
  }
  get getY() {
    return this.y;
  }
  set right(newRight) {
    this.neighbors.RIGHT = newRight;
  }
  set left(newLeft) {
    this.neighbors.LEFT = newLeft;
  }
  set up(newUp) {
    this.neighbors.UP = newUp;
  }
  set down(newDown) {
    this.neighbors.DOWN = newDown;
  }
}
// test file
//8X8
const nodeSymbols = ["X", "+", "x"];
const pathSymbols = ["."];
const mazeTest = {
  sizeX: 8,
  sizeY: 8,
  pattern:
    "########" +
    "#X..X###" +
    "#.##.###" +
    "#X..X.X#" +
    "#.####.#" +
    "#.####.#" +
    "#X....X#" +
    "########",
};
/**
 * Reads the position in string, and converts in actual coordinate
 * @returns
 */
function constructKey(x, y, dx = RASTER_SIZE, dy = RASTER_SIZE) {
  return { x: x * dx, y: y * dy };
}
/**
 * Reads level information and creates list of unconnected Nodes
 * @param {Object} level
 * @returns {[Node]}
 */
function createNodeTable(level) {
  let nodeList = [];
  let count = 0;
  for (let y = 0; y < level.sizeY; y++) {
    for (let x = 0; x < level.sizeX; x++) {
      if (nodeSymbols.includes(level.pattern[count])) {
        let coord = constructKey(x, y);
        let newNode = new Node(coord.x, coord.y);
        nodeList.push(newNode);
      }
      count += 1;
    }
  }
  return nodeList;
}

// TEST
let nodes = createNodeTable(mazeTest);
// console.log(nodes);

function getNodeByCoord(x, y, nodes) {
  for (const node of nodes) {
    console.log(node.getX);
    if (node.getX === x && node.getY === y) return node;
  }
  return null;
}
// TEST
// console.log(getNodeByCoord(100, 25, nodes));

function connectHorizontally(level, nodeList) {
  let count = 0;
  for (let y = 0; y < level.sizeY; y++) {
    let key = null;
    for (let x = 0; x < level.sizeX; x++) {
      if (nodeSymbols.includes(level.pattern[count])) {
        if (key === null) {
          key = constructKey(x, y);
        } else {
          let otherkey = constructKey(x, y);
          let firstNode = getNodeByCoord(key.x, key.y);
          let secondNode = getNodeByCoord(otherkey.x, otherkey.y);
          firstNode.right = secondNode;
          secondNode.left = firstNode;
        }
      }
      count += 1;
    }
  }
  return;
}
//TEST connect Horizontally
connectHorizontally(mazeTest, nodes);
console.log(nodes);

function connectVertically() {
  return;
}

function testNodes() {
  let nodeA = new Node(80, 80);
  let nodeB = new Node(160, 80);
  let nodeC = new Node(80, 160);
  let nodeD = new Node(160, 160);
  let nodeE = new Node(208, 160);
  let nodeF = new Node(80, 320);
  let nodeG = new Node(208, 320);
  nodeA.neighbors["RIGHT"] = nodeB;
  nodeA.neighbors["DOWN"] = nodeC;
  nodeB.neighbors["LEFT"] = nodeA;
  nodeB.neighbors["DOWN"] = nodeD;
  nodeC.neighbors["UP"] = nodeA;
  nodeC.neighbors["RIGHT"] = nodeD;
  nodeC.neighbors["DOWN"] = nodeF;
  nodeD.neighbors["UP"] = nodeB;
  nodeD.neighbors["LEFT"] = nodeC;
  nodeD.neighbors["RIGHT"] = nodeE;
  nodeE.neighbors["LEFT"] = nodeD;
  nodeE.neighbors["DOWN"] = nodeG;
  nodeF.neighbors["UP"] = nodeC;
  nodeF.neighbors["RIGHT"] = nodeG;
  nodeG.neighbors["UP"] = nodeE;
  nodeG.neighbors["LEFT"] = nodeF;
  return [nodeA, nodeB, nodeC, nodeD, nodeE, nodeF, nodeG];
}

function renderNodes(nodesList) {
  for (const node of nodesList) {
    createTableEl(node.position[0], node.position[1], PALLET_POW_SOURCE);
  }
}

let testNodesVar = testNodes();
renderNodes(testNodes);
