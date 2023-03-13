class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // Push - add a node to the end of a doubly linked list
  push(val) {
    // create new node with value passsed
    let newNode = new Node(val)
    // if head property is null, set head and tail to be newly created node
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // if not null, set next property on tail to be that node
      this.tail.next = newNode
      // set prev property on newly created node to be the tail
      newNode.prev = this.tail
      this.tail = newNode
    }
    // increment length
    this.length++
    // return list
    return this
  }
  // Pop - remove a node from the end of a doubly linked list
  pop() {
    // if no head, return undefined
    if (this.length === 0) return undefined
    // store current tail in variable to return later
    let poppedNode = this.tail
    if (this.length === 1) {
      // if length is 1, set head and tail to be null
      this.head = null
      this.tail = null
    } else {
      // update tail to be the previous node
      this.tail = poppedNode.prev
      // set newTail's next to null (remove bond from both directions forward/backward)
      this.tail.next = null
    }
    // decrement length
    this.length--
    // return value removed
    return poppedNode
  }
  // Shift - remove a node from the beginning of a doubly linked list
  shift() {
    // if length is 0, return undefined
    if (length === 0) return undefined
    // store current head in variable
    let shiftedNode = this.head
    // if length is one, set head to be null and tail to be null
    if (length === 1) {
      this.head = null
      this.tail = null
    } else {
      // update head to be the next of the old head
      this.head = shiftedNode.next
      // set head's prev to null
      this.head.prev = null
      // set old head's next to null
      shiftedNode.next = null
    }
    // decrement length
    this.length--
    // return old head
    return shiftedNode
  }
  // Unshift - add a node to the beginning of a doubly linked list
  unshift(val) {
    // create a new node with passed val
    let newNode = new Node(val)
    // if length is 0, set head to be new node, set tail to be new node
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // otherwise, set prev prop on head of list to be new node
      this.head.prev = newNode
      // set next prop on new node to be head prop
      newNode.next = this.head
      // update head to be new node
      this.head = newNode
    }
    // increment length
    this.length++
    // return list
    return this
  }
  // Get - access a node in a doubly linked list
  get(index) {
    // if index is less than 0 or greater than or equal to length, return null
    if (index < 0 || index >= this.length) return null
    // if index is less than or equal to half of the length of list
    if (index <= this.length / 2) {
      // loop thru list starting from head and loop toward middle
      let count = 0
      let current = this.head
      while (count != index) {
        current = current.next
        count++
      }
    } else {
      // if index is greater than half of length of list
      // loop thru list starting from tail and loop towards middle
      let count = this.length - 1
      let current = this.tail
      while (count != index) {
        current = current.prev
        count--
      }
    }
    // return node once it is found
    return current
  }
  // Set - replace the value of a node in a doubly linked list
  set(index, val) {
    // create variable which is result of get method with index passed to function
    let foundNode = this.get(index)
    // if get returns valid ndoe, set value of node to be the value passed to the function
    if (foundNode != null) {
      foundNode.val = val
      // return true
      return true
    }
    // otherwise return false
    return false
  }
  // Insert - adding a ndoe in a doubly linked list by a certain position
  inset(index, val) {
    // if index is less than 0 or greater than or equal to length, return false
    if (index < 0 || index >= this.length) return false
    // if index is 0, unshift
    if (index === 0) !!this.unshift(val)
    // if index is same as length, push
    if (index === this.length) !!this.push(val)
    // use get method to access the index - 1
    let newNode = new Node(val)
    // set next and prev prop on correct nodes to link everything together
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next
    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    // increment length
    this.length++
    // return true
    return true
  }
  // Remove - removing a node in a doubly linked list by a certain position
  remove(index) {
    // if index is less than 0 or greater than or equal to length, return undefined
    if (index < 0 || index >= this.length) return undefined
    // if index is 0, shift
    if (index === 0) this.shift()
    // if index is same as length - 1, pop
    if (index === this.length - 1) this.pop()
    // use get method to retrieve the item to be removed
    let removedNode = this.get(index)
    let beforeNode = removedNode.prev
    let afterNode = removedNode.next
    // update next and prev prop to remove the found node from the list
    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    // set next and prev to null on found node
    removedNode.next = null
    removedNode.prev = null
    // decrement length
    this.length--
    // return removed node
    return removedNode
  }
}

let list = new DoublyLinkedList