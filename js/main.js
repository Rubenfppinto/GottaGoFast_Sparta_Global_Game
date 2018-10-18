document.addEventListener('DOMContentLoaded', function(event) {

  // var instructions = document.getElementById('instructions');
  // var textIns = "Hello player, the objective of this game is to test how fast you can type. To do "
  // document.getElementById('buttoninst').addEventListener("click", function() {
  //   if (document.getElementsByClassName('hide').style.display = none) {
  //     instructions.innerHTML = textIns;
  //   } else {
  //     instructions.innerHTML = "";
  //   }
  // })
  //
  // var leaderboard = document.getElementById('leaderboard');
  // document.getElementById('buttonlead').addEventListener("click", function() {
  //   if (leaderboard.innerHTML == "") {
  //     leaderboard.innerHTML = "fasdfsdfsd";
  //   } else {
  //     leaderboard.innerHTML = "";
  //   }
  // })
  //


  var instructions = document.getElementById('instructions');
  var textIns = `Hello player, the objective of this game is to help sonic cross the finish line before the time runs out.<br> To do that, you have to type the words correctly in order to make Sonic move.<br> <span id="important" >IMPORTANT:</span> The clock does not start autommatically, which allows you to practice. To start the clock, you o just press CTRL Key.`
  document.getElementById('buttoninst').addEventListener("click", function() {
    if (instructions.innerHTML == "") {
      instructions.innerHTML = textIns;
    } else {
      instructions.innerHTML = "";
    }
  })

  var leaderboard = document.getElementById('leaderboard');
  document.getElementById('buttonlead').addEventListener("click", function() {
    if (leaderboard.innerHTML == "") {
      leaderboard.innerHTML = "fasdfsdfsd";
    } else {
      leaderboard.innerHTML = "";
    }
  })
});
