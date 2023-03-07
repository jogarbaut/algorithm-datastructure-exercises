// A. PATTERN: RECURSION
// B. PROBLEM: Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that returns the sum of 0 to the paramter
// inputs: int
// outputs: int
// labels: num
// assumptions/questions: positive parameter
// edge cases: 0 returns 0

// Step 2. Explore at least 3 examples
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const recursiveRange = (num) => {
  // base case
  if (num === 0) return 0
  // call recursiveRange until base case is reached
  return num + recursiveRange(num - 1)
}

// Step 4.5. Test solution
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(recursiveRange(10)) // 55 
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)