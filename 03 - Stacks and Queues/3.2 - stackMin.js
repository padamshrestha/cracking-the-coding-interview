// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?

// Constraint: Push, pop, and min should all operate in O(1) time.
// Hints: What if we keep track of extra data at each stack node? What sort of data might make it easier to solve the problem?

let Stack = require('./Stack');

let StackMin = function() {
  this.stack = new Stack();
  this.min = new Stack(); // Use an additional stack to keep track of the mins
  this.currMin = null;
};

StackMin.prototype.push = function(val) {
  if (!this.currMin || val <= this.currMin) {
    this.min.push(this.currMin);
    this.currMin = val;
  }
  this.stack.push(val);
};

StackMin.prototype.pop = function() {
  let popped = this.stack.pop();

  if (popped === this.currMin) {
    this.currMin = this.min.pop();
  }

  return popped;
};

StackMin.prototype.peep = function() {
  return this.stack.peek();
};

StackMin.prototype.isEmpty = function() {
  return this.stack.isEmpty();
};

StackMin.prototype.getMin = function() {
  return this.currMin;
};

// Tests
let t = new StackMin();
t.push(5);
t.push(6);
t.push(3);
t.push(7);
t.push(1);
console.log(t.currMin); // 1
console.log(t.min); // 1
console.log(t.pop()); // pop off 1
console.log(t.currMin); // 3
console.log(t.peep()); // 7
console.log(t.isEmpty()); // false
t.pop(); // pop off 7
t.pop(); // pop off 3
console.log(t.getMin()); // 5