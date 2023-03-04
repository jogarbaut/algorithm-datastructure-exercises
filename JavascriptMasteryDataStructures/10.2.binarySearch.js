// A. PATTERN: BINARY SEARCH
// B. PROBLEM: Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that returns index of val using binary search (left, right, middle pointer)
// inputs: arr, val
// outputs: index number (int)
// labels: arr, val
// assumptions/questions: if does not exist, return -1
// edge cases: must check if left/right indexes equal val, even num of elem we will round down index

// Step 2. Explore at least 3 examples
// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

// Step 3. Break steps of solution
// Step 4. Simplify and solve

const binarySearch = (arr, val) => {
  // if empty arr, return -1
  if (arr.length === 0) return -1
  // set up pointers
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2) // round down if even num of elem
  // iterate thru loop and increase left pointer or decrease right on comparison of val and middle val
  while (arr[middle] !== val && start <= end) {
    if (arr[middle] < val) start = middle + 1
    else end = middle - 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === val ? middle : -1
}

// Step 4.5. Test solution
console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
) // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
) // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
) // -1

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
binarySearch([1, 2, 3, 4, 5], 5) // 4
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
