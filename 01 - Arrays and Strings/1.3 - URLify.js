// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold 
// the adiditional characters, and that you are given the 'true' length of the string.

// Example: 
// Input: "Mr John Smith   ", 13
// Output: "Mr%20John%20Smith"

// Note: your solution should handle trailing spaces

// Solution 1: Regex 
// Time: O(n)
// Space: O(1)
const URLify = (str, strLength) => {
  return str.trim().replace(/\s/g, "%20");
};

// Solution 2: for loop
// Time: O(n)
// Space: O(n)
const URLify = (str, strLength) => {
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') arr[i] = '%20';
  }
  return arr.join('');
};

console.log(URLify("Mr John Smith   ", 13)); // "Mr%20John%20Smith"
console.log(URLify("We are such stuff as dreams are made on, and our little life is rounded with a sleep.", 85));
// "We%20are%20such%20stuff%20as%20dreams%20are%20made%20on,%20and%20our%20little%20life%20is%20rounded%20with%20a%20sleep."