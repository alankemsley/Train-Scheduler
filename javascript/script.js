$(document).ready(function() {

  // Trigger modal
  $(".modal").modal();

  //Remove FAB pulse
  $("#add-button").on("click", function() {
    $("#add-button").children("a").removeClass("pulse");
  });

  //First train form nput
  $('.timepicker').pickatime({
    default: 'now',
    twelvehour: false,
    donetext: 'OK',
    cleartext: 'Clear',
    canceltext: 'Cancel',
    autoclose: false,
    ampmclickable: true,
    aftershow: function() {}
  });









});
