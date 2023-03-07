// A. RADIX SORT

// B. Explore at least 3 examples
// radixSort([1, 10, 20, 25, 99, 83, 9, 1, 2, 3, 30])
// radixSort([83, 83, 1, 2, 3, 30])
// radixSort([1, 5, 1, 2, 3, 30])

// Step C. Break steps of solution
// Step D. Simplify and solve

// Helper #1
// getDigit helper to get a digit at a specific value
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// Helper #2
// digitCount helper which returns how many digits are in a number
const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// Helper #3
// mostDigits to return the number of digits in the largest numbers in the list
const mostDigits = (nums) => {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

// Radix Sort
const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    // create buckets for each digit (0 to 9)
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

// Step E. Test solution
console.log(radixSort([1, 10, 20, 25, 99, 83, 9, 1, 2, 3, 30]))
console.log(radixSort([83, 83, 1, 2, 3, 30]))
console.log(radixSort([1, 5, 1, 2, 3, 30]))

// Step F. Analysis
// Time Complexity - O(nk) where n is the length of the k is the length of digits(average)
// Space Complexity - O(n + k)

// Time Analysis.
const timeMySol1 = performance.now()
radixSort([1, 10, 20, 25, 1, 2, 3, 30])
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
