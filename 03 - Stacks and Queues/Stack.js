// Implement a stack using linked lists. 
// Push: O(1)
// Pop: O(1)

let ListNode = require('./LinkedList');

let Stack = function() {
  this.top = null; // Points to the top/first node of the linked list
};

Stack.prototype.push = function(val) {
  let node = new ListNode(val);

  if (this.top) {
    node.next = this.top;
    this.top = node;
  } else {
    this.top = node;
  }
};

Stack.prototype.pop = function() {
  let popped = this.top;
  if (this.top) {
    this.top = this.top.next;
  }
  return popped.value;
};

Stack.prototype.peek = function() {
  return this.top ? this.top.value : null;
};

Stack.prototype.isEmpty = function() {
  return this.top ? false : true;
};

// Tests
// let t = new Stack();
// console.log(t.isEmpty()); // true
// t.push(1);
// t.push(2);
// t.push(3);
// console.log(t.peek()); // 3
// t.pop();
// console.log(t);
// console.log(t.isEmpty()); // false
// t.push(4);
// t.pop();
// console.log(t.peek()); // 2

module.exports = Stack;