document.addEventListener('DOMContentLoaded', function(event) {

var instructions = document.getElementById('instructions');
  document.getElementById('buttoninst').addEventListener("click", function(){
    if (instructions.innerHTML == "" ){
      instructions.innerHTML = "fasdfsdfsd";
    } else {
      instructions.innerHTML = "";
    }
  })

  var leaderboard = document.getElementById('leaderboard');
    document.getElementById('buttonlead').addEventListener("click", function(){
      if (leaderboard.innerHTML == "" ){
        leaderboard.innerHTML = "fasdfsdfsd";
      } else {
        leaderboard.innerHTML = "";
      }
    })
});
