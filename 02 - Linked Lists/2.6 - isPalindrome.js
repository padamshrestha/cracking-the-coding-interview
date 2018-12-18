// Determine if a linked list is a palindrome.
function ListNode(val) {
  this.value = val;
  this.next = null;
};

// Naive solution: 
function isPalindrome(list) {
  if (!list) return false;
  let values = [];
  let p = list;

  while (p) {
    values.unshift(p.value);
    p = p.next;
  }

  return values.join('') === values.reverse().join('');
};

var oneNode = new ListNode(1);
var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

console.log(isPalindrome()); // false
console.log(isPalindrome(oneNode)); // true
console.log(isPalindrome(list)); // true