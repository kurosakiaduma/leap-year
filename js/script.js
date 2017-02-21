$(document).ready(function() {

    $("#lyear form").submit(function(event) {
        var one = document.getElementById("leap").value;



        var evaluate = [];


        for (var currentNumber = two; currentNumber <= one; currentNumber += two) {
            evaluate += currentNumber;
        }
        alert(evaluate);

    });
});
