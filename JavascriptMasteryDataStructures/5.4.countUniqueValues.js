// A. PATTERN: MULTIPLE POINTERS
// B. PROBLEM: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Iterate through a sorted array and track the number of unique values
// inputs: 1 array of ints
// outputs: count (int)
// assumptions: 
// questions: 
// edge cases: if arr length is 0, return 0; if arr length is 1, return 1

// Step 2. Explore at least 3 examples
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues([1, 2, 2, 3])) // 3
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-1, 0, 1])) // 3

// Step 3. Break steps of solution
// Step 4. Simplify and solve

// TYPE CODE HERE
const countUniqueValues = (arr) => {
  // initialize count of unique values
  let count = 0
  if (arr.length === 0) return count
  if (arr.length === 1) {
    count += 1
    return count
  }
  // initiate pointers
  count ++
  let left = 0, right = 1
  // set up loop to iterate through array
  while (right <= arr.length - 1) {
    if (arr[left] !== arr[right]) {
      // add to count of unique values if pointer1 != pointer2
      count ++
      left = right
      right++
    } else {
      right ++
    }
  }
  return count
}

// Step 4.5. Test solution
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 2, 3])) // 3
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-1, 0, 1])) // 3

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus. Comparing my solution to instructors

// my solution
const timeMySol1 = performance.now()
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)

// instruction solution
const countUniqueValues_Ins = (arr) => {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i ++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
const timeInsSol1 = performance.now()
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
const timeInsSol2 = performance.now()
console.log(`---Time Elapsed for instructor solution: ${(timeInsSol2 - timeInsSol1) / 1000} secs---`)