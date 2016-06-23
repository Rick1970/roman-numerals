



// Business logic
var roman = function (number) {
  if (number === 1) {
    return "I";
} else if (number === 5) {
      return "V";
} else if (number === 10) {
      return "X";
} else if (number === 50) {
      return "D";
} else if (number === 100) {
      return "C";
} else if (number === 1000) {
      return "M";
  };
};



  // user interface
  $(document).ready(function() {
    $("form#Roman-numeral").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#input").val());
      var output = roman(number);
    $( "#results").append(output);

  });
});
