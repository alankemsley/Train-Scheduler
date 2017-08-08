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

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAgfltRcVuqmAcaJ5-qOI9OtUKC29qw558",
    authDomain: "train-schedule-2fcd4.firebaseapp.com",
    databaseURL: "https://train-schedule-2fcd4.firebaseio.com",
    projectId: "train-schedule-2fcd4",
    storageBucket: "",
    messagingSenderId: "684687732619"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Button for adding trains
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Gets user input
    var trainNumber = $("#train").val().trim();
    var trainDestination = $("#destination").val().trim();
    var trainFrequency = $("#frequency").val().trim();
    var firstTrain = $("#first").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
      train: trainNumber,
      destination: trainDestination,
      frequency: trainFrequency,
      first: firstTrain
    };

    // Uploads train data to the database
    database.ref().push(newTrain);

    // Logs everything to console
    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.first);

    // Alert
    Materialize.toast('New train added.', 4000);

    // Clears all of the text-boxes
    $("#train").val("");
    $("#destination").val("");
    $("#frequency").val("");
    $("#first").val("");
  });

  // Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainNumber = childSnapshot.val().train;
    var trainDestination = childSnapshot.val().destination;
    var trainFrequency = childSnapshot.val().frequency;
    var firstTrain = childSnapshot.val().first;

    // Train Info
    console.log(trainNumber);
    console.log(trainDestination);
    console.log(trainFrequency);
    console.log(firstTrain);

    // Add each train's data into the table
    $("#red-table").children("tbody").append("<tr><td>" + trainNumber + "</td><td>" + trainDestination + "</td><td>" +
    trainFrequency + "</td><td>" + firstTrain + "</td><td>" + firstTrain + "</td></tr>");

  });




































});
