/*
  ⦁	Escribe una función que encuentre la palabra más larga en una oración y la devuelva. 
  Si dos o más palabras son las más grandes, devuelva la palabra más cercana al comienzo de la oración. 
  Los caracteres como apóstrofes, comas, puntos, etc. cuentan como letras (por ejemplo, D’elia tiene 6 caracteres).
*/

const { error } = require("console");

/* the word most long in this string is "Contrary" */
/*const text = "Contrary to popular belief, Lorem Ipsum is not simply random text"*/

/*
function longWord(string){

  let pattern = /\d/g
  let newString = string.replace(pattern, '');
  newString = newString.split(' ');
  let largest = ""

  for(let i = 0; i < newString.length; i++){

    if(newString[i].length > largest.length){
      largest = newString[i]
    }

  }

  if(largest === ""){
    largest = "this is a empty string"
  }

  return largest
}*/

class LongWord {
  
  //the 'constructor' is in charge of obtaining the string
  //and formatting it to search for the longest word
  constructor(string) {
    this.string = string.toString();
    this.newString = this.string.replace(/\d/g, "").split(" ");
    this.largest = "";
  }

  //this getter method is responsible for calling 
  //the LongWord method, to return the value
  get longWord() {
    return this.long();
  }

  //This method is responsible for finding
  //the closest longest word in the sentence.
  long() {
    for (let i = 0; i < this.newString.length; i++) {
      if (this.newString[i].length > this.largest.length) {
        this.largest = this.newString[i];
      }
    }

    return this.largest ? this.largest : "error: not numbers alowed and not empty string";
  }
}

module.exports = LongWord