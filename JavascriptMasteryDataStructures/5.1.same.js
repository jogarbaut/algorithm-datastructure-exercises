// TYPE - FREQUENCY COUNTER

// Problem: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Step 1 - Restate problem, inputs, outputs, what is output, can outputs be determined, how to label important parts
// Restate the problem - Square each value in an array and see if it's in the other array. If it is, return true. If not, return false.
// Inputs - 2 arrays
// Outputs - true/false
// Type of Output - boolean
// Can output be determines - yes
// How to label important parts - inputs -> arr1, arr2
// Special cases - frequency
// Special cases - all need to be numeric values

// Step 2 - Explore examples
// same([1, 2, 3], [1, 4, 9]) // true
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (frequency must be the same)

// Step 3 - Break down problem
// Step 4 - Simplify and solve

const same = (arr1, arr2) => {
  // Check length of arrays to immediately rule out frequency requirement
  if (arr1.length != arr2.length) {
    return false
  }
  // Set up loop to go through each item
  for (let a of arr1) {
    // Square item and check if squared item in the other array
    let correctIndex = arr2.indexOf(a ** 2)
    if (correctIndex === -1) {
      // Return false if a check is false immediately returning false
      return false
    }
    // Remove item from correct index to decrease length of arr2
    arr2.splice(correctIndex, 1)
  }
  return true
}

// Step 4.5 - Check solution
console.log(same([1, 2, 3], [1, 4, 9])) // true
console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false (frequency must be the same)

// Step 5 - Look back and refactor
// .indexOf on line 30 is a nested loop leading to time complexity of O(N^2) *** AVOID NESTED LOOPS ***

// Refactored Code
// Use 2 separate loops instead of 1 loop nested in the other to achieve linear time complexity
const same_refactored = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    // Check if value is present in the frequencyCounter object
    // If it is, increase it by 1
    // If it is not, create it then then increase it by 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}