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
  // Check if string only contains spaces; else, trim the trailing space
  return !str.replace(/\s/g, '').length ? str.replace(/\s/g, "%20") : str.trim().replace(/\s/g, "%20");
};

console.log(URLify(" ", 1)); // "%20"
console.log(URLify("Mr John Smith   ", 13)); // "Mr%20John%20Smith"
console.log(URLify("We are such stuff as dreams are made on, and our little life is rounded with a sleep.", 85));