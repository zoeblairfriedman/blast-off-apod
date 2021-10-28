let vowels = ["a", "e", "i", "o", "u"]

const initialVal = (char) => { return (char.charCodeAt(0) - 97) + 1 }

const isConsonant = (char) => { return !vowels.includes(char) }

const containsVowels = (string) => {
  let result = false
  string.split("").map(char => { !isConsonant(char) ? result = true : null })
  return result
}

const mostRepeated = (obj) => {
  let repeatedLetter = Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0]
  return obj[repeatedLetter]
}



function wordScores(s) {
  // If there are no vowels, vowels = ["y"]
  !containsVowels(s) ? vowels = ["y"] : null

  // Initial values for our lookup object, result, and pointers
  let wordObj = {}
  let result = 0;
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

  // Here we check the last character to see if a vowel preceded it
  if (!isConsonant(s[i - 1]) & !isConsonant(s[i - 2])) {
    let lastVal = initialVal(s[i - 2])
    result = result - (lastVal)
    result += (lastVal * lastVal)
  }

  // Use our helper function and our lookup object to create our exponent:
  return result ** mostRepeated(wordObj)
}

module.exports = wordScores;





/*

Assignment Expectations:
- Please spend approximately one hour on this task
- Feel free to write code in whatever language you're comfortable with (preferably javascript or python)
- The code should be able to be run without error. Let us know how to run your script so we can see it work
- If you have any questions about this assignment, please reach out to jhiggins@lcvista.com
CODING ASSIGNMENT: Word Scores
Please write a script that takes in a word and returns its score based on the following rules:
CHECK - Rule 1: Each letter initially gets a scored based on its location in the alphabet (a=1, b=2, etc...)
CHECK - Rule 2: If a consonant appears to the left of a vowel, its score is halved (round up to the nearest integer)
CHECK - Rule 3: If a vowel appears next to another vowel, its value is squared.
CHECK - Rule 4: The letter Y is considered a vowel if there are no other vowels in the word.
CHECK - Rule 5: After calculating the letter score, apply an exponent equal to the number of times the most-repeated
letter appears
Examples:
- agree
 a g r e e
       i
         j
 (1 + 7 + 18/2 + 5^2 + 5^2)^2 = 4489
- intelligently
 i n t e l l i g e n t l y
 (9 + 14 + 20/2 + 5 + 12 + 12/2 + 9 + 7/3 + 5 + 14 + 20 + 12 + 25)^3 = 3048625
Please use this list of the 1000 (Ten Hundred: https://xkcd.com/thing-explainer/) most commons words in the
English language for testing: https://splasho.com/upgoer5/phpspellcheck/dictionaries/1000.dicin
BONUS ROUND (Modifying Rule 1):
- Each letter initially gets a score based on its location in the alphabet starting with the first letter of the word
(gym = [g=1, h=2, i=3, etc..., e=25, f=26])Example:
- zoo
 z o o
 (1 + 16^2 + 16^2)^2 = 263169
BONUS BONUS ROUND:
- Please write unit tests for all functions used to solve the above.

*/

