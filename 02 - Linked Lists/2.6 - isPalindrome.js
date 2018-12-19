// Determine if a linked list is a palindrome.
function ListNode(val) {
  this.value = val;
  this.next = null;
};

// Naive solution: push values to an array, then compare 
// function isPalindrome(list) {
//   if (!list) return false;
//   let values = [];
//   let p = list;

//   while (p) {
//     values.unshift(p.value);
//     p = p.next;
//   }

//   return values.join('') === values.reverse().join('');
// };

// Solution 1: create a reversed list, them compare
function reverseList(List) {
  let node = List;
  let previous; 
  let temp;
  
  while (node) {
    temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  };

  return previous;
};

function isEqual(ListOne, ListTwo) {
  while (ListOne && ListTwo) {
    if (ListOne.value !== ListTwo.value) {
      return false;
    }
    ListOne = ListOne.next;
    ListTwo = ListTwo.next;
  }

  return ListOne == null && ListTwo == null;
};

var oneNode = new ListNode(1);
var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

// console.log(isPalindrome()); // false
// console.log(isPalindrome(oneNode)); // true
// console.log(isPalindrome(list)); // true
// console.log(reverseList(list));
console.log(isEqual(list, oneNode)); // false
console.log(isEqual(list, list)); // true