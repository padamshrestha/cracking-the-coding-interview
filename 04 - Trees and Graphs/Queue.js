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
  if (this.front === this.back) {
    this.front = null;
    this.back = null;
  }

  if (this.front) {
    let popped = this.front.value;
    this.front = this.front.next;
    return popped;
  }
};

Queue.prototype.peep= function() {
  if (this.front) {
    return this.front.value;
  } else {
    return null;
  }
};

Queue.prototype.isEmpty = function() {
  if (!this.front && !this.back) {
    return true;
  } else {
    return false;
  }
};

// Tests

let q = new Queue();
console.log(q.isEmpty()); // true
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); // 1
q.enqueue(3);
q.enqueue(4);
console.log(q.peep()); // 2
console.log(q.isEmpty()); // false

module.exports = Queue;