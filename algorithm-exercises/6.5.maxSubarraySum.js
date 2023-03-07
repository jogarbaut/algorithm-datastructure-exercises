// A. PATTERN: SLIDING WINDOW
// B. PROBLEM: Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Given an array, find the max sum of 'n' consecutive elements
// inputs: int[], len
// outputs: int
// labels: arr, len
// assumptions/questions: must be connecutive items in an array, empty array returns null
// edge cases: empty array will returns null and len larger than array length returns null

// Step 2. Explore at least 3 examples
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

// Step 3. Break steps of solution
// Step 4. Simplify and solve
const maxSubarraySum = (arr, len) => {
  // check if arr length is less than len, return null
  if (arr.length < len) return null
  // intiate max = 0
  let total = 0
  // iterate thru first len elements of array to set max 
  for (let i = 0; i < len; i++) {
    total += arr[i]
  }
  // iterate thru array subtracting first element and adding next
  let currentTotal = total
  for (let i = len; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - len]
    total = Math.max(total, currentTotal)
  }
  return total
}

// Step 4.5. Test solution
console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)