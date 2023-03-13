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
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  unshift(val) {
    // create a new node using passed value
    let newNode = new Node(val)
    // If no head property on list, set head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // Otherwise, set newly created node's next property to the current head property on the list
      newNode.next = this.head
      // Set the head property on the list to be the newly created node
      this.head = newNode
    }
    // Incrememnt length by 1
    this.length++
    // return list
    return this
  }
  get(index) {
    // function should accept an index
    // if index is less than zero or greater than or equal to length of list, return null
    if (index < 0 || index >= this.length) return null
    // loop thru list until reach index and return the node at that specific index
    let counter = 0
    let current = this.head
    while (counter !== index) {
      console.log(counter)
      current = current.next
      counter++
    }
    return current
  }
  // Set - Changing the value of a node based on its position in the Linked List
  set(index, val) {
    // function should accept an index and value
    // uses get function to find the specific node
    let foundNode = this.get(index)
    // if node not found, return false
    if (!foundNode) {
      return false
    } else {
      // if node is found, set the val of that node to the passed val and return true
      foundNode.val = val
      return true
    }
  }
  // Insert - Adding a node to a specific position
  insert(index, val) {
    // function should accept an index and value
    // if index is less than zero or greater than length, return false
    if (index < 0 || index > this.length) return false
    // if index is same as length, push a new node to the end of list
    if (index === this.length) return !!this.push(val)
    // if index is 0, unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(val)
    // otherwise, using the get method, access the node at index -1
    let newNode = new Node(val)
    let prev = this.get(index - 1)
    // set next property on that node to be the new node
    let temp = prev.next
    // set next property on new node to be the previous next
    newNode.next = temp
    // increment length
    this.length++
    // return true
    return true
  }
  // Remove - removing a node from the linked list at a specific position
  remove(index) {
    // function should accept an index
    // if index is less than zero or greater than length, return undefined
    if (index < 0 || index >= this.length) return false
    // if index is 0, shift
    if (index === 0) return this.shift()
    // if index is same as length - 1, pop
    if (index === this.length - 1) return this.pop()
    // otherwise, using get method, access node at the index - 1
    let prevNode = this.get(index - 1)
    // set next property on that node to be the next of the next node
    let removed = prevNode.next
    prevNode.next = removed
    // decrement length
    this.length--
    // return value of node removed
    return removed
  }
  // Reverse - reverse the linked list in place
  reverse() {
  // swap head and tail
  let node = this.head
  this.head = this.tail
  this.tail = node
  // create variable next
  let next
  // create variable prev
  let prev = null
  // create variable called node and set to head property
  // loop thru list
  for (let i = 0; i < this.length; i++) {
    next = node.next
    node.next = prev
    prev = node
    node = next
  }
  return this
  }
}

let list = new SinglyLinkedList