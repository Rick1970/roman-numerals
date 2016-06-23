$(document).ready(function() {
  $("form#Roman-numeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#input").val());
    alert(number);
    var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds

    function convert(number) {
      var numeral = "";
      var digits = num.toString().split('').reverse();
      for (var i=0; i < digits.length; i++){
        numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
      }
      alert(numeral);
    }

  });
});
