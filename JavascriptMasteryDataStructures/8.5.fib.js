// A. PATTERN: RECURSION
// B. PROBLEM: Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that returns nth number in Fibonacci sequence upt the parameter
// inputs: int
// outputs: int
// labels: n
// assumptions/questions: positive parameter
// edge cases: 0 returns 0

// Step 2. Explore at least 3 examples
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const fib = (n) => {
  // base case
  if (n <= 2) return 1
  // call fib until base case is reached
  return fib(n-1) + fib(n-2)
}

// Step 4.5. Test solution
console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(fib(35)) // 9227465
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)