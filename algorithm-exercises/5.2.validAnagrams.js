// TYPE - FREQUENCY COUNTER

// Problem: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Step 1 - Restate problem, inputs, outputs, what is output, can outputs be determined, how to label important parts
// Reverse a string and see if it matches the other string
// inputs - 2 strings
// outputs - true/false
// output type - boolean
// strategy - frequency counter
// inputs - str 1, str 2
// assumptions - all lowercase, ignore spaces

// Step 2 - Explore examples
// validAnagram("racecar", "racecar") // true
// validAnagram("cinema", "iceman") // true
// validAnagram("house", "couch") // false

// Step 3 - Break down problem
// Step 4 - Simplify and solve

const validAnagram = (str1, str2) => {
  // Compare string lengths to determine to quickly determine false
  if (str1.length !== str2.length) { return false }
  // Create frequency counter object
  const freqCounter1 = {}
  
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    // if letter exists, increment, otherwise set to 1
    freqCounter1[letter] ? freqCounter1[letter] += 1 : freqCounter1[letter] = 1
  }

  // Check if keys and values match
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    // If can't find letter or letter is 0, it's not an anagram
    if (!freqCounter1[letter]) {
      return false
    } else {
      // If letter was found, subtract one from the frequency count
      freqCounter1[letter] -= 1
    }
  }
  return true
}


// Step 4.5 - Check solution
console.log(validAnagram("racecar", "racecar")) // true
console.log(validAnagram("cinema", "iceman")) // true
console.log(validAnagram("house", "couch")) // false

// Step 5 - Look back and refactor
// *** AVOID NESTED LOOPS ***