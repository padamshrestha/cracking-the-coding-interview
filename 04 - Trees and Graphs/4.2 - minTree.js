// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// Hints: 
// A minimal binary tree has about the same number of nodes on the left of each node as on the right.

// Solution 1: recursion
// Divide and conquer 

let BST = require('./BST');

let minTree = function(arr, start = 0, end = arr.length - 1) {
  if (start > end) {
    return null;
  }
  
  let mid = Math.ceil((start + end)/ 2);
  let root = new BST(arr[mid]);
  root.left = minTree(arr, start, mid - 1);
  root.right = minTree(arr, mid + 1, end);

  return root;
};

// Tests
let arr = [0, 1, 2, 3];
let t = new minTree(arr);
// console.log(t);
//      
//      2
//    /  \
//   1   3
//  /
// 0

let arr2 = [0, 1, 2, 3, 4, 5, 6];
let t2 = new minTree(arr2);
// console.log(t);
// 
//        3
//      /   \
//     1    5
//    / \  / \
//   0  2 4  6