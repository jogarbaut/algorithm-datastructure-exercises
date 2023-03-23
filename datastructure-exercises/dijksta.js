// dijksta's algorithm
// uses graph and priority queue with binary heap

// the algorithm finds the shortest path between two vertices on a graph
// what is the fastest path from A to B

// 4 main steps
// 1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
// 2. Once we've moved to the node we're going to visit, we look at each of its neighbors
// 3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
// 4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node

// weighted graph is used for the algorithm
// { A: [{node: "B", weight: 10}] }
class WeightedGraph {
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node:vertex2, weight})
    this.adjacencyList[vertex2].push({node:vertex1, weight})
  }
  Dijkstra(start, finish){
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = []
    let smallest
    // build initial state
    for(let vertex in this.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    // as long as there is something to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val
      if(smallest === finish){
        // build up path to return at end
        while(previous[smallest]){
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjacencyList[smallest]){
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if(candidate < distances[nextNode.node]){
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

// priority queue
class PriorityQueue {
  constructor(){
    this.values = []
  }
  enqueue(val, priority){
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp(){
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element.priority <= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  dequeue(){
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
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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

// class PriorityQueue {
//   constructor(){
//     this.values = []
//   }
//   enqueue(val, priority){
//     this.values.push({val, priority})
//     this.sort()
//   }
//   dequeue(){
//     return this.values.shift()
//   }
//   sort(){
//     this.values.sort((a, b) => a.priority - b.priority)
//   }
// }

// Dijkstra's psuedocode
// function should accept a starting and ending vertex
// create an object (called distances) and seet each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
// after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 becuase that's where we begin
// create another object called previous and set each key to be every vertex in the adjacency list with a value of null
// start looping as long as there is anything in the priority queue 
  // dequeue a vertex from the priority queue
  // if a vertex is the same as the ending vertex - we are done
  // otherwise loop thru each value in the adjacency list at that vertex
    // calculate distance to that vertex from the starting vertex
    // if distance is less than what is currently sorted in our distances object
      // update the distances object with new lower distance
      // udpate previous object to contain that vertex
      // enqueue the vertex with the total distance from the start node