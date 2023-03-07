// A. PATTERN: RECURSION
// B. PROBLEM: Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that returns a str parameter in reverse
// inputs: str
// outputs: str
// labels: str
// assumptions/questions: 
// edge cases: 

// Step 2. Explore at least 3 examples
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const reverse = (str) => {
  // base case of reaching last letter in str
  if (str.length <= 1) return str[0]
  // call reverse until base case is reached
  return reverse(str.slice(1)) + str[0]
}

// Step 4.5. Test solution
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(reverse('rithmschool')) // 'loohcsmhtir'
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)