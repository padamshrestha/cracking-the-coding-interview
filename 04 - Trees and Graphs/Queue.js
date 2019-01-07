// implement a queue using linkedLists.
let listNode = require('./LinkedList');

let Queue = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue = function(value) {
  let newNode = new listNode(value);

  if (this.back === null) {
    this.front = newNode;
    this.back = newNode;
  } else {
    this.back.next = newNode;
    this.back = this.back.next;
  }

};

Queue.prototype.dequeue = function() {

};

Queue.prototype.peep= function() {

};

Queue.prototype.isEmpty = function() {

};

// Tests

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);

module.exports = Queue;