class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// SinglyLinkedList is a data structure that contains a head, tail, and length property
// Linked lists consist of nodes and each node has a value and a pointer to another node or null
class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // Create push function which accepts a value
  push(val) {
    // Create a new node using the value passed to the function
    let newNode = new Node(val)
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
    // Otherwise set the new propety on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = newNode
      this.tail = newNode
    }
    // Increment the length by one
    this.length += 1
    return this
  }
}

let list = new SinglyLinkedList
list.push("Hello")
list.push("Goodbye")

console.log(list)