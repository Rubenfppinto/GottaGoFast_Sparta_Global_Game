document.addEventListener('DOMContentLoaded', function(event) {
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
    "falsify"
  ]

  var currentScore = document.getElementById('score').innerHTML = 0;
  var time = 0;


  // compareWords();
  // compareWords (event);

  //Functions
  //Generates random word
  var index;
  function generateWord(randomWord) {
    //randomly generates an index
    index = Math.floor(Math.random() * randomWord.length);
    //attributes the index to the same word in that position and outputs it
    currentWord.innerHTML = randomWord[index];
    // console.log(randomWord[index].length)
  }

  generateWord(randomWord);


  //fecths the input box and adds an event listeners when a key is released
  document.getElementById("userinput").addEventListener("keyup", function(event){
    //runs the event keycod so it can fetch any code for any key on the keyboard
    var key = event.keyCode;
    var wordInput = document.getElementById('userinput').value;
    //matching if the key pressed is enter
    if (key===13){
    if (wordInput.length === randomWord[index].length && wordInput === randomWord[index])
      {//displays correct if words match
        document.getElementById('outcome').innerHTML = "Correct!";
        document.getElementById('outcome').style.color = "Green";
        generateWord(randomWord);
        document.getElementById('userinput').value = "";
        document.getElementById('userinput').placeholder = "Type the word!"
        document.getElementById('score').innerHTML = currentScore += 1;
      }else{//displays incorrect if words don't match
        document.getElementById('outcome').innerHTML = "Incorrect!";
        document.getElementById('outcome').style.color = "Red";
        document.getElementById('userinput').placeholder = "oops! Try again!"
        document.getElementById('userinput').value = "";
      }
    }
  })





  });






    //var wordInput = document.getElementById('userinput').value;

      // if (wordInput.length === randomWord[index].length){
      //   console.log ("inside first if");
      //   console.log (wordInput);
      //   if (wordInput == randomWord[index] /*&& enterKey === 13*/){
      //     console.log("Correct");
      //     document.getElementById('outcome').innerHTML = "Correct!";
      //     document.getElementById('outcome').style.color = "Green";
      //     // document.getElementById('userinput').value = "";
      //     console.log(randomWord[index].length);
      //     console.log(wordInput.length);
      //     console.log (wordInput);
      //   }else if (/*enterKey === 13 &&*/ wordInput != randomWord[index])
      //   {
      //   document.getElementById('outcome').innerHTML = "Incorrect!";
      //   document.getElementById('outcome').style.color = "Red";
      //   // document.getElementById('userinput').value = "";
      //   console.log(randomWord[index].length);
      //   console.log(wordInput.length);
      //   }else {
      //     document.getElementById('outcome').innerHTML = "something else!";
      //     console.log (wordInput);
      //     console.log (randomWord[index]);
      //     console.log(randomWord[index].length);
      //     console.log(wordInput.length);
      //   }
      // }
    //});
