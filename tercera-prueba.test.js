const { exportAllDeclaration } = require("@babel/types")
const primeNumber = require('./tercera-prueba')

describe('primeNumber', () => {

  const n = 84
  let list = primeNumber(n)

  test(`should print ${list} if they recive ${n}`, () => {

    const expected = list
    const result = primeNumber(n)
    expect(expected).toBe(result)

  })

  test(`should print "Error: string are not alowed" if they recive a String`, () => {

    const expected = "Error: string are not alowed"
    const result = primeNumber("as asdasdqwe")
    expect(expected).toBe(result)

  })

})