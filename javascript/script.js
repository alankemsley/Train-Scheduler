$(document).ready(function(){

  // Trigger modal
  $(".modal").modal();

  // Modal format
	if ($(window).width() <= 600){
		// Slide-up modal
    $("#modal").addClass("bottom-sheet");
	} else {
    // Pop-up modal
    $("#modal").removeClass("bottom-sheet");
  }

  //Remove FAB pulse
  $("#add-button").on("click", function() {
    $("#add-button").children("a").removeClass("pulse");
  });













});
