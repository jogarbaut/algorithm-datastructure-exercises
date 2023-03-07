// A. PATTERN: RECURSION
// B. PROBLEM: Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that returns the product of an array parameter
// inputs: int []
// outputs: int
// labels: arr
// assumptions/questions: 
// edge cases: empty array will return null

// Step 2. Explore at least 3 examples
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const productOfArray = (arr) => {
  // base case
  if (arr.length === 0) return 1 
  // call productOfArray until base case is reached
  return arr[0] * productOfArray(arr.slice(1))
}

// Step 4.5. Test solution
console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(productOfArray([1,2,3,10])) // 60
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)