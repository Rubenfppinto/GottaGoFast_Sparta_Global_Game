document.addEventListener('DOMContentLoaded', function(event) {
  var instructions = document.getElementById('instructions');
  var textIns = `<p class="textformating">Hello player, the objective of this game is to help sonic cross the finish line before the time runs out.</p> <p class="textformating">To do that, you have to type the words correctly in order to make Sonic move. For every correct word, you will get one point and Sonic will move closer towards the finish line. If input the word wrong, you may still continue play, but sonic will not move</p><p class="textformating"> <span id="important">IMPORTANT:</span> The clock does not start autommatically, which allows you to practice. To start the clock, you o just press CTRL Key.</p>`
  document.getElementById('buttoninst').addEventListener("click", function() {
    if (instructions.innerHTML == "") {
      instructions.innerHTML = textIns;
    } else {
      instructions.innerHTML = "";
    }
  })
});
