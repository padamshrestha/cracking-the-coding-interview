// Determine if a linked list is a palindrome.
function ListNode(val) {
  this.value = val;
  this.next = null;
};

// Naive solution: push values to an array, then compare 
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

// Solution 1: create a reversed list, then compare

// Note: this method is O(n) time complexity, O(n) space complexity
function reverseAndCopyList(node) {
  let previous = null;

  while (node) {
    var copy = new ListNode(node.value);
    copy.next = previous;
    previous = copy;
    node = node.next;
  };

  return copy;
};

function isEqual(one, two) {
  while (one !== null && two !== null) {
    if (one.value !== two.value) {
      return false;
    } 
    one = one.next;
    two = two.next;
  }

  return one === null && two === null;
};

function isPalindrome(LinkedList) {
  if (!LinkedList) return false;
  let reversedList = reverseAndCopyList(LinkedList);
  return isEqual(LinkedList, reversedList);
};

var oneNode = new ListNode(1);

var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

console.log(isEqual(list, oneNode)); // false
console.log(isEqual(list, list)); // true
console.log(isPalindrome()); // false
console.log(isPalindrome(oneNode)); // true
console.log(isPalindrome(oneNode)); // true
console.log(isPalindrome(list)); // true