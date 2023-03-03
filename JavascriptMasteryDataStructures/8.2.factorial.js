// A. PATTERN: RECURSION
// B. PROBLEM: Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Create a formula that returns the first parameter raised to the exponent given by the second parameter
// inputs: num (int)
// outputs: int
// labels: num
// assumptions/questions: parameter is non-negative
// edge cases: factorial 0 equals 1

// Step 2. Explore at least 3 examples
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const factorial = (num) => {
  // base case
  if (num === 0) return 1
  // call num until base case is reached
  return num * factorial(num - 1)
}

// Step 4.5. Test solution
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(factorial(7)) // 5040
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)