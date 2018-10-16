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

  // function compareWords() {
  //   if(userinput.value===randomWord[index]){
  //     outcome.innerHTML = "Correct!";
  //     return true;
  //   } else{
  //     outcome.innerHTML = "Incorrect!";
  //     return false;
  //   }
  // }



  document.getElementById("userinput").addEventListener("keyup", function(event){
    var key = event.keyCode;
    var wordInput = document.getElementById('userinput').value;
    if (key===13){
    if (wordInput.length === randomWord[index].length && wordInput === randomWord[index])
      {
        console.log ("correct");
        document.getElementById('outcome').innerHTML = "Correct!";
        document.getElementById('outcome').style.color = "Green";
      }else {

      console.log ("Incorrect")
      document.getElementById('outcome').innerHTML = "Incorrect!";
      document.getElementById('outcome').style.color = "Red";
      }
    }
    //}


    // if (key===13 /*&& wordInput.length === randomWord[index].length && wordInput === randomWord[index]*/){
    //   console.log (key);
    //   console.log("correct");
    //   // if (wordInput.length === randomWord[index].length){
    //   //   if (wordInput == randomWord[index]){
    //   //     console.log("Correct!");
    //   //   }
    //   }
  })
  });
// });





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

// console.log(randomWord[index].length);
// console.log(wordInput.length);


// });
