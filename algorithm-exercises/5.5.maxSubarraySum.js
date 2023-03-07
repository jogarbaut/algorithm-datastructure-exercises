// A. PATTERN: SLIDING WINDOW
// B. PROBLEM: Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Based on 'n', find the max sums of 'n' consecutive numbers in the array
// inputs: 1 array of ints, number 'n'
// outputs: max sum of 'n' consecutive numbers (type: int)
// labels: maxSum, tempSum
// assumptions: the array is not empty, if it is, return null
// questions: Are there array values that are not ints? Will 'n' always be provided?
// edge cases: empty array

// Step 2. Explore at least 3 examples
// console.log(maxSubarraySum([1, 2, 3], 2)) // 5
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum([], 1)) // null

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const maxSubarraySum = (arr, n) => {
  let maxSum = 0, tempSum = 0
  if (arr.length < n) return null
  // initiate maxSum as first 'n' numbers
  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }
  // set tempSum to maxSum to compare as the array is iterated
  tempSum = maxSum
  for (let i = n; i < arr.length; i++) {
    // iterate through array and remove previous first index val and add next index val to the array
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// Step 4.5. Test solution
console.log(maxSubarraySum([1, 2, 3], 2)) // 5
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([], 1)) // null

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)