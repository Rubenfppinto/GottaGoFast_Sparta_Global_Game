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
    "falsify",
    "racism",
    "discover",
    "photograph",
    "credibility",
    "ceiling",
    "infinite",
    "credibility",
    "retailer",
    "bedroom",
    "friend",
    "suntan",
    "job",
    "chain",
    "brainstorm",
    "refer",
    "feminist",
    "quantity",
    "brush",
    "nominate",
    "launch",
    "strike",
    "captivate",
    "bike",
    "activity",
    "cell phone",
    "outlook",
    "serious",
    "bald",
    "anger",
    "shop",
    "well",
    "hypothesis",
    "argument",
    "east",
    "mystery",
    "poison",
    "tribe",
    "evoke",
    "glove",
    "crime",
    "bad",
    "crack",
    "descent",
    "far",
    "nationalist",
    "arrogant",
    "clinic",
    "kinship"]

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

  // var date = new Date();
  // var sec = date.getSeconds();
  // var min = date.getMinutes();
  var sec = 0;
  var min = 0;
  var timer = function() {
    if (++sec === 60) {
      sec = 0;
      if (++min === 60) min = 0;
    }
    document.getElementById("timer").innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
  };
  setInterval(timer, 1000);//runs the clock every second
  timer();


  });
