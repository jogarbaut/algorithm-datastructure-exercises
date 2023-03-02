// A. PATTERN: MULTIPLE POINTERS
// B. PROBLEM: Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Given two strings, check if 2 letters in sequence of one string are present in the other string
// inputs: two strings
// outputs: true/false boolean
// labels: str1, str2
// assumptions/questions: order matters, just 2 letters in sequence matter
// edge cases: if one string is only 1 letter, return false

// Step 2. Explore at least 3 examples
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Step 3. Break steps of solution
// Step 4. Simplify and solve
const isSubsequence = (str1, str2) => {
  // set up pointers
  var i = 0;
  var j = 0;
  // if there is no str1, return true 
  if (!str1) return true;
  // iterate thru str2 and see if two sequencial chars are present in str1
  while (j < str2.length) {
    // if char of str2 is present in str1, go to next index of i
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true
    // iterate thru str2
    j++;
  }
  // if unable to go through entire str1, return false
  return false;
}

// Step 4.5. Test solution
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(isSubsequence('abc', 'abracadabra')); // true
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)