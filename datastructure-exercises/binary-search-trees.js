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
    if(this.root === null) {
      // if no root, root becomes the new node
      this.root = newNode
      return this
    } else {
      let current = this.root
      while(true) {
        if(value === current.value) return undefined
        if(value < current.value) {
          // if there is a root, check if the value of the new node is greater than or less than the value of the root
          if(current.left === null) {
            // if there is no node, add the node as left property
            current.left = newNode
            return this
          } else {
            // if the new node has a value that is less, move that node and repeat steps
            current = current.left
          }
        } else if(value > current.value) {
          // if it is greater, check to see if there is a node to the right
          if(current.right === null) {
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
    if(this.root === null) return false
    // if there is a root, check if the value of the new node is the value we are looking for
    let current = this.root
    let found = false
    while(current && !found) {
      // if not, check to see if the value is greater than or less than the value of the root
      if(value < current.value) {
        // if less, check to see if there is a node to the left
        // if there is a node, move to that node and repeat steps
        current = current.left
        // if no node, search is complete
      } else if(value > current.value) {
        // if greater, check if there isa  ndoe to the right
        // if there is a node, move to that node and repeat steps
        current = current.right
        // if no node, search is complete
      } else {
        found = true
      }
      if(!found) return undefined
      return current
    }
  }
}