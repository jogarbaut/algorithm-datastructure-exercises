// A. SELECTION SORT
// B. PROBLEM: Write a function that sorts an array parameter using selection sort

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Write a function that sorts an array parameter using selection sort
// inputs: array
// outputs: array
// labels: arr
// assumptions/questions:
// edge cases:

// Step 2. Explore at least 3 examples
// selectionSort([37, 45, 29, 81])

// Step 3. Break steps of solution
// Step 4. Simplify and solve
const selectionSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  for (let i = 0; i < arr.length; i++) {
    // store first element as smallest value we have seen
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      // compare lowest value to next value in the array until a smaller value is found
      if (arr[j] < arr[lowest]) {
        // if a smaller value is found, designate the smaller value to be the new lowest and continue until the end of the array
        lowest = j
      }
    }
    // if lowest is not the value (index) initially began with, swap the two values and repeat until array is sorted
    if (i !== lowest) swap(arr, i, lowest)
  }
  return arr
}

// Step 4.5. Test solution
console.log(selectionSort([37, 45, 29, 81])) // [29, 37, 45, 81]
console.log(selectionSort([8, 4, 5, 6, 7])) // [5, 6, 7, 8]

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)^2
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
selectionSort([8, 4, 5, 6, 7])
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
