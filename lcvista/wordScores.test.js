const wordScore = require('./wordScores')


// initial tests
test("calculates wordScore of 'agree' to equal 4489", () => {
  expect(wordScore("agree")).toBe(4489)
})

test("calculates wordScore of 'intelligently' to equal 3048625", () => {
  expect(wordScore("intelligently")).toBe(3048625)
})

// test for a word with uppercase characters
test("calculates wordScore of 'TRUE' to equal 495", () => {
  expect(wordScore("TRUE")).toBe(495)
})

// test for a word with 'y' as the only vowel
test("calculates wordScore of 'why' to equal 52", () => {
  expect(wordScore("why")).toBe(52)
})

// test for a word with a non-alphanumeric character
test("calculates wordScore of 'I'll' to equal 1089", () => {
  expect(wordScore("I'll")).toBe(1089)
})

// test for an empty string
test("calculates wordScore of empty string to equal 0", () => {
  expect(wordScore("")).toBe(0)
})


