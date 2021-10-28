const wordScore = require('./wordScores')

test('calculates wordScore of agree to equal 4489', () => {
  expect(wordScore("agree").toBe(4489))
})