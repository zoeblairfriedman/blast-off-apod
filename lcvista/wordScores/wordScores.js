// HELPERS
let vowels = ["a", "e", "i", "o", "u"]
const regex = /[^A-Za-z]/g;

// uses charCodeAt to determine value of letter based on unicode
const initialVal = (char) => { return (char.charCodeAt(0) - 97) + 1 }

// checks to see if the character is in the vowel array
const isConsonant = (char) => { return !vowels.includes(char) }

// checks to see if the string contains vowels
const containsVowels = (string) => {
  let result = false
  string.split("").map(char => { !isConsonant(char) ? result = true : null })
  return result
}

// returns number of times the most-repeated letter appears
const mostRepeated = (obj) => {
  // let repeatedLetter = Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0]
  let arr = Object.values(obj)
  return Math.max(...arr)
  // return obj[repeatedLetter]
}
/*
{a: 1,
g: 1,
r: 1,
e: 2
}


*/


// WORDSCORES FUNCTION
function wordScores(string) {
  let result = 0;
  if (string.length === 0) return result;

  // filters out non-alphanumeric characters and converts to lowercase
  const s = string.replace(regex, "").toLowerCase()

  // If there are no vowels, vowels = ["y"]
  !containsVowels(s) ? vowels = ["y"] : null

  let wordObj = {}
  let i = 0;
  let j = 1;

  while (i <= s.length - 1) {
    let current = s[i]
    let next = s[j]
    let prev = s[i-1]
    let charScore = initialVal(current)
    // this updates our lookup object as we go
    wordObj[current] ? wordObj[current] += 1 : wordObj[current] = 1

    // If a consonant appears to the left of a vowel, its score is halved (round up to the nearest integer):
    if (isConsonant(current) && !isConsonant(next)) {
      charScore = (Math.round(charScore / 2))
    }

    // If a vowel appears next to another vowel, its value is squared:
    if (!isConsonant(current) && !isConsonant(next)) {
      charScore = (charScore ** 2)
    }

    // check to see if the preceding value is a vowel
    if (i > 0 && !isConsonant(current) && !isConsonant(prev)) {
      charScore = (charScore ** 2)
    }
    
    // add to the result and increment our pointers
    result += charScore;
    i++;
    j++;
  }

  // Here we check the last character to see if a vowel preceded and adjust the result accordingly
  // if (!isConsonant(s[i - 1]) & !isConsonant(s[i - 2])) {
  //   let lastVal = initialVal(s[i - 1])
  //   result = result - (lastVal)
  //   result += (lastVal * lastVal)
  // }
  // Use our helper function and our lookup object to create and utilize our exponent
  return result ** mostRepeated(wordObj)
}

console.log(wordScores("oof"))
// 207936


module.exports = wordScores;


/* 

o o f
  i
    j


i    n    t     e    l      l     i     g    e    n    t    l    y
9    14   20/2  5    12    12/2   9    7/2   5    14   20   12   25
9    14   10    5    12    6      9     4    5    14   20   12   25 = 145

145 ^ 3 = 3048625

Each letter initially gets a score based on its location in the alphabet starting with the first letter of the word
(gym = [g=1, h=2, i=3, etc..., e=25, f=26])Example:
- zoo
z o o
(1 + 16^2 + 16^2)^2 = 263169



*/
// console.log(initialVal("g"), initialVal("y"), initialVal("m"), initialVal("a"))
   // y = 19, z = 20, a = 21, b = 22, c = 23, d = 24, e = 25, f = 26, g = 1, h = 2, i = 3, j = 4, k = 5, l = 6, m = 7