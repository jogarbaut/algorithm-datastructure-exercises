// Binary heap
// similar to binary search tree but with some different rules

// MaxBinaryHeap - parent nodes are always larger than child nodes
// each parent node can only have 2 children
// parent node must always be greater than child nodes
// each child must be smaller than the parent
// binary heap is as compact as possible, all children of each node are as full as they can be and left children are filled out first
// no implied order between siblings

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  // insert
  // push value into the values property on the heap
  // bubble the value up to its correct spot
  // create a variable called index whcih is the length of the values property - 1
  // create a variable called parentIndex which is the floor of (index - 1)/2
  // keep looping as long as the values element at the parentIndex is less than the values element at the child index
  // swap the values of the values element at the parentIndex with the value of the element property at the child index
  // set the index to be the parentIndex and start over
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  // removing (also called extractMax)
  // swap the first value in the values property with the last one
  // pop from the values property, so you can return the value at the end
  // have the new root "sink down" to the correct spot
  // your parent index starts at the 0 (the root)
  // find the index of the left child: 2 * index + 1 (make sure its not our of bounds)
  // find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  // if the left or right child is greater than the element... swap. If both left and right children are larger, swap with the largest child
  // the child index you swapped now becomes the new parent index
  // keep looping and swapping until neither child is larger than the element
  // return the old root
  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if(this.values.length > 0){
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(25)
heap.insert(1)
heap.insert(0)
heap.insert(20)
heap.insert(70)
heap.insert(81)
heap.insert(81)
console.log(heap)
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())

// MinBinaryHeap - parent nodes are always smaller than child nodes
// each node can only have 2 children
// parent node must always be smaller than child nodes
// each child must be greater than the parent
// binary heap is as compact as possible, all children of each node are as full as they can be and left children are filled out first
// no implied order between siblings
