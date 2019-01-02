// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// Solution 1: hash table
// Time: O(n)
// Space: O(n)
const isUnique = function(string) {
  var count = {};

  for (var i = 0; i < string.length; i++) {
    if (!count[string[i]]) {
      count[string[i]] = 1;
    } else {
      count[string[i]]++;
    }
  }

  for (key in count) {
    return count[key] > 1 ? false : true;
  }
};

// Solution 2: ES6 for-of loop
// Time: O(n)
// Space: O(n)
const isUnique = (str) => {
  let hashTable = {}

  for (let char of str) {
    if (hashTable.hasOwnProperty(char)) {
      return false;
    } else {
      hashTable[char] = 1;
    }
  }
  return true;
};

// Solution 3: No additional data structure
// Time: O(n2)
// Space: O(1)
const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

// Solution 4: Sort characters
// Time: O(nlogn)
// Space: O(1)
const isUnique = (str) => {
  let strArr = [...str].sort();

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) return false;
  }

  return true;
};

// Test cases:
console.log(isUnique('')); // true
console.log(isUnique('abcde')); // true
console.log(isUnique('aabb')); // false
console.log(isUnique('gfedcba')); // true
console.log(isUnique('02342935829031')); // false
console.log(isUnique('@45327364asdjnaweioqwj+-=])?}')); // false