// A. BUBBLE SORT
// B. PROBLEM: Write a function that sorts an array parameter using bubble sort

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that sorts an array parameter using bubble sort
// inputs: array
// outputs: arry
// labels: arr
// assumptions/questions:
// edge cases:

// Step 2. Explore at least 3 examples
// bubbleSort([37, 45, 29, 81])

// Step 3. Break steps of solution
// Step 4. Simplify and solve

// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
// }

const bubbleSort = (arr) => {
  let noSwaps
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

// Step 4.5. Test solution
console.log(bubbleSort([37, 45, 29, 81])) // [29, 37, 45, 81]
console.log(bubbleSort([8, 4, 5, 6, 7])) // [5, 6, 7, 8]

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)^2
// Space Complexity - O(1)

// Time Analysis.
const timeMySol1 = performance.now()
bubbleSort([37, 45, 29, 81])
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
