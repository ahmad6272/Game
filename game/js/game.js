function bomb() {
  let audio = document.createElement('audio');
  audio.setAttribute("autoplay", "true");
  audio.innerHTML = "<source src=\"\audio/bomb.mp3\" type=\"audio/mpeg\">";
}
let ball = 2;
function randRange(minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createBall() {
  document.onclick = createBall;
  for (i = 1; i < ball; i++) {
    let dropLeft = randRange(250, 1000);
    let dropTop = randRange(50, 500);
    $(".ball").append('<div id="balls' + i + '" class="balls"></div>');
    $("#balls" + i).css("left", dropLeft);
    $("#balls" + i).css("top", dropTop);
  }
  $(".balls").click(function () {
    $(".balls").remove();
  })
}
createBall();


$(document).ready(function () {
  $('.ball').click(function () {
    $('#counter').html(+$('#counter').html() + 1);
  });
});
