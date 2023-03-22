// Hash table
// used to store key-value pairs
// like arrays but keys are not ordered
// ideal for finding values, adding new values, and removing values
// hash functions provides a way to convert keys into valid array indices

// hash table
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size)
  }
  _hash(key){
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }
  // set - accepts key and value
  // hashes the key
  // stores the key-value pair in the hash table array via separate chaining
  set(key, value){
    let index = this._hash(key)
    if(!this.keyMap[index]){
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
  // get - accepts a key
  // hashes the key
  // retrieves key-value pair in the hash table
  // if key isn't found, returns undefined
  get(key){
    let index = this._hash(key)
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
  // keys - loops thru hash table array and returns an array of keys in the table
  keys(){
    let keysArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
  // values - loops thru hash table array and returns an array of values in the table
  values(){
    let valuesArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }
}

// Separate chaining - allows us to store multiple key-value pairs at the same index
// Linear probing - allows us to store a sinle key-value at each index

let ht = new HashTable()
