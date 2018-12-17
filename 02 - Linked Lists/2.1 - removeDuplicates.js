// Remove duplicates from an unsorted linked list.
function ListNode(val) {
  this.value = val;
  this.next = null;
};

// Solution 1: 
// Time Complexity: O(n) 
// Space Complexity: O(n)
function removeDups(list) {
  if (!list || !list.next) return list;
  let set = new Set();

  set.add(list.value);

  while (list.next) { // O(n)
    if (set.has(list.next.value)) {
      list.next = list.next.next;
    } else {
      set.add(list.next.value);
      list = list.next;
    }
  }
};

// Solution 2: 
// Time Complexity: O(n2) 
// Space Complexity: O(1)
function removeDups(list) {
  if (!list || !list.next) return list;

  while (list) { // O(n)
    let curr = list;

    while (curr.next) { // O(n)
      if (curr.next.value === list.value) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }

    list = list.next;
  };
};

var oneNode = new ListNode(1);
var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(4);
list.next.next.next.next.next = new ListNode(5);

console.log(removeDups()); // null 
console.log(removeDups(oneNode)); // 1
console.log(removeDups(list)); // 1 -> 2 -> 3 -> 4 -> 5