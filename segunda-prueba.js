/*
  ⦁	Cree una función que devuelva el voto de la mayoría en una matriz. 
  Un voto mayoritario es un elemento que ocurre > N/2 veces en una matriz 
  (donde N es la longitud de la matriz). 
*/

function mostVoted(matriz){
  
  let mostFrequent = 1
  let x = 0
  let value

  for(let i = 0; i < matriz.length; i++){
    for(let j = i; j < matriz.length; j++){
      
      if(matriz[i] === matriz[j]){

        x++

        if(mostFrequent < x){
          mostFrequent = x;
          value = matriz[i]
        }

      }

    }
    
    x = 0
  }

  return value
}


module.exports = mostVoted