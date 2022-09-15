const { exportAllDeclaration } = require("@babel/types")
const mostVoted = require('./segunda-prueba.js')

describe('mostVoted', () => {

  const matriz = [1,2,3,1,2,3,4,5,1,3,7,1,1,1,4]
  test('should print "1" the most voted number in the matriz', () => {
    const expected = 1
    const result = mostVoted(matriz)
    expect(expected).toBe(result)
  })

  const matriz1 = [1,2,3,2,2,"random",5,7,5,3,2,2,2]
  test('should print "2" the most repeated number in the matriz, the words are delete', () => {
    const expected = 2
    const result = mostVoted(matriz1)
    expect(expected).toBe(result)
  })

})