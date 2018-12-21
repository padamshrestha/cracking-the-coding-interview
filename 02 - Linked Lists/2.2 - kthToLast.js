// Implement an algorithm to find the kth to last element of a singly linked list.
function ListNode(val) {
  this.value = val;
  this.next = null;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
function kthToLast(list, k) {
  if (!list) return null;

  let head = list; 
  let tail = list;

  for (let i = 0; i < k; i++) {
    head = head.next;
  }

  while (head.next) {
    head = head.next;
    tail = tail.next;
  }

  return tail.value;
}; 

var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);
list.next.next.next.next.next = new ListNode(6);

console.log(kthToLast(list, 5)); 