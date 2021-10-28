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
  let repeatedLetter = Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0]
  return obj[repeatedLetter]
}

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

    // add to the result and increment our pointers
    result += charScore;
    i++;
    j++;
  }

  // Here we check the last character to see if a vowel preceded and adjust the result accordingly
  if (!isConsonant(s[i - 1]) & !isConsonant(s[i - 2])) {
    let lastVal = initialVal(s[i - 1])
    result = result - (lastVal)
    result += (lastVal * lastVal)
  }

  // Use our helper function and our lookup object to create and utilize our exponent
  return result ** mostRepeated(wordObj)
}



module.exports = wordScores;
