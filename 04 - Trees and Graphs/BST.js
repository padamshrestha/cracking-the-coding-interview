// Implement a binary search tree class.

let BST = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

// Tests

// let b = new BST(4);
// b.insert(1);
// b.insert(2);
// b.insert(3);
// b.insert(5);
// b.insert(6);
// b.insert(7);
// console.log(b);

module.exports = BST;