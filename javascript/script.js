$(document).ready(function(){
  // Trigger pop-up window
  $(".modal").modal();

  //Trigger slide-up window
  $(window).resize(function(){
  	if ($(window).width() <= 600){
  		// do something here
      console.log("Small!");
      $("#model").addClass("bottom-sheet");
  	} else {
      console.log("Big!");
      $("#model").removeClass("bottom-sheet");
    }
  });

  //Remove FAB pulse
  $("#add-button").on("click", function() {
    $("#add-button").children("a").removeClass("pulse");
  });













});
