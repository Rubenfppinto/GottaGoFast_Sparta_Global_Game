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
    "intention",
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
    "concession",
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
    "rehabilitation",
    "descent",
    "far",
    "nationalist",
    "arrogant",
    "clinic",
    "kinship"
  ]
  var winningScore = 15;
  var correctScore = parseInt(document.getElementById('score').innerHTML = "0")
  var incorrectScore = parseInt(document.getElementById('scoreincorrect').innerHTML = "0");
  var time = 0;

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

  var sec = 16;
  timer = function() {
    if (--sec == 0  && !(correctScore==winningScore)) {
      document.getElementById('gamearea').innerHTML = "";
      document.getElementById('timescore').innerHTML = "";
      document.getElementById('objmoving').innerHTML = "";
      document.getElementById('timescore').insertAdjacentHTML('afterbegin', '<h2 id="lostId">You lost this time!</h2>');
      document.getElementById('gamearea').insertAdjacentHTML('afterbegin', `<h2 id="centralised">Unfortunately you ran out of time</h2><h2 class="afterGameMessage">You typed ${correctScore} words <span id="correct">correctly</span> and ${incorrectScore} <span id="incorrect">incorrectly</span></h2>
      <h3 class="afterGameMessage">You were unable to get Sonic to cross the finish line within the time limit</h3>
      <button onclick="location.href='game.html'">Play again</button>`);
    }
    document.getElementById("timer").innerHTML = (sec < 10 ? "0" + sec : sec);
  };

  //fecths the input box and adds an event listeners when a key is released
  document.getElementById("userinput").addEventListener("keyup", function(event) {
    //runs the event keycod so it can fetch any code for any key on the keyboard
    var key = event.keyCode;
    var wordInput = document.getElementById('userinput').value;
    //matching if the key pressed is enter
    if (key === 13) {
      if (wordInput.length === randomWord[index].length && wordInput === randomWord[index]) { //displays correct if words match
        document.getElementById('outcome').innerHTML = "Correct!";
        document.getElementById('outcome').style.color = "Green";
        generateWord(randomWord);
        document.getElementById('userinput').value = "";
        document.getElementById('userinput').placeholder = "Keep typing"
        document.getElementById('score').innerHTML = correctScore += 1;
        document.getElementById('score').style.color = "rgb(10,225,10)";
        document.getElementById('sonic').style.transform += "translate(100px)";
        sec = sec +1; //increases one second per correct word
        if (correctScore == winningScore) {
          document.getElementById('gamearea').innerHTML = "";
          document.getElementById('timescore').innerHTML = "";
          document.getElementById('objmoving').innerHTML = "";
          document.getElementById('gamearea').innerHTML = "";
          document.getElementById('timescore').innerHTML = "";
          document.getElementById('objmoving').innerHTML = "";
          document.getElementById('timescore').insertAdjacentHTML('afterbegin', '<h2 id="lostId">You have won!</h2>');
          document.getElementById('gamearea').insertAdjacentHTML('afterbegin', `<h2 id="centralisedWin">Great job!</h2><img src="pics/fireworks.gif" height="250" width="450"><h2 class="afterGameMessage">You typed ${correctScore} words <span id="correct">correctly</span> and ${incorrectScore} <span id="incorrect">incorrectly</span></h2>
          <h3 class="afterGameMessage">Sonic to crossed the finish line within the time limit</h3>
          <button onclick="location.href='game.html'">Play again</button>`);
        }
      } else { //displays incorrect if words don't match
        document.getElementById('outcome').innerHTML = "Incorrect!";
        document.getElementById('outcome').style.color = "Red";
        generateWord(randomWord);
        document.getElementById('userinput').placeholder = "oops! Try again!"
        document.getElementById('userinput').value = "";
        document.getElementById('scoreincorrect').innerHTML = incorrectScore += 1;
        document.getElementById('scoreincorrect').style.color = "Red";
      }
    }
  })

  // event listener that starts the timer when releasing ctrl key
  document.addEventListener("keyup", function(event) {
    var disabledBox = document.getElementById('userinput');
    var startTimer = event.keyCode;
    if (startTimer === 17) {
      setInterval(timer, 1000); //runs the clock every second
      timer();
    }
  })

});


//TIMER
// var sec = 0;
// var min = 0;
// var timer = function() {
//   if (++sec === 60) {
//     sec = 0;
//     if (++min === 60) min = 0;
//   }
//   document.getElementById("timer").innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
// };
