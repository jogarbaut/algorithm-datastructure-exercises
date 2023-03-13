class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size
  }
  // Push - add a value to the top of the stack
  push(val) {
    // function should accept a value
    // create a new node with that value
    let newNode = new Node(val)
    // if no nodes in stack, set first and last property to be newly created node
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      // if at least one node, create a variable that stores the current first property on the stack
      let temp = this.first
      // reset first propety to be newly created node
      this.first = newNode
      // set next property on node to be previously created variable
      this.first.next = temp
    }
    // increment size of stack by 1
    return ++this.size
  }
  // Pop - remove a value from the top of the stack
  pop() {
    // if no nodes in stack, return null
    if (!this.first) return null
    // create a temp variable to store the first propety on the stack
    let temp = this.first
    // if there is only 1 node, set the first and last property to be null
    if (this.first === this.last) {
      this.last = null
    }
    // if there is more than 1 node, set the first property to be the next property on the current first
    this.first = this.first.next
    // decrement size
    this.size--
    // return value of removed node
    return temp.value
  }
}