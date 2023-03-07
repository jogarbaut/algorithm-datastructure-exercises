// A. INSERTION SORT
// B. PROBLEM: Write a function that sorts an array parameter using insertion sort

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that sorts an array parameter using insertion sort
// inputs: array
// outputs: array
// labels: arr
// assumptions/questions:
// edge cases:

// Step 2. Explore at least 3 examples
// insertionSort([37, 45, 29, 81])
// insertionSort([2, 1, 9, 65, 4])
// insertionSort([-1, 4, 4, 5, 0])

// Step 3. Break steps of solution
// Step 4. Simplify and solve
const insertionSort = (arr) => {
  // start with second element
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    // while currentVal is greater than value to left, swap
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

// Step 4.5. Test solution
console.log(insertionSort([37, 45, 29, 81])) // [29, 37, 45, 81]
console.log(insertionSort([8, 4, 5, 6, 7])) // [5, 6, 7, 8]

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)^2
// Space Complexity - O(1)

// Time Analysis.
const timeMySol1 = performance.now()
insertionSort([8, 4, 5, 6, 7])
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
