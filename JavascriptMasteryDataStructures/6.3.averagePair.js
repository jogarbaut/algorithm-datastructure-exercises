// A. PATTERN: MULTIPLE POINTERS
// B. PROBLEM: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. Time: O(N); Space: O(1)

// ---
// STEP 1. Restate Problem, define inputs and types, define outputs and types, define labels, state assumptions, note questions, note edge cases
// restate problem: Given sorted array of integers, see if there is a pair where the average of the 2 numbers is the target average
// inputs: array of ints and a target average
// outputs: true/false boolean
// labels: arr, targetAvg
// assumptions/questions: targetAvg can be a float
// edge cases: if given empty array, return false

// Step 2. Explore at least 3 examples
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// Step 3. Break steps of solution
// Step 4. Simplify and solve
const averagePair = (arr, targetAvg) => {
  if (arr.length === 0 ) return false
  // intiialize 2 pointers
  let leftIndex = 0
  let rightIndex = arr.length -1
  // set up while loop to allow pointers to iterate
  while (leftIndex < rightIndex) {
    let avg = (arr[leftIndex] + arr[rightIndex]) / 2

    if (avg > targetAvg) {
      // if avg is too large, subtract rightIndex
      rightIndex --
    } else if (avg < targetAvg) {
      // if avg is too small, incrase leftIndex
      leftIndex ++
    } else {
      return true
    }
  }
  return false
}

// Step 4.5. Test solution
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false

// Step 5. Look back and refactor
// *** AVOID NESTED LOOPS ***

// Step 6. Analysis
// Time Complexity - O(n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
const timeMySol2 = performance.now()
console.log(`---Time Elapsed for my solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`)