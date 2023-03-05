// A. MERGE SORT

// B. Explore at least 3 examples
// insertionSort([37, 45, 29, 81])
// insertionSort([2, 1, 9, 65, 4])
// insertionSort([-1, 4, 4, 5, 0])

// Step C. Break steps of solution
// Step D. Simplify and solve
const merge = (arr1, arr2) => {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length){
    results.push(arr2[j])
    j++
  } 
  return results
}

const mergeSort = (arr) => {
  // use recursion
  // identify base case
  if (arr.length <= 1) return arr
  // split array into halves 
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  // after reaching base case, merge the arrays
  return merge(left, right)
}

// Step E. Test solution
console.log(mergeSort([1, 10, 20, 25, 99, 83, 9, 1, 2, 3, 30]))

// Step F. Analysis
// Time Complexity - O(n log n)
// Space Complexity - O(n)

// Time Analysis.
const timeMySol1 = performance.now()
mergeSort([1, 10, 20, 25, 1, 2, 3, 30])
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
