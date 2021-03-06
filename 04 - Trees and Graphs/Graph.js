// Implement a graph class.

// Example:
// Graph {
//   nodes: {
//      a: {b: true, c: true, d: true},
//      b: {c: true, f: true},
//      d: {e: true},
//      e: {a: true, f: true},
//      f: {a: true, c: true, d: true, e: true}
//   }
// }

let Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(value) {
  if (!this.nodes[value]) {
    this.nodes[value] = {};
  } 
};

Graph.prototype.addEdge = function(node, edge) {
  if (this.nodes[node]) {
    this.nodes[node][edge] = true;
  }
};

Graph.prototype.findEdges = function(node) {
  if (this.nodes[node]) {
    return this.nodes[node];
  } else {
    return `This node does not exist`;
  }
};

Graph.prototype.hasEdge = function(node, edge) {
  if (this.nodes[node]) {
    return this.nodes[node][edge] !== undefined;
  } else if (this.nodes[node] === undefined) {
    return false;
  }
};

Graph.prototype.hasNode = function(node) {
  return this.nodes[node] !== undefined;
};

Graph.prototype.removeEdge = function(node, edge) {
  if (this.nodes) {
    delete this.nodes[node][edge];
  }
};

Graph.prototype.removeNode = function(node) {
  if (this.nodes[node]) {
    delete this.nodes[node];
  }
};

// Tests

// let g = new Graph();
// g.addNode(0);
// g.addNode(1);
// g.addNode(2);
// g.addNode(3);
// g.addNode(4);
// g.addNode(5);
// g.addEdge(0, 1);
// g.addEdge(0, 4);
// g.addEdge(0, 5);
// g.addEdge(1, 3);
// g.addEdge(3, 2);
// g.addEdge(2, 1);
// g.addEdge(3, 4);
// console.log(g.findEdges(0)); // 1, 4, 5
// console.log(g.hasEdge(0, 6)); // false
// console.log(g.hasEdge(0, 1)); // true
// console.log(g.hasNode(0)); // true
// console.log(g.hasNode(7)); // false
// g.removeEdge(3, 4);
// console.log(g.hasEdge(3, 4)); // false
// g.removeEdge(3, 6);
// g.removeNode(5);
// console.log(g.hasNode(5)); // false

module.exports = Graph;