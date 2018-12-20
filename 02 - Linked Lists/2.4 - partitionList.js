// Partition a linked list
function ListNode(val) {
  this.value = val;
  this.next = null;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
function partitionList(node, partitionNumber) {
  let beforeStart = null;
  let beforeEnd = null; 
  let afterStart = null;
  let afterEnd = null;

  while (node !== null) {
    const nextNode = node.next;
    node.next = null;

    if (node.value < partitionNumber) {
      // Insert node into the before list
      if (beforeStart === null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      // Insert node into the after list
      if (afterStart === null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
    node = nextNode;
  }

  if (beforeStart === null) return afterStart;

  // Merge the before and after list
  beforeEnd.next = afterStart;

  return beforeStart;
};

var list = new ListNode(1);
list.next = new ListNode(4);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(5);
list.next.next.next.next.next = new ListNode(2);

var printList = node => {
  const list = [];
  while (node) {
    list.push(node.value);
    node = node.next;
  }
  console.log(list);
};

printList(partitionList(list, 3));
// 1 -> 2 -> 2 -> 4 -> 3 -> 5