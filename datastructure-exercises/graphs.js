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
}

let g = new Graph()
g.addVertex("Tokyo")
g.addVertex("San Francisco")
g.addVertex("San Jose")
g.addEdge("Tokyo", "San Jose")
g.addEdge("Tokyo", "San Francisco")
g.removeEdge("Tokyo", "San Jose")
console.log(g)
