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
  get nodeLeft() {
    return this.neighbors.LEFT;
  }
  get nodeRight() {
    return this.neighbors.RIGHT;
  }
  get nodeUp() {
    return this.neighbors.UP;
  }
  get nodeDown() {
    return this.neighbors.DOWN;
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

//############## MAZE-STRING FUNCTIONS ##############################

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

function convertMazeTo2D(level) {
  let newMaze = [];
  let row = [];
  for (let i = 0; i < level.pattern.length; i++) {
    row.push(level.pattern[i]);
    if (row.length === level.sizeX) {
      newMaze.push(row);
      row = [];
    }
  }
  return newMaze;
}

function transposeMaze(level) {
  let maze = convertMazeTo2D(level);
  let tMaze = [];

  for (let i = 0; i < level.sizeX; i++) {
    let row = Array(level.sizeY).fill(" . ");
    tMaze.push(row);
  }

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      tMaze[x][y] = maze[y][x];
    }
  }
  // console.log(tMaze.map((e) => e.join("")).join("\n"));
  tMaze = tMaze.map((e) => e.join("")).join("");
  return {
    sizeX: level.sizeY,
    sizeY: level.sizeX,
    pattern: tMaze,
  };
}

//####################################################################
function constructKey(x, y, dx = RASTER_SIZE, dy = RASTER_SIZE) {
  return { x: x * dx, y: y * dy };
}

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

function getNodeByCoord(x, y, nodeList) {
  for (const node of nodeList) {
    if (node.getX === x && node.getY === y) return node;
  }
  return null;
}

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
          let firstNode = getNodeByCoord(key.x, key.y, nodeList);
          let secondNode = getNodeByCoord(otherkey.x, otherkey.y, nodeList);
          firstNode.right = secondNode;
          secondNode.left = firstNode;
          key = otherkey;
        }
      }
      count += 1;
    }
  }
  return;
}

function connectVertically(level, nodeList) {
  let tMaze = transposeMaze(level);

  let count = 0;
  for (let y = 0; y < tMaze.sizeY; y++) {
    let key = null;
    for (let x = 0; x < tMaze.sizeX; x++) {
      if (nodeSymbols.includes(tMaze.pattern[count])) {
        if (key === null) {
          key = constructKey(y, x);
        } else {
          otherkey = constructKey(y, x);
          let firstNode = getNodeByCoord(key.x, key.y, nodeList);
          let secondNode = getNodeByCoord(otherkey.x, otherkey.y, nodeList);
          firstNode.down = secondNode;
          secondNode.up = firstNode;
          key = otherkey;
        }
      }
      count += 1;
    }
  }
}

function getStartPosition(level) {
  let count = 0;
  for (let y = 0; y < level.sizeY; y++) {
    for (let x = 0; x < level.sizeX; x++) {
      let key = null;
      if (level.pattern[count] === "@") {
        key = constructKey(x, y);
        return key;
      }
      count += 1;
    }
  }
  return null;
}

// check for bug
function removeRedundantConnections(level, nodeList) {
  let maze = convertMazeTo2D(level);

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (nodeSymbols.includes(maze[y][x])) {
        let key = constructKey(x, y);
        let tempNode = getNodeByCoord(key.x, key.y, nodeList);

        if (!pathSymbols.includes(maze[y][x + 1])) {
          tempNode.right = null;
        }
        if (!pathSymbols.includes(maze[y][x - 1])) {
          tempNode.left = null;
        }
        if (!pathSymbols.includes(maze[y + 1][x])) {
          tempNode.down = null;
        }
        if (!pathSymbols.includes(maze[y - 1][x])) {
          tempNode.up = null;
        }
      }
    }
  }
}

function consolePrintNodes(level, nodeList) {
  // console.log(level.sizeX, level.sizeY);
  let nodeArray = [];
  for (let i = 0; i < level.sizeY; i++) {
    let row = Array(level.sizeX).fill("   ");
    nodeArray.push(row);
  }
  // console.log(nodeArray);
  let maze = convertMazeTo2D(level);
  // console.log(maze.map((e) => e.join(" ")).join(" N\n"));

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (nodeSymbols.includes(maze[y][x])) {
        nodeArray[y][x] = " X ";
        let key = constructKey(x, y);
        let tempNode = getNodeByCoord(key.x, key.y, nodeList);

        if (tempNode.nodeRight !== null) {
          nodeArray[y][x + 1] = "-  ";
        }
        if (tempNode.nodeLeft !== null) {
          nodeArray[y][x - 1] = "  -";
        }
        if (tempNode.nodeUp !== null) {
          nodeArray[y - 1][x] = " | ";
        }
        if (tempNode.nodeDown !== null) {
          nodeArray[y + 1][x] = " | ";
        }
      }
    }
  }

  console.log(nodeArray.map((e) => e.join("")).join("\n"));
}

//########### TEST FUNCTIONS ##########################
function testNodes() {
  let nodeA = new Node(80, 80);
  let nodeB = new Node(160, 80);
  let nodeC = new Node(80, 160);
  let nodeD = new Node(160, 160);
  let nodeE = new Node(200, 160);
  let nodeF = new Node(80, 320);
  let nodeG = new Node(200, 320);
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

// let testNodesVar = testNodes();
// renderNodes(testNodesVar);
//#####################################################

function createNodeChain(level) {
  let nodes = createNodeTable(level);
  connectHorizontally(level, nodes);
  connectVertically(level, nodes);
  removeRedundantConnections(level, nodes);
  consolePrintNodes(level, nodes);
  renderNodes(nodes);
  return nodes;
}
let testNodesVar = createNodeChain(LEVEL_0);
