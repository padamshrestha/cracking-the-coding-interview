// Given two strings, write a method to decide if one is a permutation of the other.

// Solution 1: hash table (two words with the same character counts)
// Time: O(n)
// Space: O(n)
const checkPermutation = (str1, str2) => {
  if (!str1 || !str2 || str1.length !== str2.length) return false;

  let hashTable = {};

  for (let i = 0; i < str1.length; i++) {
    hashTable[str1[i]] = hashTable[str1[i]] + 1 || 1;
  }

  let counter = Object.keys(hashTable).length;

  for (let i = 0; i < str2.length; i++) {
    if (hashTable[str2[i]]) hashTable[str2[i]]--;
    if (hashTable[str2[i]] === 0) counter--;
  }

  return counter === 0;
};

// Solution 2: Sort the strings by characters (two words with the same characters in different orders)
// Time: O(nlogn)
// Space: O(n)
const sortStr = (str) => {
  return [...str].sort().join('');
};

const checkPermutation = (str1, str2) => {
  if (!str1 || !str2 || str1.length !== str2.length) return false;
  return sortStr(str1) === sortStr(str2);
};

// Test cases:
// Note that our function is case sensitive and whitespace sensitive
console.log(checkPermutation('', '')); // false
console.log(checkPermutation('aaa', '')); // false
console.log(checkPermutation('', 'aaa')); // false
console.log(checkPermutation('abc', 'abcdefg')); // false
console.log(checkPermutation('edf', 'abc')); // false
console.log(checkPermutation('aaa', 'aaa')); // true
console.log(checkPermutation('abc', 'cba')); // true
console.log(checkPermutation('ab  ', '  ba')); // true
console.log(checkPermutation('DOG', 'dog')); // false