$(document).ready(function(){

  // Trigger modal
  $(".modal").modal();

  // Modal format
	if ($(window).width() <= 600){
		// Slide-up modal
    $("#modal").addClass("bottom-sheet");
    $("#modal").removeClass("modal-fixed-footer");
	} else {
    // Pop-up modal
    $("#modal").removeClass("bottom-sheet");
    $("#modal").addClass("modal-fixed-footer");
  }

  //Remove FAB pulse
  $("#add-button").on("click", function() {
    $("#add-button").children("a").removeClass("pulse");
  });













});
