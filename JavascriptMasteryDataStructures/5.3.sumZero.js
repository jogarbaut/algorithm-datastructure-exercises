// A. PATTERN: MULTIPLE POINTERS
// B. PROBLEM: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// Since array is sorted, set up 2 pointers (one at beginning and one at end of array), and check if the sum equals 0
// inputs - 1 array of integers
// output - array of 2 int or undefined
// labels - arr1 for input
// assumptions - all integers
// questions - 
// edge cases - receive an array of just 1 integer

// Step 2. Explore at least 3 examples
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const sumZero = (arr) => {
  // initialize 2 pointer indexes
  let leftPointerIndex = 0
  let rightPointerIndex = arr.length - 1
  // set up while loop to allow pointer indexes to iterate
  while (leftPointerIndex < rightPointerIndex) {
    // check if sum of the 2 pointer values = 0
    let sum = arr[leftPointerIndex] + arr[rightPointerIndex]
    if (sum === 0) {
      return [arr[leftPointerIndex], arr[rightPointerIndex]]
    } else if (sum > 0) {
      // if sum is too large, the larger value must decrease
      rightPointerIndex --
    } else {
    // if sum is too small, the smaller value must increase
      leftPointerIndex ++
    }
  }
}

// Step 4.5. Test solution
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(N)
// Space Complexity - O(1)