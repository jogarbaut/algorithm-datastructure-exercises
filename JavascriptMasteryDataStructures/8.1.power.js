// A. PATTERN: RECURSION
// B. PROBLEM: Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Create a formula that returns the first parameter raised to the exponent given by the second parameter
// inputs: base (int), exponent (int)
// outputs: int
// labels: base, exponent
// assumptions/questions: bases and exponents are non-negative
// edge cases: anything raised to power of 0 is 1

// Step 2. Explore at least 3 examples
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16 => 2 * 2 * 2 * 2

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const power = (base, exp) => {
  // base case
  if (exp === 0) return 1
  // call power until base case is reached
  return base * power(base, exp - 1)
}

// Step 4.5. Test solution
console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(power(2,2)) // 4
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)