class Node {
  constructor(x, y) {
    this.position = [x, y];
    this.neighbors = { UP: null, DOWN: null, LEFT: null, RIGHT: null };
  }
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
renderNodes(testNodes());
