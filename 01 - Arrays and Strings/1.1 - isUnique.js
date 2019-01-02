// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// Solution 1: hash table 
function isUnique(string) {
  var count = {};

  for (var i = 0; i < string.length; i++) {
    if (!count[string[i]]) {
      count[string[i]] = 1;
    } else {
      count[string[i]]++;
    }
  };

  for (key in count) {
    return count[key] > 1 ? false : true;
  };
}

// Solution 2: ES6 for-of loop
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

console.log(isUnique('abcde')); // true
console.log(isUnique('aabb')); // false