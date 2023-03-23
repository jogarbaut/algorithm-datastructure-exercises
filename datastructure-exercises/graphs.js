// Graphs
// graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or set of ordered pairs for a directed graph

// graphs terminology
// vertex - a node
// edge - connection between nodes

// types of graph
// undirected graph (two way connections)
// directed graph (usually represented with arrows which determine direction)

// weighted graph (when assigning value to edges)

// Adjaceny list
// can take up less space
// faster to iterate over all edges
// can be slower to lookup specific edge

// Adjaceny matrix
// takes up more space
// slower to iterate over all edges
// faster to lookup specific edge

class Graph {
  constructor() {
    this.adjacenyList = {}
  }
  // add in a vertex
  addVertex(vertex) {
    // add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = []
  }
  // add an edge
  addEdge(vertex1, vertex2) {
    // find in the adjacency list the key of vertex1 and push vertex2 to the array
    this.adjacenyList[vertex1].push(vertex2)
    // find in the adjacency list the key of vertex2 and push vertex1 to the array
    this.adjacenyList[vertex2].push(vertex1)
  }
  // remove an edge
  removeEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(vertex => vertex !== vertex2)
    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(vertex => vertex !== vertex1)
  }
  // removing a vertex
  removeVertex(vertex){
    // loop as long as there are any other vertices in the adjacency list for that vertex
    while(this.adjacenyList[vertex].length){
      // inside of loop, call removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
      const adjacentVertex = this.adjacenyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    // delete the key in the adjacency list for that vertex
    delete this.adjacenyList[vertex]
  }
  // Graph traversal
    // uses
      // peer to peer networking
      // finding "closest" matches/recommendations
      // shortest path problems
      // GPS navigation
      // solving mazes

    // Depth First Search (DFS)
    // if vertex is empty, return (this is the base case)
    // add vertext to results list
    // mark vertex as visited
    // for each neighbor in vertex's neighbors:
      // if neighbor is not visited
        // recursively call DFS on neighbor

    // Depth first traversal
  depthFirstRecursive(start){
    // function should accept a starting node
      // create a list to store the end result, to be returned at the very end
      // create an object to store visited vertices
      // create a helper function which accepts a vertex
        // helper function should return early if the vertex is empty
        // helper function should place vertex it accepts into the visited object and push that vertex into the result array
        // loop over all of values in the adjacencyList for that vertex
        // if any of those values have not been visited, recusively invoke helper function with that vertex
      // invoke helper function with starting vertex
      // return results array
    const result = []
    const visited = {}
    const adjacencyList = this.adjacenyList

    (function dfs(vertex){
      if(!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      })
    })(start)
    return result
  }
  // depth first traversal (iterative)
  // function shoudl accept a starting node
  // create a stack to help keep track of vertices (use a list/array)
  // create a list to store end result, to be returned at the very end
  // create an object to store visited vertices
  // add starting vertex to stack and mark it visited
  // while stack has something in it
    // pop next vertex from the stack
    // if vertex hasn't been visited
      // mark it as visited
      // add it to the result list
      // push all of its neighbors into the stack
    // return result array
  depthFirstIterative(start){
    const stack = [start]
    const result = []
    const visited = {}
    visited[start] = true
    while(stack.length){
      currentVertex = stack.pop()
      result.push(currentVertex)
      this.adjacenyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }

  // breadth first traversal
  // visit neighbors at current depth first before moving to neighbors or neighbors

  // function shoudl accept a starting vertex
  // create a queue (array can be used) and place starting vertex in it
  // create an array to store nodes visited
  // create an object to store nodes visited
  // mark starting vertex as visited
  // loop as long as there is anything in queue
  // remove first vertex from queue and push it into the array that stores nodes visited
  // loop over each vertex in the adjacency list for the vertex visited
  // if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  // once you have finished looping, return array of visited nodes
  breadthFirst(start){
    const queue = [start]
    const result = []
    const visited = {}
    let currentVertex
    visited[start] = true
    while(queue.length){
      currentVertex = queue.shift()
      result.push(currentVertex)
      this.adjacenyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}