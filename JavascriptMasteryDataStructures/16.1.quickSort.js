// A. QUICK SORT

// B. Explore at least 3 examples
// insertionSort([37, 45, 29, 81])
// insertionSort([2, 1, 9, 65, 4])
// insertionSort([-1, 4, 4, 5, 0])

// Step C. Break steps of solution
// Step D. Simplify and solve
// pivot helper
const pivot = (arr, start = 0, end = arr.length + 1) => {
  // swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

const quickSort  = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    // left subarray
    quickSort(arr, left, pivotIdx - 1)
    // right subarray
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}

// Step E. Test solution
console.log(quickSort([1, 10, 20, 25, 99, 83, 9, 1, 2, 3, 30]))

// Step F. Analysis
// Time Complexity - O(n log n)
// Space Complexity - O(logn)

// Time Analysis.
const timeMySol1 = performance.now()
quickSort([1, 10, 20, 25, 1, 2, 3, 30])
const timeMySol2 = performance.now()
console.log(
  `---Time Elapsed for solution: ${(timeMySol2 - timeMySol1) / 1000} secs---`
)
