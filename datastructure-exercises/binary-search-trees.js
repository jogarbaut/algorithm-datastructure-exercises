// Time and Space complexitiy 
// Time complexity is the same for BFS and DFS because each node is visited
// Space complexitiy of depth first search will be smaller for wide trees because there are less nodes to keep track of (breadth first would take up more space)

// Big O of BST
// Insertion - O(log n)
// Searching - O(log n)
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // insert - inserting a value to the BST
  insert(value) {
    // create a new node
    let newNode = new Node(value)
    // starting at root
    // check if there is a root
    if (this.root === null) {
      // if no root, root becomes the new node
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return undefined
        if (value < current.value) {
          // if there is a root, check if the value of the new node is greater than or less than the value of the root
          if (current.left === null) {
            // if there is no node, add the node as left property
            current.left = newNode
            return this
          } else {
            // if the new node has a value that is less, move that node and repeat steps
            current = current.left
          }
        } else if (value > current.value) {
          // if it is greater, check to see if there is a node to the right
          if (current.right === null) {
            // if there is no node, add the node as right property
            current.right = newNode
            return this
          } else {
            // if it is greater, check to see if there is a node to the right
            current = current.right
          }
        }
      }
    }
  }
  // find - inserting a value into the BST (iterative or recursively)
  find(value) {
    // start at the root
    // check if there is a root, if not, search is complete
    if (this.root === null) return false
    // if there is a root, check if the value of the new node is the value we are looking for
    let current = this.root
    let found = false
    while (current && !found) {
      // if not, check to see if the value is greater than or less than the value of the root
      if (value < current.value) {
        // if less, check to see if there is a node to the left
        // if there is a node, move to that node and repeat steps
        current = current.left
        // if no node, search is complete
      } else if (value > current.value) {
        // if greater, check if there isa  ndoe to the right
        // if there is a node, move to that node and repeat steps
        current = current.right
        // if no node, search is complete
      } else {
        found = true
      }
      if (!found) return undefined
      return current
    }
  }
  // Breadth first search (bfs) - fifo
  bfs() {
    // create a queue (this can be an array) and a variable to store the values of nodes visited
    let node = this.root
    let data = []
    let queue = []
    // place the root node in the queue
    queue.push(node)
    // loop as long as there is anything in the queue
    while (queue.length) {
      // dequeue a node from the queue and push the value of the node into the variable that stores the node
      node = queue.shift() // remove first element
      data.push(node)
      // if there is a left property on the node dequeued - add it to the queue and push the value of the node into the variable that stores the nodes
      if (node.left) queue.push(node.left) // keeps while loop condition true if statement is satisfied
      // if there is a right property on the node dequeued - add it to the queue and push the value of the node into the variable that stores the nodes
      if (node.right) queue.push(node.right) // keeps while loop condition true if statement is satisfied
    }
    // return the variable that stores the values
    return data
  }
  // Depth first search (dfs)
  // DFS - PreOrder (recursively)
  // can be used to "export" a tree structure so that it is easily reconstructed or copied
  DFSPreOrder(){
    // create a variable to stroe values of nodes visited
    let data = [] // order of visiting nodes
    // store root of BST in a variable called current
    let current = this.root
    // write helper function which accepts a node
    const traverse = (node) => {
      // push value of node to the variable that stores the values
      data.push(node)
      // if node has a left property, call the helper function with the left property on the node
      if(node.left) traverse(node.left)
      // if node has a right property, call the helper function with the right property on the node
      if(node.right) traverse(node.right)
    }
    // invoke helper function with the current variable
    traverse(current)
    // return the array of values
    return data
  }
  // Depth first search (dfs)
  // DFS - PostOrder (recursively)
  DFSPostOrder(){
    // create a variable to store the values of nodes visited
    let data = []
    // store the root of the BST in a variable called current
    let current = this.root
    // write a helper function which accepts a node
    const traverse = (node) => {
      // if node has a left property, call the helper function with the left property on the node
      if(node.left) traverse(node.left)
      // if node has a right property, call the helper function with the right property on the node
      if(node.right) traverse(node.right)
      // push the value of the node to the variable that stores the values
      data.push(node)
    }
    // invoke the helper function with the current variable
    traverse(current)
    // return the array of values
    return data
  }
  // Depth first search (dfs)
  // DFS - InOrder (recursively)
  DFSInOrder(){
    // create a variable to store the values of nodes visited
    let data = []
    // store the root of the BST in a variable called current
    let current = this.root
    // write a helper function which accepts a node
    const traverse = (node) => {
      // if node has a left property, call the helper function with the left property on the node
      if(node.left) traverse(node.left)
      // push the value of the node to the variable that stores the values
      data.push(node)
      // if node has a right property, call the helper function with the right property on the node
      if(node.right) traverse(node.right)
    }
    // invoke the helper function with the current variable
    traverse(current)
    // return the array of values
    return data
  }
}
