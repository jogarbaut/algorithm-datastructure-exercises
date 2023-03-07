// A. PATTERN: FREQUENCY COUNTER/MULTIPLE POINTERS
// B. PROBLEM: Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Given variable number of arguments, check if there are duplicates
// inputs: variables
// outputs: true/false boolean
// labels: arg
// assumptions/questions: arguments of the same type?
// edge cases: if argument length is just one, then automatically false

// Step 2. Explore at least 3 examples
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Step 3. Break steps of solution
// Step 4. Simplify and solve
const areThereDuplicates = (...args) => {
  // if number of arguments is 0 or 1, then return false
  if (args.length === 0 || args.length === 1) return false
  // set up frequency counter object
  const freqCounter = {}
  // if existing key is found, return true
  for (let i = 0; i < args.length; i++) {
    if (freqCounter[args[i]]) {
      return true
    } else {
      freqCounter[args[i]] = 1
    }
  }
  return false
}

// Step 4.5. Test solution
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)