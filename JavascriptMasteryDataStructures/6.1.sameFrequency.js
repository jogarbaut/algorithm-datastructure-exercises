// A. PATTERN: FREQUENCY COUNTER
// B. PROBLEM: Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Solution must have time complexity of O(N).

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Given two integers, confirm if the integers have the same frequnecy of indivudal integers.
// inputs: two positive integers
// outputs: true/false boolean
// labels: input - num1, num2
// assumptions: all positive
// questions: none
// edge cases: integers with just 1 int

// Step 2. Explore at least 3 examples
// sameFreqency(182, 281) // true
// sameFreqency(34, 14) // false
// sameFreqency(22, 222) // false

// Step 3. Break steps of solution
// Step 4. Simplify and solve
const sameFreqency = (int1, int2) => {
  // confirm strings have same length
  if (int1.toString().length !== int2.toString().length) return false
  // create freq counter object
  const freqCounter1 = {}
  // loop thru first array to get keys and set values to frequency of key
  for (let i of int1.toString()) {
    freqCounter1[i] ? freqCounter1[i] ++ : freqCounter1[i] = 1
  }
  // loop thru second array and confirm if the integer is a key in the freq counter and subtract -1, if not, return false
  for (let j of int2.toString()) {
    if (!freqCounter1[j]) {
      return false
    } else {
      freqCounter1[j] --
    }
  }
  return true
}

// Step 4.5. Test solution
console.log(sameFreqency(182, 281)) // true
console.log(sameFreqency(34, 14)) // false
console.log(sameFreqency(22, 222)) // false

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(1), O(n), O(log n), O(n^2)
// Space Complexity - O(1), O(n), O(log n), O(n^2)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(sameFreqency(22, 222)) // false
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)