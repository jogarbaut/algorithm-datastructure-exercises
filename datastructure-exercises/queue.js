class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  // enqueue - method to add item in
  enqueue(val){
    // funciton should accept a value
    // create a new node using that value passed to the function
    let newNode = new Node(val)
    // if no nodes in queue, set this node to be the first and last property of the queue
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      // otherwise, set net property on current last to be that node, and then set the last property of the queue to be that node
      this.last.next = newNode
      this.last = newNode
    }
    // increment size by 1
    return ++this.size
  }
  // dequeue - method to remove first item that was added in
  dequeue(){
    // if no first property, return null
    if(!this.first) return null
    // store first property in temp variable
    let temp = this.first
    // check if first is the same as last (check if there is only 1 node)
    if(this.first === this.last) {
      // if so, set first and last to be null
      this.last = null
    }
    // if there is more than 1 node, set the first property to be the next property of first
    this.first = this.first.next
    // decrement size by 1
    this.size--
    // return value of the node that was dequeued
    return temp.value
  }
}