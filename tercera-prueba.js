/*
  ⦁	Dado un número, devuelve todos sus divisores primos en una matriz. 
  Cree una función que tome un número como argumento y devuelva todos sus divisores primos. 
  Para ilustrar:

  ⦁	Si n = 27
  ⦁	Todos los divisores son: [3, 9, 27]
  ⦁	Finalmente, de esa matriz de divisores, devuelve los primos: [3]
*/

const isPrime = (num) => {
  // Casos especiales
  // no puede ser 0 ni 1 tampoco 4
  if (num === 0 || num === 1 || num === 4) return false;
  for (let x = 2; x < num / 2; x++) {
    if (num % x === 0) return false;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
};

function primeNumber(number) {
  if(number != typeof Number){
    console.error("String are not alowed")
  }
  let listOfPrime = [];
  let divisibleList = [];
  for (let i = 0; i < number + 1; i++) {
    if (i > 1) {
      if (number % i === 0) {
        divisibleList.push(i);
      }
    }
  }

  divisibleList.forEach((e) => {
    if(isPrime(e) === true){
      listOfPrime.push(e)
    }
  })
  
  return(`${number} es divisible por: ${divisibleList} \ny los numeros primos son: ${listOfPrime}`) ? "Error: string are not alowed" : ""
}

module.exports = primeNumber 