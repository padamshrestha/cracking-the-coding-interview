// Implement a MyQueue class which implements a queue using two stacks.
let Stack = require('./Stack');

let MyQueue = function() {
  this.in = new Stack();
  this.out = new Stack();
};

MyQueue.prototype.enqueue = function(val) {
  while (!this.in.isEmpty()) {
    this.out.push(this.in.pop());
  }
  this.out.push(val);
};

MyQueue.prototype.dequeue = function() {
  while (!this.out.isEmpty()) {
    this.in.push(this.out.pop());
  }
  return this.in.pop();
};

MyQueue.prototype.isEmpty = function() {
  return this.in.isEmpty() && this.out.isEmpty();
};

// Tests
let q = new MyQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q); // out: 3 -> 2 -> 1
console.log(q.dequeue()); // 1;
console.log(q.dequeue()); // 2;
console.log(q.dequeue()); // 3;
console.log(q);