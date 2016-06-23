
// user interface
$(document).ready(function() {
  $("form#Roman-numeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#input").val());


// Business logic

   if (number === 1) {
    var test = ("I");
      $("#results").append(test);

  } else if (number === 5) {
      var test = ("V");
      $("#results").append(test);

  } else if (number === 10) {
      var test = ("X");
      $("#results").append(test);

  } else if (number === 50) {
      var test = ("D");
      $("#results").append(test);

  } else if (number === 100) {
      var test = ("C");
      $("#results").append(test);

  } else if (number === 1000) {
      var test = ("M");
      $("#results").append(test);

  }






  });
});
