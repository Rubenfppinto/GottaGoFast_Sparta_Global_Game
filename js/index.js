document.addEventListener ('DOMContentLoaded', function(event){
var randomWord = [
    "cry",
    "front",
    "adoption",
    "designer",
    "weakness",
    "character",
    "advantage",
    "culture",
    "integrated",
    "falsify"]
// console.log (randomword[1]);

//calling functions
generateWord(randomWord);

//Generates random word
function generateWord(randomWord){
  //randomly generates an index
  var index = Math.floor(Math.random() * randomWord.length);
  //attributes the index to the same word in that position and outputs it
  currentWord.innerHTML = randomWord[index];
}


















})
