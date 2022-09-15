const { exportAllDeclaration } = require("@babel/types")
const longWord = require('./primera-prueba')

describe('longWord', () => {

  const text1 = "Contrary to popular belief, Lorem Ipsum is not simply random text"
  
  test('should print "Contrary" the largest word', () => {
    const expected = "Contrary"
    const result = new longWord(text1)
    expect(expected).toBe(result.longWord)
  })

  const text2 = "Lorem Ipsum comes from sections 1.10.32 and 1.10.3389 of 'de Finibus Bonorum et Malorum'"

  test('should print "sections" the largest word, nums are not allowed', () => {
    const expected = "sections"
    const result = new longWord(text2)
    expect(expected).toBe(result.longWord)
  })

  const text3 = "this is a test.js with jest.js"

  test('should print "test.js" If two or more words are the largest, return the word closest to the beginning of the sentence.', () => {
    const expected = "test.js"
    const result = new longWord(text3)
    expect(expected).toBe(result.longWord)
  })

  test('should print "error: not numbers alowed and not empty string" if they recive a empty string', () => {
    const expected = "error: not numbers alowed and not empty string"
    const result = new longWord("")
    expect(expected).toBe(result.longWord)
  })

  test('should print "error: not numbers alowed and not empty string" if they recive a numbers', () => {
    const expected = "error: not numbers alowed and not empty string"
    const result = new longWord(165465498161)
    expect(expected).toBe(result.longWord)
  })

})