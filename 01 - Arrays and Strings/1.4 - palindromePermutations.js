// Given a string, write a function to check if it is a permutation of a palindrome.

// Example: 
// Input: Tact Coa 
// Output: True (permutations: "Taco cat", "atco cta", etc).

const isPalindromePermutation = (str) => {
  str = str.toLowerCase().replace(/[^\w]/g, ''); // filter out everything but characters

  let hashTable = {};
  let isOdd = false;
  
  [...str].forEach((char, idx, arr) => {
    hashTable[char] = hashTable[char] + 1 || 1;
  })

  for (let char in hashTable) {
    // At most one character (the middle character) can have an odd count
    if (isOdd === true) {
    if (hashTable[char] % 2 !== 0) { 
        return false;
      }
      isOdd = true;
    }
  }

  return true;
};

console.log(isPalindromePermutation("Tact Coa")); // true
console.log(isPalindromePermutation("tattarrattat"));  // true
console.log(isPalindromePermutation("Madam, I'm Adam")); // true
console.log(isPalindromePermutation("Red rum, sir, is murder")); // true
console.log(isPalindromePermutation("No lemon, no melon")); // true
console.log(isPalindromePermutation("&H*a^n%$n#a@h+~!?><:")); // true
console.log(isPalindromePermutation("Pat pat pat")); // false