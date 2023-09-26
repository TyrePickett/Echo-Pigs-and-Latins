$(document).ready(function () {
  var laps = 0;
  $("#flying-pig").draggable({});
  $("#flying-pig").click(function () {
    //code goes here
    console.log("position: ", $("#flying-pig").position().left);
    console.log(screen.width)
  });

  $("#flying-pig").draggable({
    stop: function () {
      if ($("#flying-pig").position().left > 1500) {
        //  alert("you haswss wowzazzz ");
        $("#flying-pig").css("transform", "scaleX(1)");
      } else if ($("#flying-pig").position().left < 150) {
        $("#flying-pig").css("transform", "scaleX(-1)");
        laps++;
        $("#game-laps").text(`Laps Completed: ${laps}`);
        
      }
      if (laps >= 5) {
        $("#game-text").text("Congratulations you've shown us pigs can fly");
        $("#game-text")
          .css("font-size", "50px")
          .css("text-align", "center")
          .css("color", "yellow")
          .css("background", "orange");
        $("body").css("font-family", "cursive");
      }
    }
  });
  function animateClouds(cloudNumber, xPos, original=310){
    $(`#${cloudNumber}`).animate({
      left:xPos - 310,
    // right:screen.width - 310,
  }, 20000, function(){
        $(`#${cloudNumber}`).animate({
          left: original
        }, 20000, function(){
           animateClouds(cloudNumber, xPos, original);
        });
    });
  }
  animateClouds('cloud', screen.width, $("#cloud").position().left);
  animateClouds('cloud2', 310,  $("#cloud2").position().left);
  
});
