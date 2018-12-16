// Remove duplicates from an unsorted linked list.
function ListNode(val) {
  this.value = val;
  this.next = null;
};

function removeDups(list) {
  if (!list || !list.next) return list;
  let set = new Set();

  set.add(list.value);

  while (list.next) {
    if (set.has(list.next.value)) {
      list.next = list.next.next;
    } else {
      set.add(list.next.value);
      list = list.next;
    }
  }
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