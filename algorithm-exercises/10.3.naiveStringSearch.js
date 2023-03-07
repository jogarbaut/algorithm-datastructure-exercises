// A. PATTERN: NAIVE STRING SEARCH
// B. PROBLEM: Write a function that accepts two str and checks if the second str is present in the first str

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that accepts two str and checks if the second str is present in the first str
// inputs: str
// outputs: count (int)
// labels: longStr, shortStr
// assumptions/questions: 
// edge cases: 

// Step 2. Explore at least 3 examples
// naiveStringSearch("lorie loled", "lol") //

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const naiveStringSearch = (longStr, shortStr) => {
  let count = 0
  // loop over long str
  for (let i = 0; i < longStr.length; i++ ) {
    for (let j = 0; j < shortStr.length; j++) {
       // if a match is not found, break out of inner str
      if (shortStr[j] !== longStr[i+j]) break
      if (j === shortStr.length - 1) {
        count++
      }
    }
  }
  return count
}

// Step 4.5. Test solution
console.log(naiveStringSearch("lorie loled", "lol")) //

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
naiveStringSearch("lorie loled", "lol") //
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
